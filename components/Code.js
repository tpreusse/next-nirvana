import React from 'react'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light'
import js from 'highlight.js/lib/languages/javascript';
import githubGist from 'react-syntax-highlighter/dist/styles/github-gist'

registerLanguage('javascript', js)

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
  <SyntaxHighlighter
    language='javascript'
    style={githubGist}
    customStyle={{padding: 0}}>
    {children}
  </SyntaxHighlighter>
)
