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
\`withData\` HOC (simplified code, [full version](https://github.com/zeit/next.js/blob/master/examples/with-apollo/lib/withData.js)):
      `}
      <Code>{include('../snippets/withData.js')}</Code>
      {md({code: InlineCode})`
\`getInitialProps\` performs a \`getDataFromTree\` when server rendering.
      `}
    </Layout>
  </Slide>
)
