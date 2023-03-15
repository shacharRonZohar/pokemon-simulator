import MainHeader from './MainHeader'

import type { ReactNode } from 'react'

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default MainLayout
