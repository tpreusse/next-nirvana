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
# Custom Server

The file-system is a great API.  
And makes things as simple as in the PHP days.

But what about \`/blog/:slug\`?
      `}
    </Layout>
  </Slide>
)
