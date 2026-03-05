'use client'

import { useState } from "react"

export default function ShowInput1(){
    const [userInput,setUserInput] = useState('')
    const hadleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setUserInput(e.target.value)
    }
    return(
        <div>
            <h1>User input2</h1>
            <input className="bg-gray-200 " type="text" value={userInput} onChange={hadleChange}  />
            <p><strong>User output</strong> {userInput}</p>
        </div>
    )
}