import { appendFile, readFile } from 'fs/promises'
import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { getCollection } from '~/server/db'
import { pokemonService } from '../services/pokemon'

interface Pokemon {
  _id: string
  name: string
  img: string
  pokedexNum: number
}

type RawPokemon = Omit<Pokemon, '_id'>

export const pokemonRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const res = await (await getCollection('pokemon')).find({}).toArray()
    console.log(res)
    return res
  }),
  getEncounter: publicProcedure.query(async () => {
    return pokemonService.getRandomPokemon()
  }),
  catchPokemon: publicProcedure
    .input(
      z.object({
        pokedexNum: z.number(),
        email: z.string().email().optional().default('guest@shachar.com'),
      }),
    )
    .mutation(async ({ input: { pokedexNum, email } }) => {
      console.log(pokedexNum)
      try {
        const pokemonInDb = await pokemonService.fetchPokemon(pokedexNum)
        const isCaught = pokemonService.getRandomIsCaught()
        console.log('🚀 ~ file: pokemon.ts:46 ~ .mutation ~ isCaught:', isCaught)
        if (!isCaught) return false

        await pokemonService.addPokemonToUser(email, pokemonInDb._id)
        return true
      } catch (err) {
        console.log('🚀 ~ file: pokemon.ts:46 ~ .mutation ~ err:', err)
        return false
      }
    }),

  imgError: publicProcedure.input(z.number()).mutation(async ({ input }) => {
    await appendFile('imgErrors.txt', `${input}\n`)
    console.log(input)
  }),
})
