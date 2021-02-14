import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { duotoneEarth as theme } from "react-syntax-highlighter/dist/esm/styles/prism"
//dracula DuoToneEarth Sea hopscotch materialOceanic
const CodeBlock = ({ language, value }) => {
    return (
      <SyntaxHighlighter language={language} style={theme}>
        {value}
      </SyntaxHighlighter>
    )
  }
  
  export default CodeBlock