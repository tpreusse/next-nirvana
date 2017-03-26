import React from 'react'

export const InlineCode = ({children}) => (
  <code>
    {children}
    <style jsx>{`
      code {
        color: purple;
        font-size: 1em;
      }
    `}</style>
  </code>
) 

export default ({children}) => (
  <pre>
    <InlineCode>{children}</InlineCode>
  </pre>
)
