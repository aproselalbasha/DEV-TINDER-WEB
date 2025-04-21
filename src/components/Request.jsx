import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addrequest } from '../utils/requestslice'

const Request = () => {
    const dispatch=useDispatch()
    const requestlist=useSelector(store=>store.request)
    const connectionrequest= async()=>{
        const res=await axios.get(BASE_URL+"/user/request/received",{withCredentials:true})
        
        dispatch(addrequest(res.data.data))

    }
    useEffect(()=>{
     connectionrequest()
    },[])
   

    if (!requestlist) return;

    if (requestlist.length === 0)
      return <h1 className="flex justify-center my-10"> No Requests Found</h1>;

    console.log(requestlist[0].fromUserid.firstName)
  return (
  <div>
 {requestlist.map((res)=>{
    const {_id,firstName,photoUrl}=res.fromUserid
    return(<div key={_id}>
       <div className="card card-side bg-base-200 shadow-sm mt-4">
  <figure>
    <img className='h-20 w-20'
      src={photoUrl}
      alt="profile photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Accecpted</button>
      <button className="btn btn-primary">Rejected</button>
    </div>
  </div>
</div>
            </div>)
    

  })}
  </div>
  
 
  
  )
}

export default Request