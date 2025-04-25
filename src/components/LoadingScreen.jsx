import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

 const LoadingScreen =({onComplete}) =>{
    const [text, setText]=useState("");
    const fullText="Cherise<3!!!";
    useEffect(()=>{
      let index = 0;
      const interval = setInterval(() => {
        setText(fullText.substring(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete(); // tells parent “loading is done”
          }, 1000); // wait 1 more second before calling onComplete
        }
      }, 100);
      return () => clearInterval(interval); // cleanup when component unmounts
    }, [onComplete])
  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      {/* Purpose: This creates a full-screen overlay with centered content. */}
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
        {/* 📌 Purpose: Display the typing text in a big, code-style font, with a
        blinking cursor. */}
        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
          {/* 📌 Purpose: Acts as the background of the progress bar. */}
          <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b8256] animate-loading-bar">
            {/* 📌 Purpose: The moving or growing part of the loading bar */}
          </div>
        </div>
      </div>
    </div>
  );
  
}
<Navbar />;
export default LoadingScreen;
