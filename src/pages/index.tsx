import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../../public/icons/rocketseat.svg'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Adilson Soares</title>
      </Head>
      <section>
        <div>
          <RocketseatLogo />
          <h1>ReactJS Structure</h1>
          <p>A ReactJS + Next.js structure made by Rocketseat.</p>
        </div>
      </section>
    </>
  )
}

export default Home
