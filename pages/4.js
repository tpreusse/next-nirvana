import Slide from '../components/Slide'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Code, {InlineCode} from '../components/Code'
import {Grid, Span} from '../components/Grid'
import md from 'markdown-in-js'

export default ({url}) => (
  <Slide url={url}>
    <Header />
    <Layout>
      {md({code: InlineCode})`
# One simple convention

Every \`js\` file inside the  \`pages\` directory  
becomes a route.

And pages are just React components.
      `}
      <Grid>
        <Span>
          {md({code: InlineCode})`**/** &nbsp; \`pages/index.js\``}
          <Code>{ include('../snippets/index.js') }</Code>
        </Span>
        <Span>
          {md({code: InlineCode})`**/about** &nbsp; \`pages/about.js\``}
          <Code>{ include('../snippets/about.js') }</Code>
        </Span>
      </Grid>
    </Layout>
  </Slide>
)