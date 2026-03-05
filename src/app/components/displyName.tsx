"use client"

import React, { ChangeEvent, use, useState } from "react"

export default function DisplayName(){
    const [name,setName] = useState('')
    const [count,setCount] = useState(0)
    const[email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const hadelChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value)
    
    }
    const showEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
    const passwordLength = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }
    return(
        <div>
            <h1>Display user Name</h1>
            <input className="py-3 px-3 bg-gray-200" type="text" value={name} onChange={hadelChange} />
            <p><strong>Text --</strong> {name}</p>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)} className="py- px-2 bg-black text-white">Count+1</button>
            <input type="email" value={email} onChange={showEmail}  className="py-3 px-3 bg-gray-200"/>
            <p>User Email : {email}</p>
            <input type="password" value={password} onChange={passwordLength}  className="py-3 px-3 bg-gray-200"/>
            <p>password : {password.length}</p>

        </div>
    )
}