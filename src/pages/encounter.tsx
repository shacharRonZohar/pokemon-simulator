import type { NextPage } from 'next'
import Image from 'next/image'
import { api } from '~/utils/api'

const Encounter: NextPage = () => {
  const { data, isError, isLoading } = api.pokemon.getEncounter.useQuery(undefined, {
    refetchOnWindowFocus: false,
  })

  const { data: isCaught, mutate } = api.pokemon.catchPokemon.useMutation()
  const onThrowBall = () => {
    if (!data) return
    mutate({ pokedexNum: data.pokedexNum, email: 'test@gmail.com' })
    console.log(isCaught)
    if (isCaught) alert('You caught the pokemon!')
  }
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-emerald-500">
        <h1 className="text-4xl font-bold text-white">Encounter</h1>
        {isLoading && <p className="text-2xl text-white">Loading...</p>}
        {isError && <p className="text-2xl text-white">Error!</p>}
        {data && (
          <section className="flex">
            <span>Wow! You found {data.name}!</span>
            <Image
              src={data.img}
              alt={`The image for ${data.name} pokemon`}
              width={100}
              height={100}
            />
            <button onClick={onThrowBall}>Throw Ball</button>
          </section>
        )}
      </main>
    </>
  )
}

export default Encounter
