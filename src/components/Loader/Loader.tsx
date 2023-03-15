import styles from './Loader.module.scss'
import 'animate.css'

const Loader: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className={`${styles.pokeball || ''} rubber-band`}></div>
    </div>
  )
}

export default Loader
