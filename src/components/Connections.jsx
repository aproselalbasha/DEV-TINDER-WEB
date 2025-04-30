import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addconnection } from '../utils/connectionslice'

const Connections = () => {
    const dispatch=useDispatch()
const connection_data=useSelector(store=>store.connections)

    const myconnections=async()=>{
        try{
            const res=await axios.get(BASE_URL+"/user/connection",{withCredentials:true})
            console.log("API response:", res);
        
            dispatch(addconnection(res.data))
        }
        catch(err){
       console.log(err)
        }
       

    }
   
    useEffect(()=>{
       myconnections()
    },[])
   
    if(!connection_data){
        return
    }
   if(connection_data.length===0){
    return <h1> No Connections Found</h1>;

   }
    return (
    <>
{connection_data.map((res)=><div key={res._id}>
    
    <ul className="list bg-base-100 rounded-box shadow-md">
  
 
  
  <li className="list-row">
    <div><img className="size-16 rounded-box" src={res.photoUrl}/></div>
    <div>
      <div>{res.firstName}</div>
     
    </div>
    <button className="btn btn-square btn-ghost">
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
    <button className="btn btn-square btn-ghost">
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  

  
</ul>
    
</div>

)} 
    </>
  )
}

export default Connections