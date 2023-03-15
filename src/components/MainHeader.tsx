import MainNavBar from './NavBar/MainNavBar'
import GenericNavLink from './NavBar/NavLink/GenericNavLink'

const MainHeader: React.FC = () => {
  return (
    <header className="col-main-layout-item flex items-center justify-between p-4">
      <GenericNavLink href="/">
        <span className="text-3xl font-bold text-white">Pokemon Simulator</span>
      </GenericNavLink>
      <MainNavBar />
    </header>
  )
}

export default MainHeader
