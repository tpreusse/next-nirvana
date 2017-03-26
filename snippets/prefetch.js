const Link = () => (
  <Link href="/about" prefetch><a>About</a></Link>
)

const Search = () => (
  <input onFocus={() => Router.prefetch('/search')} />
)
