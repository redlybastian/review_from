"use client";
import { useState } from "react";

export  function  CookieCounter() {
    const [cookies,setCookies] = useState(0)
    return (
        <div>
            <p>Cookie Counter {cookies}</p>
            <button onClick={()=>setCookies(cookies+1)}>click</button>
        </div>
    );
}






// "use client"
// import { useState } from "react"

// export default function StudentMarks() {
//     // 1. Keep track of what is being typed
//     const [userInput, setUserInput] = useState('')
//     // 2. Keep track of the message we want to show AFTER clicking
//     const [feedback, setFeedback] = useState('')

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault(); // Prevents the page from reloading
//         if (userInput.trim() === "") return; // Don't submit if empty

//         setFeedback(`Thank you for submitting! Your marks: ${userInput}`);
//         setUserInput(''); // Optional: Clear the input box after submission
//     }

//     return (
//         <div className="p-10 space-y-4">
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xs">
//                 <input 
//                     className="p-2 bg-amber-200 text-black border border-amber-400 rounded" 
//                     type="text"  
//                     value={userInput} 
//                     onChange={(e) => setUserInput(e.target.value)} 
//                     placeholder="Enter marks here..."
//                 />
                
//                 <button 
//                     type="submit" 
//                     className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//                 >
//                     Submit
//                 </button>
//             </form>

//             {/* 3. Conditional Rendering: Only show if feedback has text */}
//             {feedback && (
//                 <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
//                     {feedback}
//                 </div>
//             )}
//         </div>
//     )
// }