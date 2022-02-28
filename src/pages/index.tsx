import Layout from '@components/Layout'
import type { NextPage } from 'next'
import About from '../containers/About'
import Contact from '../containers/Contact'
import Education from '../containers/Education'
import Experience from '../containers/Experience'
import HomeContainer from '../containers/Home'
import Project from '../containers/Project'
import Skills from '../containers/Skills'

const Index: NextPage = () => {
  return (
    <Layout scrollSmooth>
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
