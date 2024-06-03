import React, { useEffect, useState } from 'react'
import Post from '../../components/post/Post'
import {server} from '../../components/server'
const TopPosts = () => {
    const [data,setdata]=useState()
    const [message,setMessage]=useState()

    const getCategories=async()=>{
        const response = await fetch(`${server}/get-all-posts`, {
          method: "GET",
          headers: {
        
            "Content-Type": "application/json",
           
        },
          
       }).then((res) => res.json());
       if(response.error){
         return setMessage(response.error)
       }
       setdata(response)
    
      }
      useEffect(()=>{
          getCategories()
      },[])



    return (
        <div className='top-post-wrapper'>

            <h1 className='popular-posts-heading text-center'>Popular Posts</h1>
            <p className='popular-posts-para'>What most of the people are reading!</p>
            <div className='row'>
            {data?.map((d)=>{
            return <Post
             id={d._id}   
             title={d.title}
             description={d.subTitle}  
             image={d.image}  
             />
            })}
            </div>
        </div>
    )
}

export default TopPosts
