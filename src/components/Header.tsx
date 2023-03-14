import GenericNavLink from './GenericNavLink'

const Header: React.FC = () => {
  // const navClass =
  return (
    <header className="flex items-center justify-between bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4">
      <GenericNavLink href="/">
        <span className="text-2xl font-bold text-white">Pokemon Simulator</span>
      </GenericNavLink>
      <NavBar
        navClass="flex items-center justify-between bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4"
        routes={['about', 'encounter']}
      ></NavBar>
      {/* </nav> */}
    </header>
  )
}

interface NavBarProps {
  navClass?: string
  routes: string[]
}

const NavBar: React.FC<NavBarProps> = ({ navClass, routes }) => {
  //   console.log(children)
  return (
    <nav className={navClass}>
      {routes.map(route => (
        <GenericNavLink href={`/${route}`} key={route}>
          {route}
        </GenericNavLink>
      ))}
    </nav>
  )
}

export default Header
