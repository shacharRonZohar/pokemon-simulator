interface PokeballBtnProps {
  onThrow: () => void
  title: string
}

const PokeballBtn: React.FC<PokeballBtnProps> = ({ onThrow, title }) => {
  return (
    // <div className="flex flex-col items-center justify-center">
    <div className="pokemon-btn" title={title} onClick={onThrow}></div>
    // </div>
  )
}

export default PokeballBtn
