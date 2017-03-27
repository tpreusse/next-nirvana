import Slide from '../components/Slide'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Code from '../components/Code'
import md from 'markdown-in-js'

export default ({url}) => (
  <Slide url={url}>
    <Header />
    <Layout>
      {md`
Setting up a Next.js app is easy 
      `}
      <Code>{include('../snippets/package.json')}</Code>
    </Layout>
  </Slide>
)