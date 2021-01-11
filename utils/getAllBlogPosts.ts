import { join } from 'path'
import fs from 'fs'
import _ from 'lodash'
import getSingleBlogPost from './getSingleBlogPost'

type getAllBlogPosts = () => Promise<BlogPost[]>

const getAllBlogPosts = async () => {
  const postsDirectory = join(process.cwd(), 'posts')
  const postPaths = fs.readdirSync(postsDirectory)

  const posts = await Promise.all(
    postPaths
      // ignore any files that aren't mdx
      .filter((path) => {
        return path.includes('.mdx')
      })
      .map((path) => {
        return getSingleBlogPost({ path })
      })
  )

  // sort posts by date (desc)
  const orderedPosts = _.orderBy(posts, 'data.date', 'desc')

  return orderedPosts
}

export default getAllBlogPosts
