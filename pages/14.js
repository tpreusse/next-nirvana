import Slide from '../components/Slide'
import Header from '../components/Header'
import Layout from '../components/Layout'
import ImageBlock from '../components/ImageBlock'
import Code, {InlineCode} from '../components/Code'
import md from 'markdown-in-js'

export default ({url}) => (
  <Slide url={url}>
    <Header />
    <Layout>
      <ImageBlock src='/static/nextjs-underthehood.svg' />
    </Layout>
  </Slide>
)