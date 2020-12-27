import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import Image from 'next/image'
import clsx from 'clsx'

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
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} p-4 my-4 rounded mb-8`}>
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
  h1: ({
    children,
    className,
  }: {
    children: React.ReactNode
    className?: string
  }) => (
    <h1 className={clsx('text-4xl font-bold mb-8', className)}>{children}</h1>
  ),
  p: ({
    children,
    className,
  }: {
    children: React.ReactNode
    className?: string
  }) => <p className={clsx('text-lg leading-7 mb-4', className)}>{children}</p>,
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
        'hover:underline text-emerald-500 hover:text-emerald-400',
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
}
