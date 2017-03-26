import { ApolloProvider, getDataFromTree } from 'react-apollo'

export default Component => (
  class class extends React.Component {
    static async getInitialProps () {
      if (!process.browser) {
        const client = initClient()
        const app = (<ApolloProvider client={client}>
          <Component />
        </ApolloProvider>)
        await getDataFromTree(app)

        return {initialState: client.getInitialState().data}
      }
    }
    render () {
      return (<ApolloProvider client={initClient(this.props.initialState)}>
        <Component {...this.props} />
      </ApolloProvider>)
    }
  }
)