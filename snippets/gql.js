import { gql, graphql } from 'react-apollo'

const metaQuery = gql`query meta {
  meta {
    links {
      id
      title
      path
    }
  }
}`

const Footer = ({data: {loading, error, meta}}) => (
  <ul>{meta.links.map(link => (
    <li key={link.id}><a href={link.path}>
      {link.title}
    </a></li>
  ))}</ul>
)

export default graphql(metaQuery)(Footer)
