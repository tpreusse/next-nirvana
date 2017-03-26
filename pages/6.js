import Slide from '../components/Slide'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Code, {InlineCode} from '../components/Code'
import md from 'markdown-in-js'

export default ({url}) => (
  <Slide url={url}>
    <Header />
    <Layout>
      {md({code: InlineCode})`
Routing is taken care of
      `}
      <Code>{include('../snippets/router.js')}</Code>
    </Layout>
  </Slide>
)