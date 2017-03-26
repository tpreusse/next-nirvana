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
You can prefetch the split-off code
      `}
      <Code>{include('../snippets/prefetch.js')}</Code>
      {md`
and get the same navigation performance as single page apps.
      `}
    </Layout>
  </Slide>
)