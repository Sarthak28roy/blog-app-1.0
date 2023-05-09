import Link from 'next/link'
import React from 'react'

const FeaturedPost = ({post}) => {
  return (
    <Link href={`/post/${post.slug}`}>
        <main className='group bg-[#17191f] w-[97%] flex flex-col md:flex-row gap-4 items-center log: border-b-2 border-dotted
        md:border-2 rounded-lg py-5 border-white md:border-solid px-6 p-4 hover:bg-gray-800/75 duration-150'>
            <div className='h-40 w-72 overflow-hidden rounded-md'>
                <img className='w-72 group-hover:scale-110 duration-200' src={post.featuredImage.url} alt="" />
            </div>
            <div>
              <h1 className=' group-hover:underline text-3xl font-title mt-2'>{post.tittle}</h1>
              <p className='text-md opacity-80 hidden lg:block'>{post.excerpt}</p>
            </div>
        </main>
    </Link>
  )
}

export default FeaturedPost