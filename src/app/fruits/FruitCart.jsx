import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function FruitCart({fruits}) {

    const fruitDisplay = fruits.map((fruit,index) => (
        <section key={index} className=' mx-auto my-auto border-r-8 border rounded-md w-60 h-50 mt-5 hover:shadow-md bg-white '>
          <Link href={`/fruits/${fruit.name.split(' ').join('-')}`}>

            <Image className='w-50 h-40 hover:opacity-[0.9] flex justify-center ml-10 mt-5 ' src={`/${fruit.name}.jpg`} alt={fruit.name} width={120} height={120} />

            <p className='flex justify-center border-solid w-[100px] rounded-md mt-5 px-1 font-light bg-stone-400 hover:bg-orange-200 ml-16 '>{fruit.store}</p>

            <h2 className='font-bold capitalize flex justify-around pt-2 mt-5'>{fruit.name}</h2>

            <p className='text-slate-500 text-sm mt-1 line line-through flex justify-center mb-2'>${fruit.oldPrice}</p>

            <p className='font-serif font-semibold flex justify-center mb-2'>${fruit.price}</p>
          </Link>
        </section>

    ))

  return (
    <div className='grid grid-cols-4'>
      {fruitDisplay}
    </div>
  )
}
