import React, { useState } from 'react'
import Replies from './comments/Replies'
import WriteComment from './comments/WriteComment'

const CommentsList = ({commentList,setWriter,setContent,submitHandler,content,writer}) => {

  return (
    <div>
    {commentList.length!==0?  <span>{commentList.length} Comments</span>:<span>Your Comment here .....</span>}
   
    {commentList.map((c)=>{
        
        return <div className='py-2'>
        <i className='fa fa-user'> {c.writerName}</i>
        <p>{c.content}</p>
        <WriteComment setWriter={setWriter}
             setContent={setContent} submitHandler={submitHandler} attachedName={c.writerName}  writer={writer} content={content} responseTo={c._id} />

             {c.replies.length!==0 &&<Replies  commentList={c.replies} setWriter={setWriter}
             setContent={setContent} submitHandler={submitHandler}  content={content} writer={writer} responseTo={c._id}/>
             }
        </div>
    })}
    </div>
  )
}

export default CommentsList