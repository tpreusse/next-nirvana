import Link from 'next/link'
import Router from 'next/router'

const Link = () => (
  <Link href="/about"><a>About</a></Link>
)

const Button = () => (
  <button onClick={() => Router.push('/about')}>
    About
  </button>
)
