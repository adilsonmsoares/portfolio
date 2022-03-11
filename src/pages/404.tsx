import Layout from '@components/Layout'
import Error from '@containers/Error'
import type { NextPage } from 'next'

const Index: NextPage = () => {
  return (
    <Layout>
      <Error errorType="404" />
    </Layout>
  )
}

export default Index
