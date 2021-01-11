import React from 'react'
import clsx from 'clsx'
import _ from 'lodash'

const UserAvatar = ({ name, username }) => {
  // separate the name out into words
  const words = _.words(name)

  return (
    <span
      className={clsx(
        'rounded-full w-14 h-14 inline-flex items-start justify-center text-3xl font-semibold select-none',
        colorVariants[getColorValue(username)]
      )}
      style={{ paddingTop: '0.5rem' }}
    >
      {words[0][0].toUpperCase()}
      {words[1]?.[0].toUpperCase()}
    </span>
  )
}

export default UserAvatar

const colorVariants = [
  'bg-red-500 text-red-100',
  'bg-blue-500 text-blue-100',
  'bg-purple-500 text-purple-100',
  'bg-green-500 text-green-100',
]

const getColorValue = (value) => {
  const hashValue = value
    // split the string into an array chars ("ML" => ["M", "L"])
    .split('')
    // convert each char into it's charCode value ("B" => 66)
    .map((char) => +char.charCodeAt(0))
    // add up all the values
    .reduce((accumulator, currentValue) => (accumulator += currentValue))

  // modulus the hashValue by colorVariants.length to get a random
  // value between 0 and colorVariants.length - 1
  return hashValue % colorVariants.length
}
