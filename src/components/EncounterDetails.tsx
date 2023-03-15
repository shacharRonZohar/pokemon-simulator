import PokemonImg from '~/components/PokemonImg'
import Loader from '~/components/Loader/Loader'

import type { Pokemon } from '~/types'

interface EncounterDetailsProps {
  onFetchEncounter: () => unknown
  data: Pokemon | undefined
  isError: boolean
  isLoading: boolean
  isFetching: boolean
  onImgError: () => void
}

const EncounterDetails: React.FC<EncounterDetailsProps> = ({
  onFetchEncounter,
  data,
  isError,
  isLoading,
  isFetching,
  onImgError,
}) => {
  console.log(isLoading, isFetching)
  if (isFetching) return <Loader></Loader>
  if (!data) return <button onClick={onFetchEncounter}>Search for a pokemon</button>
  return (
    <section className="flex">
      <span>
        Wow! You found <span className="capitalize">{data.name}</span>!
      </span>
      <PokemonImg src={data.img} pokeName={data.name} onImgError={onImgError} />
      {/* <button onClick={onThrowBall}>Throw Ball</button> */}
    </section>
  )
}

export default EncounterDetails
