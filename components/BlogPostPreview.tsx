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
      <a
        className={clsx(
          'block p-4 border-b-2 cursor-pointer',
          'border-gray-200 hover:border-emerald-300 dark:border-gray-800 dark:hover:border-emerald-400 text-emerald-500 hover:text-emerald-400'
        )}
      >
        <h3 className="text-lg font-semibold">{post.data.title}</h3>
        <h4 className="text-gray-600 dark:text-gray-400 mb-2">
          {format(new Date(post.data.date), 'PPP')}
        </h4>
        <p className="text-gray-900 dark:text-gray-50">
          {post.data.description}
        </p>
      </a>
    </Link>
  )
}

export default BlogPostPreview
