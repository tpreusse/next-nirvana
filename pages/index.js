import Slide from '../components/Slide'
import Header from '../components/Header'
import Layout from '../components/Layout'
import md from 'markdown-in-js'

export default ({url}) => (
  <Slide url={url}>
    <Header title={false} />
    <Layout>
      {md`
# Build with Next.js and GraphQL Now

by [Thomas Preusse](https://twitter.com/tpreusse), Software Engineer at [Project R](https://github.com/orbiting)

◀️ ⌨ ️▶️  
*use keyboard arrows  
or touch edges to navigate*
      `}
    </Layout>
  </Slide>
)