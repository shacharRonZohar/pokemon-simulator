import React from 'react'
import Image from 'next/image'

interface PokemonImgProps {
  src: string
  pokeName: string
  onImgError: () => void
}

const PokemonImg: React.FC<PokemonImgProps> = ({ src, pokeName, onImgError }) => {
  return (
    <Image
      src={src}
      alt={`The image for ${pokeName} pokemon`}
      width={100}
      height={100}
      onError={onImgError}
    />
  )
}

export default PokemonImg
