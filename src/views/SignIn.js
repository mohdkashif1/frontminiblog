import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/userAction'

const Login = ({history}) => {
const userLogin=useSelector(state=>state.userLogin)
const {error,loading,userInfo}=userLogin

const navigate=useNavigate()
    const [userDetails,setUserDetails]=useState({
       
        email:'',
        password:'',
       
    })
     const dispatch = useDispatch()
    const submitHandler=async(e)=>{
        e.preventDefault()
        dispatch(login(userDetails))
    }
    useEffect(()=>{
if(userInfo){
    
}
    },[userInfo])  
    
    return (
        <div className='container sign'>
        
            <div className='form-container'>
           
            {error && <h5 className='text-danger'>{error}</h5>}
            <h2>Login</h2>
         
            <form className='row' onSubmit={submitHandler}>
            <input className='form-control my-1' type='email' placeholder='Email' onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}></input>
            <input className='form-control my-1' type='password' placeholder='Password' onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}></input>
            <button  className='btn btn-primary my-1' type='submit' >Sign In</button>
            </form>
            <div className='row '>
    <p className='col'>Or Create An Account?{' '}
    <a href='/signup'>
  Sign Up
    </a>
    </p>
</div>

           
            </div>
              </div>
    )
}

export default Login
