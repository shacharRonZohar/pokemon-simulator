import React, { useContext } from 'react'
import { NavBarContext } from '../Context'

const MainNavLink: React.FC = () => {
  const { name } = useContext(NavBarContext)
  return <span className="p-2 text-2xl text-white hover:text-green-400">{name}</span>
}

export default MainNavLink
