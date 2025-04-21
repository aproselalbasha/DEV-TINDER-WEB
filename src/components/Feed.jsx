
import Usercard from './Usercard'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addfeed} from "../utils/feedslice"
import { useNavigate } from 'react-router-dom'


const Feed = () => {
  const navigate=useNavigate()
const dispatch=useDispatch()
const feed=useSelector(store=>store.feed)

 const feedapicall= async()=>{
  if (feed) return;
  try{
    const feeddata=await axios.get(BASE_URL+"/feed",{withCredentials:true})
     dispatch(addfeed(feeddata?.data?.data))
    // console.log(feeddata?.data?.data)

  
  }
  catch(err)
{

  console.log(err.message)

}

 }
useEffect(()=>{
feedapicall()
},[])
return feed ? <Usercard user={feed[0]} /> : null;
}

export default Feed