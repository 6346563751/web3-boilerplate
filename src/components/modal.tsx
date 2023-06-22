'use client'

import React, { useState } from 'react'
import Modal from 'react-modal'

export default function MyComponent() {
   const [display, setDisplay] = useState(false);
   const [walletAddress, setWalletAddress] = useState('')

   async function connect() {
      if (window.ethereum) {
         await window.ethereum.request({ method: "eth_requestAccounts" });
         window.web3 = new Web3(window.ethereum); 

         const account = web3.eth.accounts
         setWalletAddress(account.givenProvider.selectedAddress)
         console.log(`Wallet: ${walletAddress}`)
         setDisplay((prevDisplay) => !prevDisplay)
      } else {
         console.log("No wallet");
      }
   }

   function stopPropagation(event) {
      if(event.stopPropagation){
         event.stopPropagation()
      }
      event.cancelBubble=true;
   }

   return walletAddress == '' ? (
      <div>
         <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
            onClick={() => setDisplay((prevDisplay) => !prevDisplay)}
         >
            Connect
         </a>

            <div
               className={"h-[96vh] top-[2vh] absolute hover:bg-[rgba(0,0,0,0.03)] mr-4 pl-16 right-[-500px] transition-all ease-in duration-300 ease-linear " + (display ? "translate-x-[-500px]" : "")}
               onClick={() => setDisplay((prevDisplay) => !prevDisplay)}
            >
               <div
                  className={"h-[96vh] top-[2vh] p-4 border border-black border-2 rounded bg-white bg-green-400"}
                  onClick={stopPropagation}
               >
                  <p className="text-lg">Connect a wallet</p>
                  <div className="pt-4 text-base">
                     <button
                        className="bg-blue-200 py-4 pl-4 pr-20 rounded flex items-center"
                        onClick={() => connect()}
                     >
                        <img className="w-10 align-middle rounded" src="/metamask.png"/>
                        <span className="ml-2 font-bold">MetaMask</span>
                     </button>
                  </div>
               </div>
            </div>
      </div>
  ) : (
      <p>{walletAddress}</p>
  )
}