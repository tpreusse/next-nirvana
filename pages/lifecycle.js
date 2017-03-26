import React, {Component} from 'react'

export default class extends Component {
  static async getInitialProps () {
    console.log('getInitialProps')
    return {
      text: 'Hello'
    }
  }
  constructor (props) {
    super(props)
    this.state = {
      i: 0
    }
    console.log('constructor')
  }
  componentWillMount () {
    console.log('componentWillMount')
  }
  componentDidMount () {
    console.log('componentDidMount')
    if (this.state.i === 0) {
      this.setState({
        i: 1
      })
    }
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  componentWillReceiveProps (props, state) {
    console.log('componentWillReceiveProps', props, state)
  }
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
  render () {
    console.log('render')
    return <div>{this.props.text}</div>
  }
}