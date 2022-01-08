import type { NextPage } from 'next'
import HomeContainer from '@containers/home'
import About from '@containers/about'
import Education from '@containers/education'

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
