import Layout from '@components/Layout'
import About from '@containers/About'
import Contact from '@containers/Contact'
import Education from '@containers/Education'
import Experience from '@containers/Experience'
import HomeContainer from '@containers/Home'
import Project from '@containers/Project'
import Skills from '@containers/Skills'
import type { NextPage } from 'next'

const Index: NextPage = () => {
  return (
    <Layout>
      <HomeContainer />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </Layout>
  )
}

export default Index
