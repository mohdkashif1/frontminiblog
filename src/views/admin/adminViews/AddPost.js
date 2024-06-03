import React, { useEffect, useState } from 'react';

import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { server } from '../../../components/server';
import { useNavigate, useParams } from 'react-router-dom';


const AddPost = () => {
  const { id } = useParams()
  console.log(id)
  const [message,setMessage]=useState()

    const [error,setError]=useState()
   const [title,setTitle]=useState()
   const [file,setFile]=useState()
   const [subTitle,setSubTitle]=useState()
   const [content,setContent]=useState('')
   const [data,setData]=useState()
   const [category,setCategory]=useState()
   const [subCategory,setSubCategory]=useState()
   const [subCategories,setSubCategories]=useState([])
   
    const editorRef = React.createRef();
    const token=localStorage.getItem('adminToken')

    const navigate=useNavigate()
  
       
        const handleChange = () => {
        setContent(editorRef.current.getInstance().getHTML()) ;
    
        };
        

        const submitHandler=async(e)=>{
            e.preventDefault()
            const formData=new FormData()
            formData.append('file',file)
            formData.append('title',title)
            formData.append('subTitle',subTitle)
            formData.append('content',content)
            formData.append('category',category)
            formData.append('subCategory',subCategory)
            if(id){
              formData.append('id',id)
            }
          
    

            const response = await fetch(`${server}/admin/create-post`, {
              method: "POST",
              headers: {
              
                'Authorization': `Bearer ${token}`
        
            },
              body:formData
              
           }).then((res) => res.json());
       if(response.error) return setError('something went wrong!')
         setError('Your Post is up and live!')
       
        navigate('/view-posts')
           
      }
      const readURL=(e) =>{
        e.preventDefault()
        setFile(e.target.files[0])

        if (e.target.files[0] && e.target.files[0]) {
        
          var reader = new FileReader();
          reader.onload = function (e) { 
            document.querySelector("#img").setAttribute("src",e.target.result);
          };
    
          reader.readAsDataURL(e.target.files[0]); 
        }
      }

      const getPost=async()=>{
        const response = await fetch(`${server}/admin/get-post/${id}`, {
          method: "GET",
          headers: {
        
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
      
          
       }).then((res) => res.json());
       if(response.error){
         return setMessage(response.error)
       }
      setTitle(response.title)
      setSubTitle(response.subTitle)
      document.querySelector("#img").setAttribute("src",response.image);
      setContent(response.content)
    setCategory(response.category)

    getSubCategories(response.category)
    setSubCategory(response.subCategory)

      
    
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

      const getSubCategories=async(id)=>{
       
   
        const response = await fetch(`${server}/get-subcategories`, {
          method: "POST",
          headers: {
        
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${token}`
        },
          body:JSON.stringify({
            id:id
          })
       }).then((res) => res.json());
       if(response.error){
         return setMessage(response.error)
       }
       setSubCategories(response)
   

      }
      const setCategoryHandler=async(e)=>{
        e.preventDefault()
         setCategory(e.target.value)
       getSubCategories(e.target.value) 
      
      }
        useEffect(()=>{
if(!token) navigate('/signin')
getCategories()
if(id){
  getPost()
  
}

        },[token,navigate,id])
         
  return <div>
  
   <div  style={{margin:'1rem',marginTop:'5rem'}}>
  
       <div className='row'>
         <div style={{borderRight:'1px solid black'}} className='col-md-6 text-center left-container '>
         <h1 style={{wordWrap: "break-word" }}>{title}</h1>
         <h3 style={{wordWrap: "break-word" }} >{subTitle}</h3>
         <img style={{width:'100%',height:'350px',objectFit:'cover'}} className='' src="" alt="" id="img"></img>
    
         <div className='content-img' dangerouslySetInnerHTML={{ __html: content }} />

         </div>
         <div className='col-md-6 add-post'>
         <div className='form-container'>

{error && <h5 className='text-danger'>{error}</h5>}


<form style={{padding:0}} className='row g-0' onSubmit={submitHandler}>
<input type="file" className='form-control' onChange={readURL} />
<div className='row g-0'> 
<div className='col-6'><select className='form-control mt-2' value={category} onChange={setCategoryHandler} >
      <option  value=''>select category</option>
          {data&&data.map((d)=>{
              return <option value={d._id}>{d.title}</option>
          })}
      </select></div>
<div className='col-6'>
<select className='form-control mt-2' value={subCategory} onChange={(e)=>setSubCategory(e.target.value)} >
      <option  value=''>select subCategories</option>
          {subCategories&&subCategories.map((d)=>{
              return <option value={d._id}>{d.title}</option>
          })} 
      </select>
</div>
</div>


    
<input className='mt-2' value={title} type='text' placeholder='Title' onChange={(e)=>setTitle(e.target.value)}></input>
<input className='mt-2' value={subTitle} type='text' placeholder='Sub-title' onChange={(e)=>setSubTitle(e.target.value)}></input>
{!content&&<Editor
  initialValue={`${content}`}
  previewStyle="vertical"
  height="380px"

 
  initialEditType="markdown"
  useCommandShortcut={true}
  ref={editorRef}
  onChange={handleChange}
  
/>}
{content&&<Editor
  initialValue={`${content}`}
  previewStyle="vertical"
  height="380px"

 
  initialEditType="markdown"
  useCommandShortcut={true}
  ref={editorRef}
  onChange={handleChange}
  
/>}
    <button onClick={submitHandler} className='btn btn-outline-primary mt-2' type='button' >save</button>

</form>

         </div>
       </div> 
  

 
  </div>
    </div>
    </div>;
};

export default AddPost;
