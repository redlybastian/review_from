'use client'

import { useState } from "react"

export default function UserReview(){
    const [formData,setFormData] = useState<{email:string,name:string,review:string}>({
        email:'',
        name:'',
        review:''
    })
    const [feedback,setFeedback] = useState('fill the form')

    const hadelSubmit = (e:React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault()

    }


    return(
        <div className=" w-full h-screen mx-auto ">
            <h3 className="text-center text-xl font-bold">Review Submit</h3>
            <div className="rounded-xl mt-4 pb-10 pt-5 shadow-xl flex flex-col mx-auto w-1/2 items-center justify-center bg-amber-50">
                <form onChange={hadelSubmit} className="flex flex-col gap-3 ">
                    <label className="text-sm font-bold" htmlFor="email">Email  </label>
                    <input value={formData.email} className="bg-white rounded-2xl outline-1" type="email"   />
                    <label className="text-sm font-bold" htmlFor="text">Name  </label>
                    <input className="bg-white rounded-2xl outline-1" type="text"   />
                    <label className="text-sm font-bold" htmlFor="text">Review  </label>
                    <textarea name="review" id="review" rows={5} cols={5} className="bg-white rounded-2xl outline-1"></textarea>
                    <p className="text-center">{feedback}</p>
                    <button className="text-white bg-black px-2 py-2 rounded-4xl shadow-xl hover:bg-gray-700 cursor-pointer">Submit</button>
                
                  
                </form>

            </div>
        </div>
    )
}