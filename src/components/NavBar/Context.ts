import { createContext } from 'react'
import type { Route } from '~/types'

export const NavBarContext = createContext<Route>({
  name: '',
  href: '',
})

export const NavBarProvider = NavBarContext.Provider
