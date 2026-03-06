'use client'

interface FormData{
    email:string,
    name:string,
    review:string
}

import { useState } from "react"

export default function UserReview(){
    const [formData,setFormData] = useState<FormData>({
        email:'',
        name:'',
        review:''
    })
    const [feedback,setFeedback] = useState('fill the form')

    const hadelSubmit = (e:React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault()
      const emptyFields = (Object.keys(formData) as Array<keyof FormData>).reduce((acc,key)=>{
        if(formData[key].trim().length === 0){
            acc.push(key)

        }
        return acc
      },[] as string[])


  if (emptyFields.length > 0) {
    const feedback = `The following fields are empty: ${emptyFields.join(', ')}.`;
    setFeedback(feedback);
  } else {
    // Handle the form submission
    // ...
    const  feedback = "success"
    setFeedback(feedback)
  }
    }


    return(
        <div className=" w-full h-screen mx-auto ">
            <h3 className="text-center text-xl font-bold">Review Submit</h3>
            <div className="rounded-xl mt-4 pb-10 pt-5 shadow-xl flex flex-col mx-auto w-1/2 items-center justify-center bg-amber-50">
                <form onSubmit={hadelSubmit} className="flex flex-col gap-3 ">
                    <label className="text-sm font-bold" htmlFor="email">Email  </label>
                    <input value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className="bg-white rounded-2xl outline-1" type="email"   />
                    <label  className="text-sm font-bold" htmlFor="text">Name  </label>
                    <input value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}  className="bg-white rounded-2xl outline-1" type="text"   />
                    <label className="text-sm font-bold" htmlFor="text">Review  </label>
                    <textarea value={formData.review} onChange={(e)=>setFormData({...formData,review:e.target.value})} name="review" id="review" rows={5} cols={5} className="bg-white rounded-2xl outline-1"></textarea>
                    <p className="text-center">{feedback}</p>
                    <button className="text-white bg-black px-2 py-2 rounded-4xl shadow-xl hover:bg-gray-700 cursor-pointer">Submit</button>
                
                  
                </form>

            </div>
        </div>
    )
}