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
You can easily inject into \`<head>\`
      `}
      <Code>{include('../snippets/meta.js')}</Code>
      {md({code: InlineCode})` 
from anywhere in your component tree.
      `}
    </Layout>
  </Slide>
)