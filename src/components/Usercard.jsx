import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUserFromFeed } from '../utils/feedslice';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';

const Usercard = ({user}) => {
  const dispatch=useDispatch()
  if (!user) return null;
console.log(user)
  const { _id,firstName, photoUrl} = user


  const handleSendRequest =async(status,User_id)=>{
    try{
      const res=await axios.post(BASE_URL+"/request/send/"+status+"/"+User_id,{},{withCredentials:true})
      dispatch(removeUserFromFeed(User_id))
    }
    catch(err){
console.log(err)
    }

  
  }


  return (
    <div className=' flex justify-center mt-4'>
    <div className="   card bg-base-300 w-96 shadow-sm ">
  <figure >
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {firstName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline p-5 bg-green-400 text-stone-900 cursor-pointer" onClick={()=>handleSendRequest("interested",_id)}>INTRESTED</div>
      <div className="badge badge-outline p-5 bg-pink-500 text-stone-900 cursor-pointer" onClick={()=>handleSendRequest("ignored",_id)}>IGNORED</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Usercard