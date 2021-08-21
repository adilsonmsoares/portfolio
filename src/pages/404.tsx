import React from 'react'
import Head from 'next/head'

import { Container } from '@styles/pages/404'

import Title from '@components/Typography/Title'
import Descrition from '@components/Typography/Description'

import Robot from '../../public/icons/robot.svg'

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | Adilson Soares</title>
      </Head>
      <Container>
        <Robot />
        <Title>404 | Page Not Found</Title>
        <Descrition>
          Sorry, can’t find the page you were looking for.
        </Descrition>
      </Container>
    </>
  )
}

export default NotFound
