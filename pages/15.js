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
Note: \`getInitialProps\` is only available in \`pages\` components.

Next: GraphQL
      `}
    </Layout>
  </Slide>
)