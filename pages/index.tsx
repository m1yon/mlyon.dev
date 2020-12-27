import React from 'react'
import getAllBlogPosts from 'utils/getAllBlogPosts'
import { GetStaticProps } from 'next'
import { BlogPostPreview, SEO } from 'components'

type HomeProps = {
  posts: BlogPost[]
}

const Home = ({ posts }: HomeProps) => {
  return (
    <>
      <SEO title="Michael Lyon" />
      <h2 className="text-2xl font-semibold mb-4 px-4">Recent Posts</h2>
      {posts.map((post) => {
        return (
          <BlogPostPreview
            key={post.data.slug}
            route={`/blog/${post.data.slug}`}
            post={post}
          />
        )
      })}
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllBlogPosts()

  return { props: { posts } }
}
