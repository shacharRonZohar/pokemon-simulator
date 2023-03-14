import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { getCollection } from '~/server/db'
import { customeFetch } from '~/server/util'

interface Pokemon {
  _id: string
  name: string
  img: string
  pokedexNumber: number
}

type RawPokemon = Omit<Pokemon, '_id'>

export const pokemonRouter = createTRPCRouter({
  getEncounter: publicProcedure.query(async () => {
    const pokedexNumber = getRandomPokedexNumber()
    const pokemonInDb = await _fetchPokemonFromDb(pokedexNumber)
    if (pokemonInDb) return pokemonInDb

    const res = await _fetchPokemonFromApi(pokedexNumber)
    if (!res) throw new Error('Could not fetch pokemon')
    const parsedPokemon = _parsePokemonFromApi(res)
    const {
      name,
      sprites: { front_default: img },
    } = parsedPokemon
    const pokemon = { name, img, pokedexNumber }
    await _savePokemonToDb(pokemon)
    return pokemon
  }),
  catchPokemon: publicProcedure.input(z.number()).mutation(async ({ input: pokedexNumber }) => {
    console.log(pokedexNumber)
    const pokemonInDb = await _fetchPokemonFromDb(pokedexNumber)
    const isCaught = _getRandomIsCaught()
    console.log(isCaught)
    if (!isCaught) return false

    return true
  }),
  getAll: publicProcedure.query(async () => {
    const res = await (await getCollection('pokemon')).find({}).toArray()
    console.log(res)
    return res
  }),
})

async function _fetchPokemonFromApi(pokedexNum: number) {
  return customeFetch(`https://pokeapi.co/api/v2/pokemon/${pokedexNum}`)
}

async function _fetchPokemonFromDb(pokedexNum: number) {
  return (await getCollection<Pokemon>('pokemon-data')).findOne({
    pokedexNumber: pokedexNum,
  })
}

function _parsePokemonFromApi(pokemon: any) {
  const pokemonSchema = z.object({
    name: z.string(),
    sprites: z.object({
      front_default: z.string(),
    }),
  })
  const parsedPokemon = pokemonSchema.parse(pokemon)
  return parsedPokemon
}

async function _savePokemonToDb(pokemon: RawPokemon) {
  return (await getCollection('pokemon-data')).insertOne(pokemon)
}
function getRandomPokedexNumber() {
  return Math.floor(Math.random() * 898) + 1
}

function _getRandomIsCaught() {
  return Math.random() < 0.5
}
