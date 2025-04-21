import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from '../utils/userslice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constant'


const Login = () => {
  const[pwd,setpwd]=useState("password")
  const[error,seterror]=useState()
  const user=useSelector((store)=>store.user)
  console.log(user)
 const dispatch=useDispatch()
 const navigate=useNavigate()
const[emailId ,setemail]=useState("gowsar@gmail.com")
const[passWord,setpassword]=useState("gowsar@786")
const  handleclick=async()=>{
  try{
    const res=await axios.post(BASE_URL+"/signin",{emailId,passWord},{withCredentials:true})
    dispatch(adduser(res.data))
   return navigate("/")
  }



  catch(err){
console.error(err)
seterror(err.response.data)

  }
   
    }
  return (
    <div className='  flex justify-center'>
          <div className="card bg-base-300 w-96 shadow-xl my-3    ">
  <div className="card-body ">
    <h2 className="card-title justify-center">LOGIN</h2>
    <div>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text"> Email </span>
   
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={e=>setemail(e.target.value)} value={emailId}/>
  
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text"> Password </span>
   
  </div>
  <input type={pwd} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={e=>setpassword(e.target.value)} value={passWord}  />
  <button className=' relative  bottom-8 left-72  w-6' onClick={()=>{
    if(pwd=="password"){
      setpwd("text")
    }
    else{
      setpwd("password")
    }
   
  }}>👁️</button>
  
</label>
    </div>
   <p className='text-red-600'>{error}</p>
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary" onClick={handleclick}>LOGIN</button>
      {user && <p>loggedin successfull</p>}
    </div>
  </div>
</div>
    </div>

  )
}

export default Login