import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { format } from 'date-fns'

type BlogPostPreviewProps = {
  route: string
  post: BlogPost
}

const BlogPostPreview = ({ route, post }: BlogPostPreviewProps) => {
  return (
    <Link href={route}>
      <div
        className={clsx(
          'p-4 border-2 cursor-pointer rounded',
          'border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700'
        )}
      >
        <h3 className="text-lg font-semibold">{post.data.title}</h3>
        <h4 className="text-gray-600 dark:text-gray-400 mb-2">
          {format(new Date(post.data.date), 'PPP')}
        </h4>
        <p>{post.data.description}</p>
      </div>
    </Link>
  )
}

export default BlogPostPreview
