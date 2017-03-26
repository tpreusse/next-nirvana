import React from 'react'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return fetch('/static/cows.json').then(r => r.json())
  }
  render () {
    return <ul>{this.props.cows.map(cow => (
      <li key={cow.id}>{cow.name}</li>
    ))}</ul>
  }
}