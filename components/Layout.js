import React from 'react'
import Head from 'next/head'

export default ({children}) => (
  <div className='root'>
    <div className='container'>{children}</div>
    <style jsx>{`
      .root {
        min-height: 100vh;
        box-sizing: border-box;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 90px;
        padding-bottom: 50px;
      }
      .container {
        max-width: 1000px;
        margin: 0 auto;
      }
    `}</style>
    <style jsx global>{`
      body {
        padding: 0;
        margin: 0;
        font-family: 'Helvetica Neue', Helvetica, sans-serif;
        font-size: 1.3em;
      }
      h1, h2 {
        font-weight: normal;
      }
      h1 {
        margin: 0;
      }
      p, ul {
        margin: 0 0 1em;
      }
      a {
        color: #000;
      }
    `}</style>
  </div>
)
