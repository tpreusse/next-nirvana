import Link from 'next/link'

const Link = () => (
  <Link href={{pathname: 'blog', query: {slug: 'next-2'}}}
    as='/blog/next-2'>
    <a>Next 2</a>
  </Link>
)