import type { NextPage } from 'next'
import Home from './home'
import About from './about'
import Education from './education'

const Index: NextPage = () => {
  return (
    <>
      <Home />
      <About />
      <Education />
    </>
  )
}

export default Index
