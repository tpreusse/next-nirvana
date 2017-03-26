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
Okey, now we've covered:

- CSS-in-JS
- code splitting
- server rendering
- data via GraphQL

What if I only have a JSON API?  
*Don't worry, [apollographql/graphql-server](https://github.com/apollographql/graphql-server) allows you to write one.*  
*I'll show you. But first another thing.*
      `}
    </Layout>
  </Slide>
)
