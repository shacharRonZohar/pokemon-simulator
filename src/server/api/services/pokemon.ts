import { z } from 'zod'
import { customeFetch } from '~/server/util'
import { getCollection } from '~/server/db'
import type { ObjectId, WithId } from 'mongodb'

export const pokemonService = {
  fetchPokemon,
  getRandomPokemon,
  getRandomIsCaught,
  addPokemonToUser,
}

export interface Pokemon {
  _id: string | ObjectId
  name: string
  img: string
  pokedexNum: number
}

type RawPokemon = Omit<Pokemon, '_id'>

async function getRandomPokemon() {
  const pokedexNum = _getRandomPokedexNumber()
  const pokemon = await fetchPokemon(pokedexNum)
  return { ...pokemon }
}

async function fetchPokemon(pokedexNum: number): Promise<WithId<Pokemon>> {
  try {
    const pokemonInDb = await _fetchPokemonFromDb(pokedexNum)
    if (pokemonInDb) return pokemonInDb
    const pokemonFromApi = await _fetchPokemonFromApi(pokedexNum)
    const parsedPokemon = _parsePokemonFromApi(pokemonFromApi)
    const pokemon = { ...parsedPokemon, pokedexNum }
    const { insertedId: _id } = await _savePokemonToDataDb(pokemon)
    return { _id, ...pokemon }
  } catch (err) {
    console.log('🚀 ~ file: pokemon.ts:58 ~ _fetchPokemon ~ err:', err)
    throw err
  }
}

async function addPokemonToUser(email: string, pokemonId: string | ObjectId) {
  return (await getCollection('users')).updateOne(
    {
      email,
    },
    {
      $push: {
        pokemonIds: pokemonId,
      },
    },
  )
}

function getRandomIsCaught() {
  return Math.random() < 0.5
}

function _getRandomPokedexNumber() {
  return Math.floor(Math.random() * 898) + 1
}

async function _fetchPokemonFromApi(pokedexNum: number) {
  return customeFetch(`https://pokeapi.co/api/v2/pokemon/${pokedexNum}`)
}

async function _fetchPokemonFromDb(pokedexNum: number) {
  return (await getCollection<Pokemon>('pokemon-data')).findOne({
    pokedexNum: pokedexNum,
  })
}

async function _savePokemonToDataDb(pokemon: RawPokemon) {
  return (await getCollection('pokemon-data')).insertOne(pokemon)
}

function _parsePokemonFromApi(pokemon: unknown) {
  const rawPokemonSchema = z.object({
    name: z.string(),
    sprites: z.object({
      front_default: z.string(),
    }),
  })
  const {
    name,
    sprites: { front_default: img },
  } = rawPokemonSchema.parse(pokemon)
  return { name, img }
}
