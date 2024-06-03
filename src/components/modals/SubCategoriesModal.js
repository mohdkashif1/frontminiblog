import React, { useEffect } from 'react'
import './modal.css'


const SubCategories = ({modal,setModal,sub}) => {
  
    return (
        <div className='sub-modal' onMouseLeave={()=>setModal(false)}>
        
            <div className='row ' >
            {sub&&sub.map((s)=>{
                return <div className='col-3' >
                    <a href={`/images?subCategory=${s._id}`} >{s.title}</a>
                </div>
            })}
               
            </div>
        </div>
    )
}

export default SubCategories
