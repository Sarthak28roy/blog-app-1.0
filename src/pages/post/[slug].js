import { getPostDetails, getPost } from '@/services'
import React from 'react'
import PostBody from '@/components/PostBody'
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

const PostDetails = ({post}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader/>;
  }
  return (
    <main className=''>
        <div className='w-full flex items-center justify-center'>
            <PostBody post={post}/>
        </div>
        <div>

        </div>
    </main>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
      props: {
        post: data,
      },
    };
  }

  export async function getStaticPaths() {
    const posts = await getPost();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
  }
  