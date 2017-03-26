import Slide from '../components/Slide'
import Header from '../components/Header'
import Layout from '../components/Layout'
import md from 'markdown-in-js'

export default ({url}) => (
  <Slide url={url}>
    <Header />
    <Layout>

      {md`
State of awesome for  
interactive websites

- CSS-in-JS
- code splitting
- server rendering
- data via GraphQL
      `}
    </Layout>
  </Slide>
)