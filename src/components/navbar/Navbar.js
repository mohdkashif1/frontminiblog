import React, { useState } from 'react'
import SubCategories from '../modals/SubCategoriesModal'
import { server } from '../server'
import './navbar.css'

const Navbar = () => {
    const [categories,setCategories]=useState([])
    const [error,setError]=useState()
    const [modal,setModal]=useState(false)
    const [sub,setSub]=useState()
  
    const getCategories=async()=>{
        const response = await fetch(`${server}/get-categories`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // 'Authorization': `Bearer ${token}`
      
          },
            
            
         }).then((res) => res.json());
     if(response.error) return setError(response.error)
       setError(response.message)
      setCategories(response)
    
    }

    
const SubcategoriesModal=(c)=>{
    setSub(c)
    setModal(true)
  
  
  
  }
useState(()=>{
    getCategories()
},[])


    return (
        <header role="banner">
         {modal&&<SubCategories setModal={setModal} modal={modal} sub={sub} />}
        <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container-fluid">
        <a class="navbar-brand " href="/">Quality Knowledge</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarsExample05" >
        <ul class="navbar-nav pl-md-5 ml-auto">
        {categories&&categories.map((c)=>{
        return<li key={c._id} class="nav-item"> 
          <a class="nav-link active" onMouseOver={(e)=>SubcategoriesModal(c.subCategories)}  aria-current="page" href={`/images?category=${c._id}`}>{c.title}</a>
        </li>
      })}
        {/* <li class="nav-item dropdown">
        <a  class="nav-link dropdown-toggle" href="classes.html" id="dropdown04" data-toggle="dropdown"  aria-expanded="false">Classes</a>
        <div class="dropdown-menu" aria-labelledby="dropdown04">
        <a class="dropdown-item" href="classes.html">Health Mind Meditation</a>
        <a class="dropdown-item" href="classes.html">Mind Balance Yoga</a>
        <a class="dropdown-item" href="classes.html">Body Strength Pilates</a>
        </div>
        </li> */}
        
        </ul>
        <div class="navbar-nav ml-auto">
        <form method="post" class="search-form">
        <i class="fa fa-search icon"></i>
        <input type="text" class="form-control" placeholder="Search..."/>
        </form>
        </div>
        </div>
        </div>
        </nav>
        </header>
    )
}

export default Navbar
