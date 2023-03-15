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
      <div className="grid min-h-screen-full grid-cols-main-layout grid-rows-main-layout bg-gradient-to-b from-red-400 to-[#15162c]">
        <MainHeader />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default MainLayout
