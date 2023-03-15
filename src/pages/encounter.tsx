import type { NextPage } from 'next'
import EncounterDetails from '~/components/EncounterDetails'
import PokeballBtn from '~/components/btns/PokeballBtn'
import { useEncounter } from '~/hooks/queries/useEncounter'
import { useCatch } from '~/hooks/mutations/useCatch'
import { useImgError } from '~/hooks/mutations/useImgError'

const Encounter: NextPage = () => {
  const {
    encounterPokemon,
    isEncounterError,
    refetchEncounter,
    isFecthinEncounter,
    isLoadingEncounter,
  } = useEncounter()

  const { isCaught, catchPokemon } = useCatch()

  const { sendImgError } = useImgError()

  const onFetchEncounter = async () => {
    void refetchEncounter()
  }

  const onThrowBall = () => {
    if (!encounterPokemon) return
    catchPokemon({ pokedexNum: encounterPokemon.pokedexNum })
    console.log(isCaught)
    if (isCaught) alert('You caught the pokemon!')
  }
  const onImgError = () => {
    if (!encounterPokemon) return
    void sendImgError(encounterPokemon.pokedexNum)
  }
  // return <Loader></Loader>
  return (
    <>
      <main className="col-main-layout-item flex h-full flex-1 flex-col items-center justify-center bg-grass bg-cover">
        {/* {isFetching ? : } */}
        <button onClick={onFetchEncounter}>refetch test</button>
        <EncounterDetails
          onFetchEncounter={onFetchEncounter}
          // onThrowBall={onThrowBall}
          data={encounterPokemon}
          isError={isEncounterError}
          isFetching={isFecthinEncounter}
          isLoading={isLoadingEncounter}
          onImgError={onImgError}
        />
        <section className="actions">
          {/* <button onClick={onFetchEncounter}>Get Encounter</button> */}
          <PokeballBtn onThrow={onThrowBall} title="Throw Ball"></PokeballBtn>
        </section>
      </main>
    </>
  )
}

export default Encounter
