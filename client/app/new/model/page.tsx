'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Navigator, General, Configuration, Deploy } from './props'


const Page: React.FC = () => {
    const [current_view, set_current_view] = useState('General');
    const router = useRouter()

    const handleGoBack = () => {
        router.back();
    };
    const Actions: Array<any> = [{ name: "General" }, { name: "Configuration" }, { name: "Deploy" }]
    
    
    
    
    
    //General
    const [chars_description, set_chars_description] = useState<number>(0);

    useEffect(() => {
        document.title = "New Model";

        //General
        //Configuration
        //Deploy
        return () => {
        }
    }, [])

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <Navigator actions_array={Actions} set_current_view={set_current_view} />
            <div className="absolute top-4 left-4">
                <span className="text-blue-800 text-lg font-bold cursor-pointer hover:underline hover:text-blue-800 text-sm" onClick={handleGoBack}>{'Back'}</span>
            </div>
            {
                (current_view === 'General') && (<General set_chars_description={set_chars_description} chars_description={chars_description}/>)
            }
            {
                (current_view === 'Configuration') && (<Configuration />)
            }
            {
                (current_view === 'Deploy') && (<Deploy />)
            }
        </>
    )
}

export default Page