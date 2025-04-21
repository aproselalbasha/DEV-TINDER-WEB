import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constant'
import { removeuser } from '../utils/userslice'

const Navbar = () => {
const dispatch=useDispatch()
  const user=useSelector((store)=>store.user)
  const navigate=useNavigate()
  const userlogout=async()=>{
    try{
      const logoutuser=await axios.post(BASE_URL+"/logout",{},{withCredentials:true})
      dispatch(removeuser())
     navigate("/login")
    }
    catch(err){
   console.log(err)
    }
    
  }

  return (

    <div className="navbar bg-base-300">
      
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost text-xl">🧑‍💻Dev-Tinder</Link>
    </div>
    <div className="flex-none gap-2">
 
      {user && <div className="dropdown dropdown-end">
      <p >{user.firstName}</p>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-6">
        
          <div className="w-10 rounded-full ">
          
            <img
              alt="Tailwind CSS Navbar component"
              src={user.photoUrl}/>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            
            <Link to="/profile" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><a>Settings</a></li>
          <li><a onClick={userlogout}>Logout</a></li>
        </ul>
      </div>}
    </div>
  </div>
  )
}

export default Navbar