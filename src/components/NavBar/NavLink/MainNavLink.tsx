import React, { useContext } from 'react'
import { NavBarContext } from '../Context'

const MainNavLink: React.FC = () => {
  const route = useContext(NavBarContext)
  return <span className="p-2 text-white hover:text-green-400">{route}</span>
}

export default MainNavLink
