import React, { useContext } from 'react'
import { NavBarContext } from '../Context'

const MainNavLink: React.FC = () => {
  const route = useContext(NavBarContext)
  console.log(route)
  return <span>{route}</span>
}

export default MainNavLink
