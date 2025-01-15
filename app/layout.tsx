"use client"
import { useState, useEffect } from "react"
import { Inter } from 'next/font/google'
import './globals.css' 
import { Toaster } from "react-hot-toast"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [totalEarnings] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if the user is logged in (e.g., by checking cookies or localStorage)
    const userEmail = localStorage.getItem('userEmail'); // Example of checking localStorage
    if (userEmail) {
      setIsLoggedIn(true); // Set user as logged in
    }
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} totalEarnings={totalEarnings} />
          <div className="flex flex-1">
            {isLoggedIn && <Sidebar open={sidebarOpen} />} {/* Conditionally render Sidebar */}
            <main className="flex-1 p-4 lg:p-8 ml-0 lg:ml-64 transition-all duration-300">
              {children}
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
