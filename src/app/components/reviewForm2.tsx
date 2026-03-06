"use client"


import React, { useState } from "react"

export default function NewReview(){
    const [isSubmit,setIsSubmit] = useState(false)
    const [formData,setFormData] = useState({email:'',name:'',review:''})
    const [errorMessage,setErrorMessage] = useState('')

    const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value})

    }

    const handelSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        setErrorMessage('')
        if(!formData.email || !formData.name || !formData){
            setErrorMessage("All Fields are required")
            return

        }

        setIsSubmit(true)


    }
    

    return(
        <div className=" w-full h-screen mx-auto ">
            <h3 className="text-center text-xl font-bold">Review Submit</h3>
            <div className="rounded-xl mt-4 pb-10 pt-5 shadow-xl flex flex-col mx-auto w-1/2 items-center justify-center bg-amber-50">
               {
                (isSubmit) ? <div className="text-black font-bold">Thank you for your feedback!</div> :

                <form onSubmit={handelSubmit}  className="flex flex-col gap-3 ">
                    {errorMessage && <p className="text-red-500 text-xs font-bold text-center">{errorMessage}</p>}
                    <label className="text-sm font-bold" htmlFor="email">Email  </label>
                    <input name="email" value={formData.email} onChange={handelChange} className="bg-white rounded-2xl outline-1" type="email"   />
                    <label  className="text-sm font-bold" htmlFor="text">Name  </label>
                    <input name="name" value={formData.name} onChange={handelChange}   className="bg-white rounded-2xl outline-1" type="text"   />
                    <label className="text-sm font-bold" htmlFor="text">Review  </label>
                    <textarea value={formData.review} onChange={handelChange} name="review" id="review" rows={5} cols={5} className="bg-white rounded-2xl outline-1"></textarea>
                    <p className="text-center"></p>
                    <button className="text-white bg-black px-2 py-2 rounded-4xl shadow-xl hover:bg-gray-700 cursor-pointer">Submit</button>
                
                  
                </form>
               }

            </div>
        </div>
    )
}
