import GenericNavBar from './GenericNavBar'
import MainNavLink from './NavLink/MainNavLink'

const MainNavBar: React.FC = () => {
  const routes = ['home', 'encounter', 'my pokemon', 'about']
  return (
    <GenericNavBar routes={routes}>
      <MainNavLink></MainNavLink>
    </GenericNavBar>
  )
}

export default MainNavBar
