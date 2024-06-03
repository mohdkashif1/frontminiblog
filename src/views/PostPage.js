import React, { useState } from 'react'
import Comments from '../components/modals/Comments'
import PostContent from './postPage/PostContent'
import RelatedPost from './postPage/RelatedPost'
import TopPosts from './homepage/TopPosts'

const PostPage = () => {
  
  
    
    return (
        <div className='post-page'>
        <div className='post-page-wrapper wrapper'>
       
        <div className='row'>
            <div className='col-12'>
            
            <PostContent/>
           
        </div>
        </div>
        
        
       
        </div>
        <div className='related-post'>
        <div className='related-margin'>
            <TopPosts/>
           
        </div>
        </div>
        </div>
    )
}

export default PostPage
