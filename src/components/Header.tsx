import MainNavBar from './NavBar/MainNavBar'
import GenericNavLink from './NavBar/NavLink/GenericNavLink'

const Header: React.FC = () => {
  // const navClass =
  return (
    <header className="flex items-center justify-between bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4">
      <GenericNavLink href="/">
        <span className="text-2xl font-bold text-white">Pokemon Simulator</span>
      </GenericNavLink>
      <MainNavBar></MainNavBar>
      {/* </nav> */}
    </header>
  )
}

export default Header
