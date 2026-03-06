'use client'

export default function UserReview(){
    return(
        <div className=" w-full h-screen mx-auto ">
            <h3>Review Submit</h3>
            <div className="rounded-xl pb-10 pt-5 shadow-xl flex flex-col mx-auto w-1/2 items-center justify-center bg-amber-50">
                <form  className="flex flex-col gap-3 ">
                    <label className="text-sm font-bold" htmlFor="email">Email  </label>
                    <input className="bg-white rounded-2xl outline-1" type="email"   />
                    <label className="text-sm font-bold" htmlFor="text">Name  </label>
                    <input className="bg-white rounded-2xl outline-1" type="text"   />
                    <label className="text-sm font-bold" htmlFor="text">Review  </label>
                    <textarea name="review" id="review" rows={5} cols={5} className="bg-white rounded-2xl outline-1"></textarea>
                
                  
                </form>

            </div>
        </div>
    )
}