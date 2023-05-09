import { getCategories } from '@/services';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Content = () => {

    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        getCategories().then((newContent)=>{
            setCategories(newContent);
        });
    }, []);
  return (
    <main className='border-2 border-white max-w-sm p-3 rounded-xl'>
        <div>
            <h2 className=' font-category text-2xl'>Categories</h2>
            <div className='flex flex-wrap gap-4'>
            {
                categories.map((item)=>(
                      <Link href={`/category/${item.slung}`}>
                        <span className='bg-gray-900 text-white'>{item.nAme}</span>
                      </Link>
                ))
            }
        </div>
        </div>
    </main>
  )
}

export default Content