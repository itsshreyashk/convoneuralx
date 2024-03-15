import React from 'react'

interface Navigator_Props {
    actions_array: Array<any>,
    set_current_view: React.Dispatch<React.SetStateAction<any>>,
}
export const Navigator: React.FC<Navigator_Props> = ({ actions_array, set_current_view }) => {
    return (
        <>
            {/* Links */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            {/* Links End */}
            <div className="fixed top-5 p-1 bg-gray-100 border rounded-full right-4 flex jstify-between min-w-[max-content] max-w-[600px]">
                {
                    actions_array.map((element, index) => (
                        <>
                            <div className="p-2">
                                <span className='text-sm font-bold lato-bold cursor-pointer hover:text-blue-600 duration-200' onClick={() => { set_current_view(element.name) }}>{element.name}</span>
                            </div>
                            {index !== actions_array.length - 1 && ( // Check if it's not the last element
                                <span className="material-symbols-outlined pt-2 text-gray-700">
                                    chevron_right
                                </span>
                            )}
                        </>
                    ))

                }
            </div>
        </>
    )
}

export const General: React.FC = () => {
    return (<>General</>)
}

export const Configuration: React.FC = () => {
    return (<>Configuration</>)
}

export const Deploy: React.FC = () => {
    return (<>Deploy</>)
}