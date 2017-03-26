import Slide from '../components/Slide'
import Header from '../components/Header'
import Layout from '../components/Layout'
import md from 'markdown-in-js'

export default ({url}) => (
  <Slide url={url}>
    <Header />
    <Layout>
      {md`
Setting up an environment for this is hard

— without Next.js
      `}
    </Layout>
  </Slide>
)