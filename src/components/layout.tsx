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
      <MainHeader />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default MainLayout
