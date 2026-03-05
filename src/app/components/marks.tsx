"use client"
import { useState } from "react"

export default function StudentMarks() {
    // const [userInput,setUserInput] =useState('')
    // const [userFeedBack,setUserFeedBack] = useState('')

    // const handleSubmit = (e:React.FormEvent)=>{
    //     e.preventDefault()
    //     if(userInput.trim()=== '') return;
    //     setUserFeedBack(`Thanks ${userInput}`)
    //     setUserInput('')


    // }
    const [userInput,setUserInput] = useState('')

    const hadleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserInput(e.target.value)
    }


    return (
     <div className="flex flex-col gap-3 md:flex-row md:justify-center mt-10">
           {/* <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setUserInput(e.target.value)} value={userInput} placeholder="Enter Review" className="p-2 bg-amber-200 text-black border border-amber-400 rounded"  />
            <button type="submit" className="bg-blue-600 m-5 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
            
           </form>

          {
            userFeedBack && (
                <div>
                    {userFeedBack}
                </div>
            )
          } */}

            <div className="p-10">
                <input type="text" value={userInput} onChange={hadleChange} className="py-2 px-3 bg-amber-100" />

                <p className="text-xl mt-4"><strong>The text</strong>: {userInput}</p>

            </div>



     </div>
    )
}