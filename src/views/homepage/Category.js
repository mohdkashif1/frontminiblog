import React, { useEffect, useState } from 'react';
import Carasoul from '../../components/carasoul/Carasoul';
import {server} from '../../components/server'

const Category = () => {
    const [data,setdata]=useState()
    const [message,setMessage]=useState()

    const getCategories=async()=>{
        const response = await fetch(`${server}/get-categories`, {
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

  return <div className='categories py-5'>
      <h1 className=' text-center'>Explore Categories</h1>
      <p className='popular-posts-para'>Explore more from categories!</p>
      <div className='carousel'>
      <Carasoul data={data}/>
      </div>
  </div>;
};

export default Category;
