import React, { useEffect, useState } from 'react';

import { server } from '../server';

const AddCategory = ({setModal,cat,getCategories}) => {
    const [title,setTitle]=useState()
    const [file,setFile]=useState()
    const [error,setError]=useState()

    const readURL=(e) =>{
        e.preventDefault()
        setFile(e.target.files[0])

      }

      const submitHandler=async(e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append('file',file)
        formData.append('title',title)
 
        
        if(cat){
          formData.append('id',cat._id)
        }
      

 const token=localStorage.getItem('adminToken')
        const response = await fetch(`${server}/admin/create-category`, {
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
      getCategories()
  }, 1000);
   
       
  }
  useEffect(()=>{
if(cat){
  setTitle(cat.title)
}
  },[])

  return <div className="modal fade show" open tabIndex="-1" role="dialog" style={{paddingRight: "17px", display: "block"}}>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">AddCategory</h5>
        <p className='text-center'>{error}</p>
        <button type="button" onClick={()=>setModal(false)} className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <input type="file" className='form-control' onChange={readURL} />
      
      <input className='form-control mt-2' value={title} type='text' placeholder='Title' onChange={(e)=>setTitle(e.target.value)}></input>

      </div>
      <div className="modal-footer">
        <button type="button" onClick={submitHandler} className="btn btn-primary">Save changes</button>
       
      </div>
    </div>
  </div>
</div>;
};

export default AddCategory;
