import { useState, useRef, useEffect, MutableRefObject } from 'react'

type useHover = () => [MutableRefObject<any>, boolean]

const useHover: useHover = () => {
  const [value, setValue] = useState(false)

  const ref = useRef<any>(null)

  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  useEffect(
    () => {
      const node = ref.current
      if (node) {
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)

        return () => {
          node.removeEventListener('mouseover', handleMouseOver)
          node.removeEventListener('mouseout', handleMouseOut)
        }
      }
    },
    [ref.current] // Recall only if ref changes
  )

  return [ref, value]
}

export default useHover
