import type { ObjectId } from 'mongodb'
export interface Route {
  name: string
  href: string
}

export interface Pokemon {
  _id: string | ObjectId
  name: string
  img: string
  pokedexNum: number
}

export type RawPokemon = Omit<Pokemon, '_id'>
