'use client'

import React, { useState } from 'react'
import Modal from 'react-modal'

export default function MyComponent() {
   function stopPropagation(event) {
      if(event.stopPropagation){
         event.stopPropagation()
      }
      event.cancelBubble=true;
   }
   const [display, setDisplay] = useState(false);
   return (
      <div>
         <a
            href="#"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
            onClick={() => setDisplay((prevDisplay) => !prevDisplay)}
         >
            Connect
         </a>

            <div
               class={"h-[96vh] top-[2vh] absolute hover:bg-[rgba(0,0,0,0.03)] mr-4 pl-16 right-[-500px] transition-all ease-in duration-300 ease-linear " + (display ? "translate-x-[-500px]" : "")}
               onClick={() => setDisplay((prevDisplay) => !prevDisplay)}
            >
            <div
               class={"h-[96vh] top-[2vh] p-4 border border-black border-2 rounded bg-white bg-green-400"}
               onClick={stopPropagation}
            >
               <p class="text-lg">Connect a wallet</p>
               <div class="pt-4 text-base">
                  <button
                     class="bg-blue-400 py-4 px-16 rounded"
                  >
                     MetaMask
                  </button>
               </div>
            </div>
            </div>
      </div>
  );
}