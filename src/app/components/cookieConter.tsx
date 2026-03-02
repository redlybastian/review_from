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