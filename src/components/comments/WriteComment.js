import React, { useState } from 'react'

const WriteComment = ({setWriter,setContent,submitHandler,writer,responseTo,attachedName}) => {
 
    const [reply,setReply]=useState(false)
  return (<>
   <span style={{marginLeft:'',cursor:'pointer',fontWeight:'600',fontSize:'0.9rem', color:'gray'}} onClick={()=>setReply(!reply)}>REPLY</span>
    {reply && <div>
   
    <form style={{marginLeft:''}} >
        
                   
    <div className='row'>
    <div className='col-12 py-2'> 
    <input className='form-control' type='text' placeholder='Name' 
        onChange={(e)=>setWriter({...writer,name:e.target.value})}
    />
    </div>
    <div className='col-12 py-2'>
    <input className='form-control' type='email' placeholder="Email"
     onChange={(e)=>setWriter({...writer,email:e.target.value})}
     /> 
    </div>
    </div>
    <textarea 
    className='form-control '
    style={{width:'100%',borderRadius:'5px'}}
    onChange={(e)=>setContent(e.target.value)}
    placeholder='Write something!'
    ></textarea>
    <button onClick={()=>submitHandler({responseTo,attachedName})} type='button' className='btn btn-primary my-2'>Submit</button>
</form></div>
}
</>

  )
}

export default WriteComment