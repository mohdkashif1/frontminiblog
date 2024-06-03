import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { server } from '../components/server'


const SignUp = ({history}) => {
const [loading,setLoading]=useState(false)
const [message,setMessage]=useState('')

const dispatch=useDispatch()
const [userDetails,setUserDetails]=useState({
    name:'',
  
    email:'',
    password:'',
    confirmPassword:''
})
const submitHandler=async(e)=>{
    e.preventDefault()
    setLoading(true)
    setMessage('Please wait!')
    fetch(`${server}/user/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userDetails)
    })
        .then(response => {
            return response.json();
        })
        .then((res)=>{
            setLoading(false)
            if(res.error){
                
                setMessage(res.error)
                return
            }
            setMessage(res.message)
            setTimeout(() => {
                history.push('/signin')
            }, 2000);

        })
        .catch(err => {
            console.log(err);
        });

}

    return (
            <div className='container sign'>
            <div className='form-container'>
           
            {message && <h5 className='text-danger'>{message}</h5>}
            <h2>Create Account</h2>
           
            <form className='row' onSubmit={submitHandler}>
            <input className='form-control my-1' type='text' placeholder='Name' onChange={(e)=>setUserDetails({...userDetails,name:e.target.value})}></input>
            <input className='form-control my-1' type='email' placeholder='Email' onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}></input>
            <input className='form-control my-1' type='password' placeholder='Password' onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}></input>
            <input className='form-control my-1' type='password' placeholder='Confirm Password' onChange={(e)=>setUserDetails({...userDetails,confirmPassword:e.target.value})}></input>
            <button className='btn btn-primary my-1' type='submit' >Sign Up</button>
            </form>
            <div className='row py-3'>
    <p className='col'>Already have an Account?{' '}
    <a href='/signin'>
  Login
    </a>
    </p>
</div>
           
            </div>
              </div>
    )
}

export default SignUp
