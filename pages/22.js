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
Don't want all the hustle?

Use [\`next-routes\`](https://github.com/fridays/next-routes) or [\`next-url-prettifier\`](https://github.com/BDav24/next-url-prettifier),  
and setup a \`routes.js\`: 
      `}
      <Code>{include('../snippets/nextRoutes.js')}</Code>
      {md({code: InlineCode})`
Reminds me of the good old \`routes.rb\`.
      `}
    </Layout>
  </Slide>
)
