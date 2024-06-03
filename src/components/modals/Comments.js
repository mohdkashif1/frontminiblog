import React, { useEffect, useState } from 'react'
import WriteComment from '../comments/WriteComment'
import CommentsList from '../CommentsList'
import { server } from '../server'
import './modal.css'


const Comments = ({setShow,show ,post}) => {
    const [content,setContent]=useState()
    const [commentList,setCommentList]=useState([])
    const [writer,setWriter]=useState({
        name:'',
        email:''
    })
   
    const [error,setError]=useState()

  

    let cls='right-modal py-4 px-4'
    if(show){
        cls='right-modal open py-4 px-4'
    }

    const close=(e)=>{
e.preventDefault()

setShow(false)
    }

const getComments=async()=>{
    const response = await fetch(`${server}/get-comments`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                // 'Authorization': `Bearer ${token}`
        
            },
              body:JSON.stringify({
                  post:post._id,
                  
              })
              
           }).then((res) => res.json());
       if(response.error) return setError(response.error)
         setError(response.message)
         setCommentList(response)
         
        }
    



    useEffect(()=>{
        getComments()
    },[])

    const submitHandler=async({responseTo,attachedName})=>{
const response = await fetch(`${server}/comment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${token}`
    
        },
          body:JSON.stringify({
              post:post._id,
              writer,
              content,
              responseTo,
              attachedName

          })
          
       }).then((res) => res.json());
   if(response.error) return setError(response.error)
     setError(response.message)
     getComments()
    }
    return (
        <div className={cls}>
            <h1 style={{cursor:'pointer'}} onClick={close} className='text-end'>X</h1>
            <div>
                <br/>
                <h4>Comments</h4>

                <form >
                   
                   <div className='row'>
                   <div className='col-12 py-2'> 
                   <input className='form-control' type='text' placeholder='Name' 
                       onChange={(e)=>setWriter({...writer,name:e.target.value})}
                   />
                   </div>
                   <div className='col-12 py-2'>
                   <input className='form-control' type='email' placeholder="Email"
                    onChange={(e)=>setWriter({...writer,email:e.target.value})}
                    /> 
                   </div>
                   </div>
                   <textarea 
                   className='form-control '
                   style={{width:'100%',borderRadius:'5px'}}
                   onChange={(e)=>setContent(e.target.value)}
                   placeholder='Write something!'
                   ></textarea>
                   <button onClick={()=>submitHandler({responseTo:'',attachedName:''})} type='button' className='btn btn-primary my-2'>Submit</button>
               </form> </div>
               <hr/>
            
            <CommentsList commentList={commentList} setWriter={setWriter}
             setContent={setContent} submitHandler={submitHandler} writer={writer} content={content} />
        </div>
    )
}

export default Comments
