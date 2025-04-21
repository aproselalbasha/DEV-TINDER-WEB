import React from 'react'
import Update from './Update'
import { useSelector } from 'react-redux'



const Profile = () => {
  const loginuser=useSelector(store=>store.user)

  
  if (!loginuser) return null;
 
  return (
    <div >
 <Update data={loginuser} />


    </div>
  )
}

export default Profile