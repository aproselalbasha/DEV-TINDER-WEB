import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { adduser } from '../utils/userslice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constant'


const Login = () => {
  const[Islogin,setislogin]=useState(true)
  const[firstName,setfirstName]=useState("")
  const[lastName,setlastName]=useState("")
  const[pwd,setpwd]=useState("password")
  const[error,seterror]=useState()
  const user=useSelector((store)=>store.user)

 const dispatch=useDispatch()
 const navigate=useNavigate()
const[emailId ,setemail]=useState("")
const[passWord,setpassword]=useState("")
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

    const handlesignup=async()=>{
      try{
        const res=await axios.post(BASE_URL+"/signup",{firstName,lastName,emailId,passWord},{withCredentials:true})
        console.log(res)
         dispatch(adduser(res.data.data))
        return navigate("/profile");
      }
      catch(err){
console.log(err.response.data)
      }
    }
  return (
    <div className='  flex justify-center'>
          <div className="card bg-base-300 w-96 shadow-xl my-3    ">
  <div className="card-body ">
    <h2 className="card-title justify-center">{Islogin?"LOGIN":"SIGNUP"}</h2>
    <div>
    {Islogin?null:(<>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text"> FirstName </span>
   
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={e=>setfirstName(e.target.value)} value={firstName}/>
  
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text"> LastName </span>
   
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={e=>setlastName(e.target.value)} value={lastName}/>
  
</label></>)}

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
      <button className="btn btn-primary" onClick={Islogin?handleclick:handlesignup}>{Islogin?"LOGIN":"SIGNUP"}</button>
      {user && <p>loggedin successfull</p>}
    
    </div>
    <div >
        <p className='ml-16 cursor-pointer' onClick={()=>Islogin?setislogin(false):setislogin(true)}>{Islogin
              ? "New User? Signup Here"
              : "Existing User? Login Here"}</p>
      </div>
  </div>
  
</div>
    </div>

  )
}

export default Login