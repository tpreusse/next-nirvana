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
# Demo

A new version of [lobbywatch.ch](https://lobbywatch.ch),  
implemented with Next.js.

Already open source and looking for contributors:  
[github.com/lobbywatch/website](https://github.com/lobbywatch/website)
      `}
    </Layout>
  </Slide>
)
