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
You can use any CSS-in-JS solution that supports server rendering  
with a custom \`<Document>\` component:
      `}
      <Code>{include('../snippets/_document.js')}</Code>
      {md({code: InlineCode})`
Examples for [\`glamor\`](https://github.com/zeit/next.js/tree/master/examples/with-glamor), [\`styletron\`](https://github.com/zeit/next.js/tree/master/examples/with-styletron) and [\`aphrodite\`](https://github.com/zeit/next.js/tree/master/examples/with-aphrodite) (among others) are available
      `}
    </Layout>
  </Slide>
)
