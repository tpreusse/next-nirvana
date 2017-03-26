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
\`styled-jsx\` with a runtime size of only 2kb is build-in:
      `}
      <Grid>
        <Span>
          <p>Source</p>
          <Code>{include('../snippets/styled.js')}</Code>
        </Span>
        <Span>
          <p>Transpilation</p>
          <Code>{include('../snippets/styled-transpiled.js')}</Code>
        </Span>
      </Grid>
    </Layout>
  </Slide>
)
