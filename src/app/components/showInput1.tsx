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
            <input type="text"  />
            <p><strong>User output</strong> </p>
        </div>
    )
}