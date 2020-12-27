import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

type CodeProps = {
  children: string
  className: string
}

export const Code = ({ children, className }: CodeProps) => {
  const language = className.replace(/language-/, '') as Language

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} p-4 my-4`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export const components = {
  code: Code,
  h1: ({ children }: any) => (
    <h1 className="text-4xl font-bold mb-8">{children}</h1>
  ),
  p: ({ children }: any) => (
    <p className="text-lg leading-7 mb-4">{children}</p>
  ),
}
