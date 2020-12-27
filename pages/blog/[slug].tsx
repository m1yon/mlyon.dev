import React from 'react'
import getAllBlogPosts from 'utils/getAllBlogPosts'
import { GetStaticProps, GetStaticPaths } from 'next'
import { components } from 'utils/mdx'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { format } from 'date-fns'
import { SEO } from 'components'

type BlogPostProps = {
  post: BlogPost
  mdxSource: React.ReactNode
}

const BlogPost = ({ post, mdxSource }: BlogPostProps) => {
  const content = hydrate(mdxSource, { components })

  return (
    <div>
      <SEO title={post.data.title} />
      <h1 className="text-4xl font-bold">{post.data.title}</h1>
      <h4 className="text-gray-600 dark:text-gray-400 mb-8">
        {format(new Date(post.data.date), 'PPP')}
      </h4>
      {content}
    </div>
  )
}

export default BlogPost

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || Array.isArray(params.slug))
    throw new Error('Invalid slug provided')

  const posts = await getAllBlogPosts()

  const post = posts.find((post) => post.data.slug === params.slug)

  return {
    props: {
      post,
      mdxSource: await renderToString(post?.content || '', { components }),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllBlogPosts()

  const paths = posts.map((post) => {
    return `/blog/${post.data.slug}`
  })

  return { paths, fallback: false }
}
