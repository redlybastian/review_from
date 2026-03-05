"use client"

import { useState } from "react"

export default function ShowUserInput(){
    const[userInput,setUserInput]=useState('')

    const handelChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserInput(e.target.value)
    }


    return(
        <div className="flex justify-center items-center">
            <h1>User input</h1>
            <input value={userInput} onChange={handelChange} type="text" className="py-2 px-3 bg-gray-200 m-3" />
            <p><strong>User Text </strong> {userInput} </p>
        </div>
    )
}