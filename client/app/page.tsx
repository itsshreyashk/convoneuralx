import Link from "next/link";

import React from 'react'

const Home = () => {
  return (
    <>
      <div className="w-screen flex fixed top-0 p-4">
        <div className="w-full text-start px-4 py-2">
          <span className="text-white">ConvoneuralX</span>
        </div>
        <div className="w-full text-center"></div>
        <div className="w-full text-end px-4 py-2">
          <Link href="/sign">
            <span className="text-blue-600 active:text-purple-800 cursor-pointer">Sign In/Up</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <div className="text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-gray-500 to-gray-800">Welcome to Convoneuralx</span>
        </div>
        <div className="text-lg mb-8 text-center">
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-gray-500 to-gray-800">Empower your conversations with Convoneuralx.</span>
        </div>
        <div className="space-x-2">
          <Link href="/models">
            <span className="px-8 py-4 bg-white text-black rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-70 transform">Explore models</span>
          </Link>
          <Link href="/sign">
            <span className="px-8 py-4 bg-white text-black rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-70 transform">Get Started</span>
          </Link>
        </div>

      </div>
    </>
  )
}

export default Home;