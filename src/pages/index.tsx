import GenericNavLink from '~/components/NavBar/NavLink/GenericNavLink'
import { useState } from 'react'
import { type NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <h1 className="pb-3 text-4xl font-bold text-white">Welcome to my Pokemon simulator app!</h1>
        <p className="pb-3 text-2xl text-white">
          This is a simple app that simulates a Pokemon encounter.
        </p>
        <p className="pb-3 text-2xl text-white">
          Check out the code on{' '}
          <a
            className="text-green-400 hover:text-green-600"
            href="https://github.com/shacharRonZohar/pokemon-simulator"
            target="_blank"
          >
            Github
          </a>
          , contributions welcome!
        </p>
        <p className="pb-3 text-2xl text-white">Good luck!</p>
        <GenericNavLink href="/encounter">
          <span className="text-4xl text-green-400 hover:text-green-600"> Get Started!</span>
        </GenericNavLink>
      </main>
    </>
  )
}

export default Home
