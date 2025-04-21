import React from 'react'
import { useSelector } from 'react-redux'

const Usercard = ({user}) => {
  if (!user) return null;
console.log(user)
  const { firstName, photoUrl} = user


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
      <div className="badge badge-outline">INTRESTED</div>
      <div className="badge badge-outline">IGNORED</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Usercard