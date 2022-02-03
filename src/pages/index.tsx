import type { NextPage } from 'next'
import HomeContainer from '@containers/Home'
import About from '@containers/About'
import Education from '@containers/Education'
import Layout from '@components/Layout'
import Skills from '@containers/Skills'

const Index: NextPage = () => {
  return (
    <Layout>
      <HomeContainer />
      <About />
      <Education />
      <Skills />
    </Layout>
  )
}

export default Index
