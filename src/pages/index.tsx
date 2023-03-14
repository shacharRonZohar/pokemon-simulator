import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import { api } from '~/utils/api'

const Home: NextPage = () => {
  const [email, setEmail] = useState('')
  const onEmailChange = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
    // console.log(ev.a)
    setEmail(value)
  }

  const onSubmitEmail = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    console.log(email)
  }

  return (
    <>
      <Head>
        <title>Pokemon Simulator</title>
        <meta name="description" content="A pokemon simulator built for educational purposes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="text-4xl font-bold text-white">Welcome to my Pokemon Simulator App!</h1>
        <p className="text-2xl text-white">
          This is a simple app that simulates a Pokemon encounter.
        </p>
        {/* <p className="text-2xl text-white">
          Please enter your email if you wish your caught pokemon data to be saved and attributed to
          you, otherwise you can just click the button below to start the encounter.
        </p> */}
        {/* <form onSubmit={onSubmitEmail}>
          <input type="email" onChange={onEmailChange} value={email} className="border-black" />
          <button>Submit Email</button>
        </form> */}
        <p className="text-2xl text-white">You can also check out the code on Github.</p>
        {/* TODO: Add github link */}
        <p className="text-2xl text-white">Good luck!</p>
        <Link href="/encounter" className="text-4xl text-green-500">
          Get Started!
        </Link>
      </main>
    </>
  )
}

export default Home
