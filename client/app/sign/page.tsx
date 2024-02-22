import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div className="bg-black h-screen flex items-center justify-center">
            <div className="absolute top-4 left-4">
                <Link href="/">
                    <span className="text-blue-400 text-lg font-thin hover:underline hover:text-blue-800 text-sm">{'Back'}</span>
                </Link>
            </div>
            <div className="absolute top-4 right-4">
                <Link href="/">
                    <span className="text-white text-lg font-bold cursor-pointer">{'ConvoneuralX'}</span>
                </Link>
            </div>
            
            <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-8">Welcome to Our Platform</h1>
                <div className="flex justify-center space-x-6">
                    <Link href="/sign/create">
                        <button className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 text-lg font-semibold transition duration-300 text-sm">Create Account</button>
                    </Link>
                    <Link href="/sign/auth">
                        <button className="px-6 py-3 bg-white text-gray-800 rounded-full hover:bg-gray-200 text-lg font-semibold transition duration-300 text-sm">Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;