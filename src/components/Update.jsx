import React, {  useState } from 'react'
import Usercard from './Usercard'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { adduser } from '../utils/userslice'

const Update = ({data}) => {
  const [tost,settost]=useState(false)
  const [firstName, setFirstName] = useState(data.firstName);
  const [photoUrl, setPhotoUrl] = useState(data.photoUrl);
  const dispatch=useDispatch()

  
   const saveProfile= async()=>{
    try{
const res=await axios.patch(BASE_URL+"/profile/edit",    {
    firstName,
    
    photoUrl
  
  },{withCredentials: true}
 
)
console.log(res.data)
 dispatch(adduser(res?.data))
 settost(true)
 setTimeout(() => {
  settost(false)
 }, 2000);
    }
    catch(err){
        console.log(err.data)
    }

   }
    
  
    
  return (
    <>
     <div className='  flex justify-center'>
          <div className="card bg-base-300 w-96 shadow-xl my-3    ">
  <div className="card-body ">
    <h2 className="card-title justify-center">Edit Profile</h2>
    <div>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text"> FirstName </span>
   
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={e=>setFirstName(e.target.value)} value={firstName}/>
  
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text"> PHOTO-URL </span>
   
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={e=>setPhotoUrl(e.target.value)} value={photoUrl}  />

  
</label>
    </div>
   
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary" onClick={saveProfile} >UPDATE</button>
     
    </div>
  </div>
</div>
<div className='pl-6'>
<Usercard user={{firstName,photoUrl}}/>
</div>
{
  tost &&<div className="toast toast-top toast-center mt-11">
  
  <div className="alert alert-success">
    <span>profile updated sucessfully</span>
  </div>
</div>
}

    </div>
    
    </>
  )
}

export default Update