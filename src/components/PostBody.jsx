import React from 'react'
import moment from 'moment/moment'
import { FaRegCalendarAlt } from 'react-icons/fa';
import PostWidget from './PostWidget';
import Content from './Content';
import Navbar from './Navbar';
import Link from 'next/link';
import Category from './Category';
const PostBody = ({post}) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }
    
        switch (type) {
          case 'heading-three':
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
      };
  return (
    <main className='bg-[#343434] text-[#d3d3d3]'>
      <Navbar/>
        <div className='w-full flex justify-center mt-3 mx-1 lg:mx-0'>
          <div className='w-full md:w-4/5'>
            <h1 className=' m-2 text-3xl md:text-4xl lg:text-5xl'>{post.tittle}</h1>
            <div className='m-1 flex gap-5 my-5'>
                <p className='opacity-80 flex items-center'>By
                <span className='overflow-hidden rounded-full mx-2'>
                  <img className='w-7 h-7' src={post.author.photo.url} alt="" />
                </span>
                  <span className=' font-name opacity-80'> {post.author.name}</span>
                </p>
                <div className='flex gap-2 items-center '>
                    <FaRegCalendarAlt className=' opacity-80w-4 h-4 text-xs'/>
                    <p className='text-sm'>
                      <span className=''>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                    </p>
                </div>
            </div>
            <img className='w-full mid:w-2/3 overflow-hidden' src={post.featuredImage.url} alt="" />
            
            <div className='p-2 md:p-0 flex justify-between mt-12'>
                <div className='w-full md:w-3/5 '>
                    <p className=' font-body'>
                        {post.content.raw.children.map((typeObj, index) => {
                            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                            return getContentFragment(index, children, typeObj, typeObj.type);
                        })}
                    </p>
                </div>
                <div className='sticky top-0 flex flex-col gap-5'>
                    <PostWidget/>
                </div>
          </div>
          <div>{
            post.categories.map(p=>(
              <Link href={`/category/${p.slug}`}>
                <p>#{p.nAme}</p>
              </Link>
            ))
          }</div>
          </div>
      </div>
    </main>
  )
}

export default PostBody