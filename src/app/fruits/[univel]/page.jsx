import React from 'react'
import { fruits } from '../page'
import Image from 'next/image'
import Link from 'next/link'

export default function page({params}) {
    const fruitCard = fruits.find(fruit => fruit.name.split(' ').join('-') == params.univel)
    // const relatedFruits = fruits.filter(fruit => (fruit.type == fruitCard.type) && (fruit.name !== fruitCard.name)).slice(0,3)
    const relatedFruits = fruits.filter(fruit => (fruit.type == fruitCard.type) && (fruit.name !== fruitCard.name)).sort((a,b) => b.price - a.price).slice(0,3)

    const relatedCategory = relatedFruits.map((fruit,index) => (
      <section key={index} className=' mx-auto my-auto border-r-8 border rounded-md px-4 py-7 w-60 h-60 mt-5 hover:shadow-lg bg-white '>
        <Link href={`/fruits/${fruit.name.split(' ').join('-')}`}>

          <Image className='flex justify-center' src={`/${fruit.name}.jpg`} alt={fruit.name} width={120} height={120} />

          <p className='flex justify-center border-solid w-[100px] rounded-md mt-5 px-1 font-light bg-stone-400 hover:bg-orange-200 ml-16 '>{fruit.store}</p>

          <h2 className='font-bold capitalize flex justify-around pt-2 mt-5 bg-slate-400 '>{fruit.name}</h2>

          <p className='text-slate-500 text-sm mt-1 line line-through flex justify-center mb-2'>${fruit.oldPrice}</p>

          <p className='font-serif font-semibold flex justify-center mb-2'>${fruit.price}</p>
        </Link>
      </section>
    ))
  

  return (
    <div>       
        <h2 className='text-center border-b-2 border-stone-900 font-text-3xl'>
            <span className='font-bold font-text-'>Name</span> {fruitCard.name}
        {/* <div>
      <Image src='/pears.jpg' alt="pears" width={200} height={200}/>
        </div> */}
        </h2>
        <h2 className='flex justify-center mt-10'>
        <span className='font-bold font-text-3xl '>picture:</span>{fruitCard.pic}
        </h2>
        <h2>
        <span className='font-bold font-text-3xl mr-2 mb-5 p-r-8'>Price:</span>${fruitCard.price}
        </h2>

        <h2>
        <span className='font-bold font-text-3xl mr-2 mb-5'>type:</span>{fruitCard.type}
        </h2 >

        <h2>
        <span className='font-bold font-text-3xl mr-2 mt-5'>Des:</span>{fruitCard.description}
        </h2>
        
        <div className='grid grid-cols-3'>
                {relatedCategory}
        </div>
    </div>
    
  )
}
