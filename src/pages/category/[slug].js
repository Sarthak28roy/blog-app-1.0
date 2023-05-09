import React from 'react'
import { getCategoryPost, getCategories } from '@/services'
import PostCard from '@/components/PostCard'
import Navbar from '@/components/Navbar'
import PostWidget from '@/components/PostWidget'
import Category from '@/components/Category'
const CatContent = ({posts}) => {
  return (
    <main className='bg-[#202125] w-full text-[#d3d3d3] min-h-screen'>
      <Navbar/>
      <div className='w-full flex justify-center items-center'>
        <div className='w-full lg:w-5/6 flex items-center'>
          <div className=' w-full lg:w-2/3 grid-cols-1 lg:grid-cols-2'>
            {
              posts.map((post, index)=>(
                <PostCard post={post.node} key={index}/>
              ))
            }
          </div>
          <div>
            <PostWidget/>
            <Category/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CatContent

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
