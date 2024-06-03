import React, { useEffect, useState } from 'react'
import { server } from '../../../components/server'

import { useNavigate } from 'react-router-dom'

const SignIn = () => {
const token=localStorage.getItem('adminToken')
    const [error,setError]=useState()

const navigate=useNavigate()
    const [userDetails,setUserDetails]=useState({
       
        email:'',
        password:'',
       
    })
    
    const submitHandler=async(e)=>{
        e.preventDefault()

        const response = await fetch(`${server}/admin/login`, {
            method: "POST",
            headers: {
            'Content-Type':'application/json',
        
          },
            body:JSON.stringify({
                userDetails
            })
            
         }).then((res) => res.json());
     if(response.error) return setError('something went wrong!')

      localStorage.setItem('adminToken',response.token)
       setError('signing you in!')

    setTimeout(() => {
        navigate('/create-post')
    }, 2000);
       
    }

    useEffect(()=>{
        if(token) return navigate('/create-post')
    },[token,navigate])
     
    
    return (
        <div className='container-sign'>
        
            <div className='form-container'>
     
            {error && <h5 className='text-danger'>{error}</h5>}
            <h2 className='py-2'>Login</h2>
         
            <form className='row ' onSubmit={submitHandler}>
            <input className='mt-2' type='email' placeholder='Email' onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}></input>
            <input className='mt-2' type='password' placeholder='Password' onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}></input>
            <button  className='btn btn-outline-primary mt-2' type='submit' >Sign In</button>
            </form>
        
           
            </div>
              </div>
    )
}

export default SignIn
