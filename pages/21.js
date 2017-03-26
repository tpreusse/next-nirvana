import Slide from '../components/Slide'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Code, {InlineCode} from '../components/Code'
import md from 'markdown-in-js'

export default ({url}) => (
  <Slide url={url}>
    <Header apollo />
    <Layout>
      {md({code: InlineCode})`
Start a server 100% programmatically:
      `}
      <Code>{include('../snippets/customServer.js')}</Code>
      {md({code: InlineCode})`
Now you have all the power. (And solved your little routing problem.)
      `}
    </Layout>
  </Slide>
)
