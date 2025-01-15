
'use client'
// import { useState, useEffect } from "react"
import { useRouter } from "next/navigation" 

export default function LandingPage() {
    const router = useRouter(); 
    // const isLandingPage = router.pathname === '/'; 
    

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
    {/* <p className="text-lg text-gray-600 mb-8">Please log in to access your profile and dashboard.</p> */}
 <button
  onClick={() => router.push('/')}
  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Get Started</button>
   

    
  </div>
  );
}
