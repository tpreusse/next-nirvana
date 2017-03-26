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
# What About Data Loading?
\`pages\` have a lifecycle.
The React lifecycle, *with one addition:*

\`static async getInitialProps\` — a lifecycle hook to load data

It runs before the \`constructor\`, on the server or client.

For example \`pages/about.js\` could load a json:
      `}
      <Code>{include('../snippets/getInitialProps.js')}</Code>
      {md({code: InlineCode})`
The server rendered version will contain the data.
      `}
    </Layout>
  </Slide>
)