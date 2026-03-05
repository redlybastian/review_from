"use client"
import { useState } from "react"

export default function StudentMarks(){
    const [userInput, setUserInput] = useState(Number)
    return(
        <div>
            <input className="pt-9" type="text"  value={userInput} onClick={()=> setUserInput(userInput)}/>
            <p> student marks : {userInput}</p>
        </div>
    )
}