import type { NextPage } from 'next'
import HomeContainer from '@containers/Home'
import About from '@containers/About'
import Education from '@containers/Education'
import Layout from '@components/Layout'
import Skills from '@containers/Skills'
import Experience from '@containers/Experience'
import Project from '@containers/Project'

const Index: NextPage = () => {
  return (
    <Layout>
      <HomeContainer />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Project />
    </Layout>
  )
}

export default Index
