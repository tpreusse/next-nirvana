import Slide from '../components/Slide'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Code, {InlineCode} from '../components/Code'
import md from 'markdown-in-js'

export default ({url}) => (
  <Slide url={url}>
    <Header />
    <Layout>
      {md({code: InlineCode})`
Things you **can't** do:

\`require('./image.png')\` and \`require('./style.css')\`
      `}
      {md({code: InlineCode})` 
This won't work on the server, only the client code  
gets bundled with webpack.

There is a \`static\` folder for images and CSS-in-JS for styles.

*Use babel plugins instead of webpack loaders,  
they're applied consistently between server and client.*
      `}
    </Layout>
  </Slide>
)