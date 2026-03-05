"use client"

import { useState } from "react"

export default function MatchScore(){
    const [mathchScore,setMatchScore] = useState(0)

    return(

             <div className="flex flex-col gap-3 md:flex-row md:justify-center ">
                <p className="text-2xl">Match Score <span className="text-red-500 font-bold">{mathchScore}</span> </p>
                <button className="text-white bg-black px-3 py-2 rounded-2xl" onClick={()=>setMatchScore(mathchScore+1)}>Increase</button>
                     <button className="text-white bg-black px-3 py-2 rounded-2xl" onClick={()=>{           
                    if(mathchScore > 0){
                        setMatchScore(mathchScore-1)
                    }         
                    }}>
                    decrease</button>
            </div>
    )
}