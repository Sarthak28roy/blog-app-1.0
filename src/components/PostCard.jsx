import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const PostCard = ({post}) => {
    
  return (
    <Link href={`/post/${post.slug}`}>
      <main className='group w-[97%] shadow-lg md:w-96 mx-1 h-80 my-4 flex flex-col bg-[#17191f] hover:bg-gray-800/75  p-3 rounded-lg group items-center
       border-b-2 border-dotted border-white'>
        <div className=' h-48 rounded-t-lg overflow-hidden'>
          <Image width={400} height={400} className='group-hover:scale-110 duration-200 w-80 overflow-hidden' src={post.featuredImage.url} alt="" />
        </div>
        <div className='px-3'><h1 className='group-hover:underline font-title text-2xl px-2'>{post.tittle}</h1></div>
      </main>
    </Link>
  )
}

export default PostCard
//flex flex-col lg:flex-row items-center justify-between rounded-lg w-5/6 group cursor-pointer my-2
//p-3 gap-6 hover:bg-gray-700 transition duration-100