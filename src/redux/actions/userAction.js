import {  USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_TEMPLATE_REQUEST } from "../constants/userConstants"
import axios from "axios"
import { server } from "../../components/server"



export const login=(userDetails)=>async(dispatch)=>{
    try{
        dispatch({
            type:USER_LOGIN_REQUEST,
        })
        const config={
            headers:{
                'Content-Type':'application/json'
            },
        }
        const {data}=await axios.post(`${server}/user/signin`,userDetails,config)
        if(data.error){
     return  dispatch({
        type:USER_LOGIN_FAIL,
        payload:data.error
        
    })
        }
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
     
    }
        catch(error){
            dispatch({
                type:USER_LOGIN_FAIL,
                payload:error.response && error.response.data.message 
                ?error.response.data.message
                :error.message
                
            })
            
    }

}


