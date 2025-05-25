import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { createsocketconnection } from '../utils/Socket'
import { Socket } from 'socket.io-client'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'

const Chat = () => {
  const[newmessage,setnewmessage]=useState("")
   const[message,setmessage]=useState([])
    const {targetuserid}=useParams()
    const user=useSelector(store=>store.user)
    const userid=user?._id
    const fetchmessage=async ()=>{
      const chat=await axios.get(BASE_URL+"/chat/"+targetuserid,{withCredentials:true})
      console.log(chat)
      const chatmessages=chat?.data?.messages.map((msg)=>{return{
        firstname:msg?.senderid?.firstName,
        text:msg?.text
      
      }

      })
      setmessage(chatmessages)
      
    }
   
    useEffect(()=>{
     fetchmessage()
    },[])
   useEffect(()=>{
    if(!userid){
      return
    }
     const socket=createsocketconnection()
     socket.emit("joinchat",{firstname:user.firstName,userid,targetuserid})
     socket.on("newmessageReceived",({ firstname, text })=>{
      setmessage((message)=>[...message,{firstname,text}])
      console.log(firstname+":"+text)
     })
     return ()=>{socket.disconnect()} 
   },[userid,targetuserid])
   const sendmessage=()=>{
  const socket=createsocketconnection()
  socket.emit("sendmessage",{firstname:user.firstName,userid,targetuserid,text:newmessage})
  setnewmessage("")
   }
  
  return (
    <div className='w-3/4 m-auto border border-gray-600 m-5 h-[70vh] flex flex-col'>
 <h1 className='p-5 border-b border-gray-600'>CHAT</h1>
 <div className='flex-1 overflow-scroll'>
    {message.map((m,index)=>{
        return( <div  key={index}>
            <div className={"chat "+(user.firstName===m.firstname? "chat-start":"chat-end")}>
            <div className="chat-header">
            {m.firstname}
              <time className="text-xs opacity-50">2 hours ago</time>
            </div>
            <div className="chat-bubble">{m.text}</div>
            <div className="chat-footer opacity-50">Seen</div>
          </div>
          
        </div>)

    })}
    {/* message  */}
 </div>
 <div className=' border border-gray-600 flex items-center gap-2 p-3'>
    
<input value={newmessage} onChange={(e)=>{setnewmessage(e.target.value)

}} type="text" className= 'flex-1 bg-black mr-2 p-2 border border-gray-500 text-white'/>
 <button onClick={sendmessage} className='btn btn-secondary'>Send</button>
 </div>

    </div>
  )
}

export default Chat