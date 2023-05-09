import React, { useEffect, useState } from 'react'
import { getCategories } from '@/services'
import Link from 'next/link';
const Category = () => {
    const [cat, setCat] = useState([])
    useEffect(()=>{
        getCategories().then((newCategories)=>{
            setCat(newCategories);
        });
    }, []);
  return (
    <main className='border-2 sticky top-0 hidden md:block p-3 border-white rounded-lg'>
        <h2 className='text-2xl font-category'>Categories</h2>
        <div className='mt-3 grid grid-cols-5 gap-2  h-36 max-h-72'>
            {
                cat.map((p, index) => (
                    <Link href={`/category/${p.slug}`} key={index}>
                      <span className='hover:bg-white/30 backdrop-blur-md rounded-sm text-semibold  
    p-1 px-2 opacity-75 hover:opacity-100 duration-150'>{p.nAme}</span>
                    </Link>
                  ))
            }
        </div>
    </main>
  )
}

export default Category