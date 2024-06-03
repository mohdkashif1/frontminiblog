import React, { useEffect, useState } from 'react';
import { server } from '../server';

const AddSubCategory = ({setModal,cat,getSubCategories}) => {
    const [title,setTitle]=useState()
    const [category,setCategory]=useState()

    const [error,setError]=useState()

    const [message,setMessage]=useState()
    const [data,setData]=useState()


      const submitHandler=async(e)=>{
        e.preventDefault()
        const formData=new FormData()
   
        formData.append('title',title)
        formData.append('category',category)
 
        
        if(cat){
          formData.append('id',cat._id)
        }
      

 const token=localStorage.getItem('adminToken')
        const response = await fetch(`${server}/admin/create-subcategory`, {
          method: "POST",
          headers: {
          
            'Authorization': `Bearer ${token}`
    
        },
          body:formData
          
       }).then((res) => res.json());
   if(response.error) return setError('something went wrong!')
     setError(response.message)

     setTimeout(() => {
         setError('')
         setModal(false)
         getSubCategories()
     }, 1000);
   
   
       
  }



  const getCategories=async()=>{
    const token=localStorage.getItem('adminToken')
    const response = await fetch(`${server}/get-categories`, {
      method: "GET",
      headers: {
    
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${token}`
    },
      
   }).then((res) => res.json());
   if(response.error){
     return setMessage(response.error)
   }
   setData(response)

  }
  useEffect(()=>{
    getCategories()
if(cat){
  setTitle(cat.title)
  setCategory(cat.category)
}
  },[])

  return <div className="modal fade show" open tabIndex="-1" role="dialog" style={{paddingRight: "17px", display: "block"}}>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">AddSubCategory</h5>
        <p className='text-center'>{error}</p>
        <button type="button" onClick={()=>setModal(false)} className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
   
      
      <input className='form-control mt-2' value={title} type='text' placeholder='Title' onChange={(e)=>setTitle(e.target.value)}></input>

      <select className='form-control mt-2' value={category} onChange={(e)=>setCategory(e.target.value)} >
      <option  value=''>select category</option>
          {data&&data.map((d)=>{
              return <option value={d._id}>{d.title}</option>
          })}
      </select>
      </div>
      <div className="modal-footer">
        <button type="button" onClick={submitHandler} className="btn btn-primary">Save changes</button>
       
      </div>
    </div>
  </div>
</div>;
};

export default AddSubCategory;
