import Image from 'next/image'
import { Content, Inter } from 'next/font/google'
import { getPost, getRecentPosts } from '@/services'
import PostCard from '@/components/PostCard'
import Navbar from '@/components/Navbar'
import PostWidget from '@/components/PostWidget'
import FeaturedPost from '@/components/FeaturedPost'
import Footer from '@/components/Footer'
import Category from '@/components/Category'

export default function Home({posts}) {

  return (
    <main className='bg-[#d3d3d3] dark:bg-[#202125] w-full text-[#202125] dark:text-[#d3d3d3] min-h-screen'>
      <Navbar/>
      <div className='w-full flex justify-center mt-5'>
        <div className='w-full lg:w-5/6 lg:flex '>
         <div className='w-full lg:w-2/3'>
            <div className=' w-full flex items-center'>
              <div>
                {
                  posts.filter(post=> post.node.featuredPost===true).map((post, index)=>(
                    <FeaturedPost key={index} post={post.node}/>
                  ))
                }
              </div>
            </div>
            <div className=' flex flex-col items-center md:grid md:grid-cols-2'>
              {
                posts.filter(post=> post.node.featuredPost===false).map((array, index) => (
                  <PostCard key={index} post = {array.node}/>
                ))
              }
            </div>
          </div>
          <div className=' sticky top-0 w-full lg:w-1/3 flex flex-col gap-5'>
            <Category/>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export async function getStaticProps() {
  const posts = (await getPost()) || [];
  return {
    props: {posts}
  }
}
