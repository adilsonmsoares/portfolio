import type { NextPage } from 'next'
import HomeContainer from '@containers/Home'
import About from '@containers/About'
import Education from '@containers/Education'

const Index: NextPage = () => {
  return (
    <>
      <HomeContainer />
      <About />
      <Education />
    </>
  )
}

export default Index
