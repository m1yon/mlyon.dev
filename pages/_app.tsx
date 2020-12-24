import React from 'react'
import { AppProps } from 'next/app'
import { withDarkMode } from 'hooks/useDarkMode'
import { useDarkMode } from 'hooks'
import Head from 'next/head'
import { Header, Hero } from 'components'
import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'
import 'tailwindcss/tailwind.css'

function Code({ children, className }: any) {
  const language = className.replace(/language-/, '')

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

const components = {
  code: Code,
  h1: ({ children }: any) => (
    <h1 className="text-4xl font-bold mb-8">{children}</h1>
  ),
  p: ({ children }: any) => (
    <p className="text-xl leading-7 mb-4">{children}</p>
  ),
}

const App = ({ Component, pageProps }: AppProps) => {
  const [darkMode] = useDarkMode()

  return (
    <MDXProvider components={components}>
      <div className={darkMode ? 'dark' : ''}>
        <Head>
          <title>Michael Lyon</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="text-gray-900 dark:text-gray-50 flex flex-col min-h-screen flex-1 items-center overflow-x-hidden bg-white dark:bg-gray-900">
          <div className="bg-gray-50 dark:bg-gray-800 w-full overflow-hidden">
            <Header />
            <Hero />
          </div>

          <div className="container mx-auto pb-8 pt-16 xl:px-80 2xl:px-96">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </MDXProvider>
  )
}

export default withDarkMode(App)
