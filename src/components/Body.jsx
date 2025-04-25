import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from '../utils/userslice'
import { BASE_URL } from '../utils/constant'

const Body = () => {
 const navigate=useNavigate()
 const dispatch=useDispatch()
 const logindata=useSelector((store)=>store.user)

  const fetchUser= async()=>{
    try{
      const res=await axios.get(BASE_URL+"/profile/view",{withCredentials:true})
 
    dispatch(adduser(res.data))
    }
catch(err){
  if(err.status===401)
  navigate("/login")

}

}
  useEffect(()=>{
    if(!logindata){
      fetchUser()
    }
    
  },[])
  return (
    <div>
  
        <Navbar/>
       
        <Outlet/>
        <Footer/>
       
    </div>
  )
}

export default Body