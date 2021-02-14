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
      <SEO
        title="Michael Lyon"
        url="/"
        description="Come check out my personal blog where I share my knowledge and experience as a professional developer. New blog posts every single week!"
        image="/img/hero.png"
      />

      <svg
        className="absolute text-gray-50 dark:text-gray-900"
        style={{
          top: 438,
          left: '-4%',
          width: '110vw',
          height: '100px',
          minWidth: '1000px',
          zIndex: 0,
        }}
        viewBox="0 0 806 84"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M405.5 30.75C462.5 59 517.269 55 600 36.25C682.731 17.5 718.231 8.75 805.269 30.75V85.5H0.731201V30.75C65.2094 55.2541 113 25.25 202.5 8.75C292 -7.75 348.5 2.5 405.5 30.75Z"
          className="fill-current"
        />
      </svg>

      <h2 className="text-lg font-bold px-4 text-emerald-500 dark:text-cyan-500 tracking-widest">
        RECENT POSTS
      </h2>
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
