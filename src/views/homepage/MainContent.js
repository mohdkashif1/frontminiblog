import React, { useEffect, useState } from 'react'
import { server } from '../../components/server'
import './home.css'

const MainContent = () => {

    const [data,setdata]=useState()
    const [message,setMessage]=useState()

    const getLetestPosts=async()=>{
        const response = await fetch(`${server}/get-letest-posts`, {
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
          getLetestPosts()
      },[])

      const getDate=(d)=>{
       const date= new Date(d)
      const newDate=  date.getDate() +  " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear()
      return newDate
      }

    return (
        <div className='main-content-wrapper'>
       {data&&data.map((d)=>{
         return <div className=''>
         <div className='row main-content'>
         <div className='col-md-6'>
            <h4 className='date'>{ getDate(d.createdAt)}</h4>
            <h1 className='title'>{d.title}</h1>
            <h3 className='desc'>{d.subTitle}</h3>
            <h4><a href={`/${d._id}`}> Read...</a></h4>
            
         </div>
         <div className='col-md-6'>
            <img className='main-content-img' alt='' src={d.image}></img>
         </div>
     </div>
     </div>
       })} 
       </div>
    )
}

export default MainContent
