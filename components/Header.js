import React from 'react'

export default ({children, title = true, apollo = false, and = true}) => (
  <div>
    {title && (
      <div className='title'>
        <h1>Build with Next.js and GraphQL now</h1>
        <em>by Thomas Preusse</em>
      </div>
    )}
    <div className='logos'>
      {apollo && (
        <span>
          <img src='/static/apollo-logo.png' />
          <span className='and' style={{opacity: and ? 1 : 0}}>⚭</span>
        </span>
      )}
      <img src='/static/nextjs-logo.png' />
    </div>
    <style jsx>{`
      .logos {
        position: absolute;
        height: 50px;
        left: 50px;
        right: 50px;
        top: 20px;
        max-width: 1000px;
        margin: 0 auto;
        text-align: right;
      }
      .title {
        position: absolute;
        height: 50px;
        max-width: 1000px;
        margin: 0 auto;
        left: 50px;
        right: 50px;
        top: 30px;
        font-size: 0.4em;
      }
      .title h1 {
        font-size: 1.5em;
      }
      img {
        height: 50px;
        vertical-align: middle;
      }
      .and {
        display: inline-block;
        margin: 0 20px;
        font-family: sans-serif;
        font-size: 20px;
      }
    `}</style>
  </div>
)
