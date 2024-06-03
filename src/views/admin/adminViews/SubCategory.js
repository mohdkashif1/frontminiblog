import React, { useEffect, useState } from 'react';
import AddCategory from '../../../components/modals/AddCategory';
import AddSubCategory from '../../../components/modals/AddSubCategory';
import {server} from '../../../components/server'

const SubCategories = () => {
  const [category,setCategory]=useState()
  const token=localStorage.getItem('adminToken')

  const [message,setMessage]=useState('')
  const [modal,setModal]=useState(false)
  const [cat,setCat]=useState()
  
  const getCategories=async()=>{
    const token=localStorage.getItem('adminToken')
    const response = await fetch(`${server}/get-sub-categories`, {
      method: "GET",
      headers: {
    
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${token}`
    },
      
   }).then((res) => res.json());
   if(response.error){
     return setMessage(response.error)
   }
   setCategory(response)

  }

const deleteCategory=async(id)=>{
  const response = await fetch(`${server}/admin/delete-subcategory`, {
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
 getCategories()
}

const editHandler=async(c)=>{
 
  setCat(c)
  setModal(true)
}

const addCategoryhandler=()=>{
  setModal(true)
  setCat()
}



  useEffect(()=>{
    getCategories()
  },[])



  return <div className='container' style={{marginTop:'5rem'}}>
{modal&&<AddSubCategory setModal={setModal} cat={cat} getSubCategories={getCategories}/>}

<div className='py-3'>
    <button className='btn btn-primary bg-dark' type='button' onClick={()=>addCategoryhandler()}>Add-SubCategory</button>
</div>
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
            {category&&category.map((c,idx)=>{
              return<tr key={idx}>
              <td>{idx+1}</td>
                <td>{c.title}</td>
                
                               
<td className="text-center">


<i onClick={()=>{
  editHandler(c)
}} className="fa fa-edit"></i>

</td>


<td className="text-center">

<i className="fa fa-trash" onClick={()=>{
 deleteCategory(c._id)
}}></i>
</td>
              </tr>
            })} 
               
                            </tbody>
          </table>
  </div>;
};

export default SubCategories;
