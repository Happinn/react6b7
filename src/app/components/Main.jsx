import React from 'react'
import Image from 'next/image'

const greetMe = 'Hello Everybody'
export default function Main() {
  return (
    <div className='grid grid-cols-3 mt-5'>
    <div>
        <Image src='/children.jpg' alt="children playing" width={400} height={200}/>
    </div>

    <div className='text-3xl bg-orange-600 text-black flex flex-col justify-center items-center'>
        <h2>Good morning, {greetMe}</h2>
        <h1>fundamentals of React JS</h1>
    </div>

    <div>
        <Image src='/waterway.jpg' alt="children on a tree" width={400} height={200}/>
    </div>

    </div>
  )
}
