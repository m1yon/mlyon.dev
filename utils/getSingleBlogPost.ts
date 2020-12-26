import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

type getSingleBlogPost = (args: { path: string }) => Promise<BlogPost>

const getSingleBlogPost: getSingleBlogPost = async ({ path }) => {
  const postsDirectory = join(process.cwd(), 'posts')
  const fileContents = fs.readFileSync(join(postsDirectory, path), 'utf8')
  const post = matter(fileContents)

  const blogPost: BlogPost = {
    content: post.content,
    data: {
      title: post.data.title,
      slug: post.data.slug,
    },
  }

  return blogPost
}

export default getSingleBlogPost
