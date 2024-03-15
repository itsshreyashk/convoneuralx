'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Navigator } from './props'

const Page: React.FC = () => {
    const router = useRouter()

    const handleGoBack = () => {
        router.back();
    };
    const Actions: Array<any> = [{ name: "General" }, { name: "Configuration" }, { name: "Deploy" }]
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <Navigator actions_array={Actions} />
            <div className="absolute top-4 left-4">
                <span className="text-blue-800 text-lg font-bold cursor-pointer hover:underline hover:text-blue-800 text-sm" onClick={handleGoBack}>{'Back'}</span>
            </div>
        </>
    )
}

export default Page