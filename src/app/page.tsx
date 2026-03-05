import { CookieCounter } from "./components/cookieConter";
import MatchScore from "./components/macthScore";
import StudentMarks from "./components/marks";
import ReviewForm from "./components/reviewFrom";
import ShowUserInput from "./components/showInput";
import ShowInput1 from "./components/showInput1";


export default function Home() {
  return (
   <section className=" w-screen h-screen mx-auto ">

    {/* <div className="flex flex-col items-center justify-center mt-20 md:flex-row">
      <div>
        <h1 className="text-5xl font-bold text-center"><span className="text-blue-500">Anker</span> Sundcore  <br /><span className="text-blue-400">R50i NC</span></h1>
      </div>
      

    </div> */}
    <StudentMarks/>
    <ShowUserInput/>
    <ShowInput1/>

   </section>
  );
}

{/* <div className="w-1/2  flex flex-col items-center  justify-center md:flex-row md:justify-start mx-auto">
        <form className="mt-10 flex flex-col gap-4 " action="submit">
          <label className="text-xl " htmlFor="name"> 
            <input type="text" placeholder="Name"  className="w-full px-5 py-3 leading-tight border-gray-300 border-2 outline-none rounded-sm hover:rounded-xl hover:border-gray-400 focus:border-t-blue-400  focus:border-r-blue-400 focus:border-b-blue-600 focus:border-l-blue-600 focus:rounded-2xl"/>
          </label>
          <label htmlFor="email">
            <input type="Email" placeholder="@Email"  className="w-full px-5 py-3 leading-tight border-gray-300 border-2 outline-none rounded-sm hover:rounded-xl hover:border-gray-400 focus:border-t-blue-400  focus:border-r-blue-400 focus:border-b-blue-600 focus:border-l-blue-600 focus:rounded-2xl"/>
          </label>
          <textarea name="review" id="feedback" placeholder="Write a review" className="w-full px-5 py-10 leading-tight border-gray-300 border-2 outline-none rounded-sm hover:rounded-xl hover:border-gray-400 focus:border-t-blue-400  focus:border-r-blue-400 focus:border-b-blue-600 focus:border-l-blue-600 focus:rounded-2xl">
          </textarea>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >Submit</button>
        </form>
        
    </div>
      <div>
        <ReviewForm/>
      </div>
      <div className="">
     

      </div>
      <CookieCounter/>
      <MatchScore/>
      <StudentMarks/> */}