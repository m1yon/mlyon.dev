import React from 'react'
import getAllBlogPosts from 'utils/getAllBlogPosts'
import { GetStaticProps } from 'next'
import Link from 'next/link'

type HomeProps = {
  posts: BlogPost[]
}

const Home = ({ posts }: HomeProps) => {
  return (
    <>
      <p>Homepage</p>
      {posts.map((item) => {
        return (
          <Link href={`/blog/${item.data.slug}`} key={item.data.slug}>
            {item.data.title}
          </Link>
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
