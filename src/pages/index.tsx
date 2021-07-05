import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../../public/icons/rocketseat.svg'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Adilson Soares</title>
      </Head>
      <div className="container v-spacing-ultra">
        <RocketseatLogo />
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + Next.js structure made by Rocketseat.</p>
      </div>
    </>
  )
}

export default Home
