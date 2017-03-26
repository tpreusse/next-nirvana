import Slide from '../components/Slide'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Code, {InlineCode} from '../components/Code'
import md from 'markdown-in-js'

export default ({url}) => (
  <Slide url={url}>
    <Header apollo and={false} />
    <Layout>
      {md({code: InlineCode})`
Next.js comes with [over 40 examples](https://github.com/zeit/next.js/tree/master/examples).  
[\`with-apollo\`](https://github.com/zeit/next.js/tree/master/examples/with-apollo) by [\`github.com/ads1018\`](https://github.com/ads1018)  
is one of them.

And Apollo is:  
*The fully-featured, production ready*  
*caching GraphQL client for every UI framework*

The example provides a higher-order component (HOC)  
that integrates \`react-apollo\` and allows to query  
GraphQL anywhere in your component tree.

All you need to do is wrap your page \`withData\`,  
e.g. \`pages/about.js\`:
      `}
      <Code>{include('../snippets/wrappedPage.js')}</Code>
    </Layout>
  </Slide>
)