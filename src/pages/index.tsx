import Layout from '@components/Layout'
import About from '@containers/About'
import Contact from '@containers/Contact'
import Education from '@containers/Education'
import Experience from '@containers/Experience'
import HomeContainer from '@containers/Home'
import Project from '@containers/Project'
import Skills from '@containers/Skills'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const Index: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  }, [])

  return (
    <Layout isLoading={isLoading} scrollSmooth>
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
