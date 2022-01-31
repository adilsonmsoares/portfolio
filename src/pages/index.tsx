import type { NextPage } from 'next'
import HomeContainer from '@containers/Home'
import About from '@containers/About'
import Education from '@containers/Education'
import Layout from '@components/Layout'

const Index: NextPage = () => {
  return (
    <Layout>
      <HomeContainer />
      <About />
      <Education />
    </Layout>
  )
}

export default Index
