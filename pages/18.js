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
Then, for example in \`components/Footer.js\`:
      `}
      <Code>{include('../snippets/gql.js')}</Code>
      {md({code: InlineCode})`
now you can import and use it anywhere  
(that is ultimately wrapped in a \`withData\` page)
      `}
    </Layout>
  </Slide>
)
