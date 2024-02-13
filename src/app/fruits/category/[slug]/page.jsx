import React from 'react'
import { fruits } from '../../page'
import Link from 'next/link'
import Image from 'next/image'

export default function Category({params}) {
    const fruitCard = fruits.filter(fruit => fruit.type.toLowerCase().split(' ').join('-') == params.slug)

    const fruitGrp = fruitCard.map((fruit,index) => (
        <section key={index} className=' mx-auto border-r-8 border rounded-md px-4 py-7 w-60 h-60 mt-5 hover:shadow-lg bg-white '>
          <Link href={`/fruits/${fruit.name.split(' ').join('-')}`}>

            <Image className='flex justify-center' src={`/${fruit.name}.jpg`} alt={fruit.name} width={120} height={120} />

            <p className='flex justify-center border-solid w-[100px] rounded-md mt-5 px-1 font-light bg-stone-400 hover:bg-orange-200 ml-16 '>{fruit.store}</p>

            <h2 className='font-bold capitalize flex justify-around pt-2 mt-5'>{fruit.name}</h2>

            <p className='text-slate-500 text-sm mt-1 line line-through flex justify-center mb-2'>${fruit.oldPrice}</p>

            <p className='font-serif font-semibold flex justify-center'>${fruit.price}</p>
          </Link>
        </section>
    ))
  return (
    <div className='grid grid-cols-3 '>{fruitGrp}</div>
  )
}
