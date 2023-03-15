import { NavBarContext } from './Context'
import GenericNavLink from './NavLink/GenericNavLink'

interface GenericNavBarProps {
  navClass?: string
  routes: string[]
  children: React.ReactNode
}

const GenericNavBar: React.FC<GenericNavBarProps> = ({ navClass, routes, children }) => {
  return (
    <nav className={navClass}>
      {routes.map(route => (
        <NavBarContext.Provider value={route} key={route}>
          <GenericNavLink href={`/${route}`}>{children}</GenericNavLink>
        </NavBarContext.Provider>
      ))}
    </nav>
  )
}

export default GenericNavBar
