import React from 'react'
import getAllBlogPosts from 'utils/getAllBlogPosts'
import { GetStaticProps, GetStaticPaths } from 'next'
import { components } from 'utils/mdx'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { format } from 'date-fns'
import { SEO } from 'components'

type BlogPostProps = {
  post: BlogPost
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
}

const BlogPost = ({ post, mdxSource }: BlogPostProps) => {
  return (
    <div>
      <SEO
        title={post.data.title}
        url={`/blog/${post.data.slug}`}
        description={post.data.description}
        image={post.data.image}
      />
      <h1 className="text-4xl font-bold">{post.data.title}</h1>
      <h4 className="text-gray-600 dark:text-gray-400 mb-8">
        {format(new Date(post.data.date), 'PPP')}
      </h4>
      <MDXRemote {...mdxSource} components={components} />
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
      mdxSource: await serialize(post?.content || ''),
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
