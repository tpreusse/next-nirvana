import React from 'react'
import cowsay from 'cowsay-browser'

export default () => (
  <pre>{cowsay.say({
    text: 'We populate Switzerland'
  })}</pre>
)