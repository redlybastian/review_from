"use client"
import { useState } from "react"

export default function StudentMarks(){
    const [userInput, setUserInput] = useState('')
    return(
        <div>
            <input className="pt-9 bg-amber-200 text-black" type="text"  value={userInput}  onChange={(e)=>setUserInput(e.target.value)}/>
            <p> student marks : {userInput}</p>
        </div>
    )
}