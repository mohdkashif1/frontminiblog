import React, { useEffect, useState } from 'react';
import {server} from '../../../components/server'

const AllPosts = () => {
  const [post,setPost]=useState()
  const token=localStorage.getItem('adminToken')

  const [message,setMessage]=useState('')
  
  const getPosts=async()=>{
    const token=localStorage.getItem('adminToken')
    const response = await fetch(`${server}/admin/get-posts`, {
      method: "GET",
      headers: {
    
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
    },
      
   }).then((res) => res.json());
   if(response.error){
     return setMessage(response.error)
   }
   setPost(response)

  }

const deletePost=async(id)=>{
  const response = await fetch(`${server}/admin/delete-post`, {
    method: "POST",
    headers: {
  
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
  },
  body:JSON.stringify({
    id:id
  })
    
 }).then((res) => res.json());
 if(response.error){
   return setMessage(response.error)
 }
 setMessage(response.message)
 getPosts()
}





  useEffect(()=>{
    getPosts()
  },[])

console.log(post)

  return <div className='container' style={{marginTop:'5rem'}}>

<h3 className='text-center text-success'>{message}</h3>
<table className="table mb-0">
            <thead className="bg-light">
              <tr>
                <th scope="col" className="border-0">
                  #
                </th>
                <th scope="col" className="border-0">
                  title
                </th>
               
                
               
                {/* <th scope="col" className="border-0">
                  Active/Inactive
                </th> */}
                <th scope="col" className="border-0 text-center">
                  Edit/View
                </th>
                <th scope="col" className="border-0 text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
            {post&&post?.map((c,idx)=>{
              return<tr key={idx}>
              <td>{idx+1}</td>
                <td>{c.title}</td>
                
               
                               
<td className="text-center">

<a href={`/edit-post/${c._id}`}>
<i className="fa fa-edit"></i>
</a>
</td>


<td className="text-center">

<i className="fa fa-trash" onClick={()=>{
 deletePost(c._id)
}}></i>
</td>
              </tr>
            })} 
               
                            </tbody>
          </table>
  </div>;
};

export default AllPosts;
