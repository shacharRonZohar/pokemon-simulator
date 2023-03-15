import Image from 'next/image'
import Loader from '~/components/Loader/Loader'

import type { Pokemon } from '~/types'

interface EncounterDetailsProps {
  onFetchEncounter: () => void
  data: Pokemon | undefined
  isError: boolean
  isLoading: boolean
  isFetching: boolean
}

const EncounterDetails: React.FC<EncounterDetailsProps> = ({
  onFetchEncounter,
  data,
  isError,
  isLoading,
  isFetching,
}) => {
  if (isLoading && isFetching) return <Loader></Loader>
  if (!data) return <button onClick={onFetchEncounter}>Search for a pokemon</button>
  return (
    <section className="flex">
      <span>
        Wow! You found <span className="capitalize">{data.name}</span>!
      </span>
      <Image src={data.img} alt={`The image for ${data.name} pokemon`} width={100} height={100} />
      {/* <button onClick={onThrowBall}>Throw Ball</button> */}
    </section>
  )
}

export default EncounterDetails
