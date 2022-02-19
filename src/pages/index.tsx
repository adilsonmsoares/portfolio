import type { NextPage } from 'next'
import HomeContainer from '@containers/Home'
import About from '@containers/About'
import Education from '@containers/Education'
import Layout from '@components/Layout'
import Skills from '@containers/Skills'
import Experience from '@containers/Experience'
import Project from '@containers/Project'
import Contact from '@containers/Contact'

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
