import Header from './Header'

import type { ReactNode } from 'react'

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default MainLayout
