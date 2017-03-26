import React, {PureComponent} from 'react'
import Router from 'next/router'

class Slide extends PureComponent {
  constructor (props) {
    super(props)
    this.onKeyUp = () => {
      if (event.which === 37) {
        this.onPrev()
      }
      if (event.which === 39) {
        this.onNext()
      }
    }
  }
  componentDidMount () {
    document.addEventListener('keyup', this.onKeyUp);
  }
  componentWillUnmount () {
    document.removeEventListener('keyup', this.onKeyUp);
  }
  onPrev () {
    const {url: {pathname}} = this.props
    const page = +pathname.replace(/^\//, '')
    if (page > 0) {
      Router.push(`/${page - 1 || ''}`)
    }
  }
  onNext () {
    const {url: {pathname}} = this.props
    const page = +pathname.replace(/^\//, '')
    Router.push(`/${page + 1}`)
  }
  render () {
    const {children} = this.props
    return (
      <div>
        <div className='prev' onClick={() => this.onPrev()} />
        {children}
        <div className='next' onClick={() => this.onNext()} />
        <style jsx>{`
          .prev {
            position: absolute;
            width: 50px;
            left: 0;
            top: 0;
            bottom: 0;
            cursor: pointer;
          }
          .next {
            position: absolute;
            width: 50px;
            right: 0;
            top: 0;
            bottom: 0;
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  }
}

export default Slide
