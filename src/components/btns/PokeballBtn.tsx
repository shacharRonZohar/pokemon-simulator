interface PokeballBtnProps {
  onClick: () => void
  title: string
}

const PokeballBtn: React.FC<PokeballBtnProps> = ({ onClick, title }) => {
  return (
    // <div className="flex flex-col items-center justify-center">
    <div className="pokemon-btn" title={title} onClick={onClick}></div>
    // </div>
  )
}

export default PokeballBtn
