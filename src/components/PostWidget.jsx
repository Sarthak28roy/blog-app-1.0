import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getSimilarPosts, getRecentPosts } from '@/services';


const PostWidget = ({categories, slug}) => {
    const [relatedPosts, setRelatedPosts] = useState([]);
    useEffect(() => {
        // if (slug) {
        //   getSimilarPosts(categories, slug).then((result) => {
        //     setRelatedPosts(result);
        //   });
        // } else {
        getRecentPosts().then((result) => {
          setRelatedPosts(result);
        });
        //}
      }, [slug]);
  return (
    <main className='border-2 hidden lg:block border-white max-w-md p-3 rounded-xl sticky top-5'>
        <div>
            {
                (slug)? <p className=' font-category text-2xl'>Related Posts</p>: 
                <p className=' font-category text-2xl'>Latest Post</p>
            }
        </div>
        <div>
            {
                relatedPosts.map((item)=>(
                    <Link href={`/post/${item.slug}`} key={item.slug}>
                      <div className='flex items-center p-1 px-2 rounded-lg duration-75 justify-between my-2 h-20
                       hover:bg-gray-700'>
                          <div className='w-1/3 h-16 rounded-md overflow-hidden'>
                            <Image width={500} height={500} className='w-28 rounded-md ' src={item.featuredImage.url} alt="" />
                          </div>
                          <div className='w-2/3'>
                              <h2>{item.tittle}</h2>
                              <p>{item.excerpt}</p>
                          </div>
                      </div>
                    </Link>
                ))
            }
        </div>
    </main>
  )
}

export default PostWidget