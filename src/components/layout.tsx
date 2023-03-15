import Head from 'next/head'
import MainHeader from './MainHeader'

import type { ReactNode } from 'react'

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokemon Simulator</title>
        <meta name="description" content="A pokemon simulator built for educational purposes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-main-layout bg-gradient-to-b from-red-400 to-[#15162c]">
        <MainHeader />
        <main className="col-main-layout-item">{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default MainLayout
