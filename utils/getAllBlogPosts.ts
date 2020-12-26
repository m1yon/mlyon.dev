import { join } from 'path'
import fs from 'fs'
import getSingleBlogPost from './getSingleBlogPost'

type getAllBlogPosts = () => Promise<BlogPost[]>

const getAllBlogPosts = async () => {
  const postsDirectory = join(process.cwd(), 'posts')
  const postPaths = fs.readdirSync(postsDirectory)

  const posts = await Promise.all(
    postPaths.map((path) => {
      return getSingleBlogPost({ path })
    })
  )

  return posts
}

export default getAllBlogPosts
