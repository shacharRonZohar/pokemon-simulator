import React from 'react'
import { NavBarProvider } from './Context'
import GenericNavLink from './NavLink/GenericNavLink'

interface GenericNavBarProps {
  routes: string[]
  navClass?: string
  children: React.ReactNode
}

const GenericNavBar: React.FC<GenericNavBarProps> = ({ navClass, routes, children }) => {
  return (
    <nav className={navClass}>
      {routes.map(route => {
        let href = '/'
        if (route !== 'home') href += route

        return (
          <NavBarProvider value={route} key={route}>
            <GenericNavLink href={href}>{children}</GenericNavLink>
          </NavBarProvider>
        )
      })}
    </nav>
  )
}

export default GenericNavBar
