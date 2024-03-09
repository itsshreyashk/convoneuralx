'use client';

/*
Page for connecting user's account to APIs.
Via: Facebook / Github
Config. -> Fetch to API using public KEY.
*/
import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const handleGoBack = () => router.back();

  return (
    <>
      <div className="absolute top-4 left-4">
        <span className="text-blue-800 text-lg font-bold cursor-pointer hover:underline hover:text-blue-800 text-sm" onClick={handleGoBack}>{'Back'}</span>
      </div>
    </>
  )
}
export default Page;