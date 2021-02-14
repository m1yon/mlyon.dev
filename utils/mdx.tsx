import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import Image from 'next/image'
import clsx from 'clsx'
import UserAvatar from '../components/post-examples/UserAvatar'

type CodeProps = {
  children: string
  className: string
}

export const Code = ({ children, className }: CodeProps) => {
  const language = className.replace(/language-/, '') as Language

  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={children.trim()}
      language={language}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} p-4 my-4 rounded mb-8`}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {/* line number */}
              <span className="text-right w-7 inline-block text-gray-400 mr-1 select-none">
                {i + 1}{' '}
              </span>

              {/* line content */}
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
  h1: ({
    children,
    className,
  }: {
    children: React.ReactNode
    className?: string
  }) => (
    <h1 className={clsx('text-4xl font-bold mb-8', className)}>{children}</h1>
  ),
  h2: ({
    children,
    className,
  }: {
    children: React.ReactNode
    className?: string
  }) => (
    <h2 className={clsx('text-3xl font-bold mb-6 mt-12', className)}>
      {children}
    </h2>
  ),
  h3: ({
    children,
    className,
  }: {
    children: React.ReactNode
    className?: string
  }) => (
    <h3 className={clsx('text-2xl font-semibold mb-6 mt-12', className)}>
      {children}
    </h3>
  ),
  p: ({
    children,
    className,
  }: {
    children: React.ReactNode
    className?: string
  }) => <p className={clsx('text-lg leading-7 mb-8', className)}>{children}</p>,
  a: ({
    children,
    className,
    href,
  }: {
    href?: string
    children: React.ReactNode
    className?: string
  }) => (
    <a
      href={href}
      className={clsx(
        'hover:underline text-cyan-600 hover:text-cyan-500 dark:text-emerald-400 dark:hover:text-emerald-300',
        className
      )}
    >
      {children}
    </a>
  ),
  img: ({
    src,
    width,
    height,
    className,
    alt,
  }: {
    src: string
    width: number | string
    height: number | string
    className?: string
    alt: string
  }) => (
    <div>
      <Image
        src={src}
        width={width}
        height={height}
        className={className}
        alt={alt}
        layout="responsive"
      />
    </div>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-inside list-disc mb-8">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-inside list-decimal mb-8">{children}</ol>
  ),
  li: ({ children }: { children: string }) => (
    <li className="text-lg leading-7 mb-4">{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="pl-4 border-l-4 border-cyan-400 dark:border-emerald-400">
      {children}
    </blockquote>
  ),
  inlineCode: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-gray-100 dark:bg-gray-800 font-mono p-1">
      {children}
    </code>
  ),

  // post examples
  UserAvatar,
}
