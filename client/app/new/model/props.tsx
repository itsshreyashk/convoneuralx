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
            <div className="fixed top-5 p-1 bg-[transparent] backdrop-blur-[3px] border rounded-full right-4 flex justify-between min-w-[max-content] max-w-[600px]">
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
    return (<>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,100,1,200" />
        <div className="flex justify-center">
            <div className="w-full max-w-[800px] bg-gray-100 overflow-y-scroll max-h-[100vh]">
                <div className="text-start px-4 pt-10">
                    <hr className='mt-16' />
                    <div className="flex">
                        <h1 className='text-3xl font-bold pt-6'>General</h1>
                        <span className="material-symbols-outlined pt-8 px-2 text-gray-600 cursor-pointer">
                            info
                        </span>
                    </div>
                </div>
                <div className="px-4 py-2">
                    <div className="">
                        <label htmlFor="model_name" className='text-gray-900 text-sm px-4 font-bold'>Model Name</label><br />
                        <input type="text" name="model_name" id="model_name" className='text-xl w-full text-gray-900 border rounded-full focus:outline-blue-600 focus:outline-20 focus:ring-1 focus:ring-blue-600 px-4 py-2' placeholder='Model Name' />
                    </div>
                </div>
            </div>

        </div>

    </>)
}

export const Configuration: React.FC = () => {
    return (<>Configuration</>)
}

export const Deploy: React.FC = () => {
    return (<>Deploy</>)
}