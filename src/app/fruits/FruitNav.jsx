import Link from 'next/link'
import React from 'react'

export default function FruitNav({title}) {
  return (
    <Link href={`/fruits/category/${title.toLowerCase().split(' ').join('-')}`}>
    <ul>
        {title}
    </ul>
    </Link>
  
  )
}
