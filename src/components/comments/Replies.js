import React, { useState } from 'react'
import WriteComment from './WriteComment'

const Replies = ({commentList,setWriter,setContent,submitHandler,content,writer,responseTo}) => {
  const [openReply,setOpenReply]=useState(false)


const viewReplies=()=>{
  return  <span onClick={()=>setOpenReply(false)} style={{color:'#065fd4',cursor:'pointer'}}><i style={{color:'#065fd4'}} className='fa fa-arrow-up'></i>{`Hide ${commentList.length} replies`}</span>
}
const hideReplies=()=>{
  return  <span onClick={()=>setOpenReply(true)} style={{color:'#065fd4',cursor:'pointer'}}><i style={{color:'#065fd4'}} className='fa fa-arrow-down'></i>{`View ${commentList.length} replies`}</span>
}

  return (
    <div style={{marginLeft:'3rem'}} >
    {openReply? viewReplies(): hideReplies()}
    {openReply&&<>
    {commentList&&commentList.map((c)=>{
        
        return <div key={c._id} className='py-2'>
        <i className='fa fa-user'>{c.writerName}</i>
        <p ><span style={{ color:'#065fd4'}}>{'@'+c.attachedName}</span> {c.content}</p>
        <WriteComment setWriter={setWriter}
             setContent={setContent} submitHandler={submitHandler} writer={writer} content={content} responseTo={responseTo} attachedName={c.writerName} />

            
        </div>
    })}
    </>}
    </div>
   
  )

}

export default Replies