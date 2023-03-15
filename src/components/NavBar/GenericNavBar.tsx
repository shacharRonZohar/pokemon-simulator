import React from 'react'
import { NavBarProvider } from './Context'
import GenericNavLink from './NavLink/GenericNavLink'

import type { Route } from '~/types'

interface GenericNavBarProps {
  routes: Route[]
  navClass?: string
  children: React.ReactNode
}

const GenericNavBar: React.FC<GenericNavBarProps> = ({ navClass, routes, children }) => {
  return (
    <nav className={navClass}>
      {routes.map(route => {
        return (
          <NavBarProvider value={route} key={route.name}>
            <GenericNavLink href={route.href}>{children}</GenericNavLink>
          </NavBarProvider>
        )
      })}
    </nav>
  )
}

export default GenericNavBar
