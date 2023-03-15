import type { NextPage } from 'next'
import Image from 'next/image'
import Loader from '~/components/Loader/Loader'
import { api } from '~/utils/api'

const Encounter: NextPage = () => {
  const { data, isError, isLoading } = api.pokemon.getEncounter.useQuery(undefined, {
    refetchOnMount: false,
    refetchOnReconnect: false,
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
      <main className="col-main-layout-item flex h-full flex-1 flex-col items-center justify-center bg-grass bg-cover">
        {isLoading && <Loader></Loader>}
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
