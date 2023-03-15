import GenericNavBar from './GenericNavBar'
import MainNavLink from './NavLink/MainNavLink'

const MainNavBar: React.FC = () => {
  // const routes = ['home', 'encounter', 'my pokemon', 'about']
  const routes = [
    { name: 'home', href: '/' },
    { name: 'find pokemon', href: '/encounter' },
    { name: 'my pokemon', href: '/my-pokemon' },
    { name: 'about', href: '/about' },
  ]
  return (
    <GenericNavBar routes={routes} navClass="flex justify-between">
      <MainNavLink></MainNavLink>
    </GenericNavBar>
  )
}

export default MainNavBar
