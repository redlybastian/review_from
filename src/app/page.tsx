

export default function Home() {
  return (
   <section className=" w-screen h-screen">
    <div className="w-1/2  flex flex-col items-center  justify-center mx-auto">
        <form className="mt-10 flex flex-col gap-4" action="submit">
          <label className="text-xl " htmlFor="name"> 
            <input type="text" placeholder="Name"  className="w-full px-5 py-3 leading-tight border-gray-300 border-2 outline-none rounded-sm hover:rounded-xl hover:border-gray-400 focus:border-t-blue-400  focus:border-r-blue-400 focus:border-b-blue-600 focus:border-l-blue-600 focus:rounded-2xl"/>
          </label>
          <label htmlFor="email">
            <input type="Email" placeholder="@Email"  className="w-full px-5 py-3 leading-tight border-gray-300 border-2 outline-none rounded-sm hover:rounded-xl hover:border-gray-400 focus:border-t-blue-400  focus:border-r-blue-400 focus:border-b-blue-600 focus:border-l-blue-600 focus:rounded-2xl"/>
          </label>
          <textarea name="review" id="feedback" placeholder="Write a review" className="w-full px-5 py-10 leading-tight border-gray-300 border-2 outline-none rounded-sm hover:rounded-xl hover:border-gray-400 focus:border-t-blue-400  focus:border-r-blue-400 focus:border-b-blue-600 focus:border-l-blue-600 focus:rounded-2xl">
          </textarea>
        </form>
    </div>

   </section>
  );
}
