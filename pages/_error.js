import React, {Component} from 'react'

import Slide from '../components/Slide'
import Header from '../components/Header'
import Layout from '../components/Layout'
import {InlineCode} from '../components/Code'

export default class Error extends Component {
  static getInitialProps ({ res, jsonPageRes }) {
    const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)
    return { statusCode }
  }

  render () {
    return (
      <Slide url={this.props.url}>
        <Header apollo />
        <Layout>
          <p>the end</p>
          <InlineCode>
            {
              this.props.statusCode
              ? this.props.statusCode
              : 'Error'
            }
          </InlineCode>
        </Layout>
      </Slide>
    )
  }
}