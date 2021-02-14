import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { format } from 'date-fns'
import { Icon } from 'elements'
import { useHover } from 'hooks'

type BlogPostPreviewProps = {
  route: string
  post: BlogPost
}

const BlogPostPreview = ({ route, post }: BlogPostPreviewProps) => {
  const [hoverRef, isHovered] = useHover()

  return (
    <div ref={hoverRef}>
      <Link href={route}>
        <a
          className={clsx(
            'block p-4 cursor-pointer',
            'mb-2 hover:text-cyan-600 dark:hover:text-emerald-400'
          )}
        >
          <h3 className="text-2xl font-bold">{post.data.title}</h3>
          <h4 className="text-gray-600 dark:text-gray-400 mb-4">
            {format(new Date(post.data.date), 'PPP')}
          </h4>
          <p className="text-gray-900 dark:text-gray-50 mb-4">
            {post.data.description}
          </p>
          <p className="text-gray-900 dark:text-gray-50 font-bold inline-flex items-center">
            Read more&nbsp;&nbsp;
            {isHovered ? (
              <Icon
                type="arrow-right"
                className="w-4 h-4 text-cyan-600 dark:text-emerald-400 inline mt-0.5"
              />
            ) : null}
          </p>
        </a>
      </Link>
    </div>
  )
}

export default BlogPostPreview
