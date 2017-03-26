import Slide from '../components/Slide'
import Header from '../components/Header'
import Layout from '../components/Layout'
import md from 'markdown-in-js'

export default ({url}) => (
  <Slide url={url}>
    <Header />
    <Layout>
      {md`
Behind the scene you get

- automatic transpilation and bundling  
  (with webpack and babel)
- automatic code splitting
- hot code reloading
- server rendering

for free
      `}
    </Layout>
  </Slide>
)