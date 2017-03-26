import Head from 'next/head'

const MetaTags = ({title, description, image}) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta property='og:type' content='website' />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    {!!image && <meta property='og:image' content={image} />}
  </Head>
)
