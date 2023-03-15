import type { NextPage } from 'next'
import EncounterDetails from '~/components/EncounterDetails'
import PokeballBtn from '~/components/btns/PokeballBtn'
import { api } from '~/utils/api'

const Encounter: NextPage = () => {
  const { data, isError, refetch, isFetching, isLoading } = api.pokemon.getEncounter.useQuery(
    undefined,
    {
      enabled: false,
      // refetchOnMount: false,
      // refetchOnReconnect: false,
      // refetchOnWindowFocus: false,
    },
  )

  const { data: isCaught, mutate } = api.pokemon.catchPokemon.useMutation()

  const onFetchEncounter = () => {
    void refetch()
  }
  const onThrowBall = () => {
    if (!data) return
    mutate({ pokedexNum: data.pokedexNum, email: 'test@gmail.com' })
    console.log(isCaught)
    if (isCaught) alert('You caught the pokemon!')
  }
  // return <Loader></Loader>
  return (
    <>
      <main className="col-main-layout-item flex h-full flex-1 flex-col items-center justify-center bg-grass bg-cover">
        {/* {isFetching ? : } */}
        <EncounterDetails
          onFetchEncounter={onFetchEncounter}
          // onThrowBall={onThrowBall}
          data={data}
          isError={isError}
          isFetching={isFetching}
          isLoading={isLoading}
        />
        <section className="actions">
          {/* <button onClick={onFetchEncounter}>Get Encounter</button> */}
          <PokeballBtn onClick={onThrowBall} title="Throw Ball"></PokeballBtn>
        </section>
      </main>
    </>
  )
}

export default Encounter
