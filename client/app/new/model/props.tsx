import React from 'react'
import ReactMarkdown from 'react-markdown';


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
            <div className="fixed top-5 p-1 bg-gray-600 border-4 rounded-full right-4 flex justify-between min-w-[max-content] max-w-[600px] shadow-xl">
                {
                    actions_array.map((element, index) => (
                        <React.Fragment>
                            <div className="p-2" key={element.id}>
                                <span className='text-sm font-bold lato-bold text-white cursor-pointer hover:text-blue-600 duration-200' onClick={() => { set_current_view(element.name) }}>{element.name}</span>
                            </div>
                            {index !== actions_array.length - 1 && ( // Check if it's not the last element
                                <span className="material-symbols-outlined pt-2 text-gray-300">
                                    chevron_right
                                </span>
                            )}
                        </React.Fragment>
                    ))

                }
            </div>
        </>
    )
}
interface General_Structure {
    set_chars_description: React.Dispatch<React.SetStateAction<number>>,
    chars_description: any,
    set_current_view: React.Dispatch<React.SetStateAction<any>>,
}
export const General: React.FC<General_Structure> = ({ set_chars_description, chars_description, set_current_view }) => {
    const minimum_description_character_length: number = 100;
    const max_description_character_length: number = 1000;
    return (
        <>
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
                            <div className="flex">
                                <div className="border-4 border-r-0 font-bold text-gray-600 px-4 py-2 w-[max-content] text-xl rounded-l-full">
                                    itsshreyashk/
                                </div>
                                <input type="text" name="model_name" id="model_name" className='text-xl w-full text-gray-900 border-4 rounded-r-full duration-200 focus:border-blue-600 outline-none px-4 py-2 font-bold' placeholder='Model Name' />
                            </div>
                            <div className="my-2 space-y-2">
                                <div className="w-full flex">
                                    <div className="w-full text-start">
                                        <label htmlFor="model_description" className='px-4 text-gray-800 text-sm font-bold'>Model Description</label><br />
                                    </div>
                                    <div className="w-full text-end">
                                        <label htmlFor="model_description" className={`my-4 text-${(chars_description <= minimum_description_character_length - 1) ? "red" : "green"}-600 text-sm font-bold`}>{chars_description}/{max_description_character_length}</label><br />
                                    </div>
                                </div>
                                <textarea
                                    name="model_description"
                                    id="model_description"
                                    cols={30}
                                    rows={10}
                                    className='w-full text-gray-800 duration-200 px-4 py-2 rounded-xl outline-none border-4 focus:border-blue-600'
                                    onChange={(e: any) => {
                                        set_chars_description(e.target.value.length);
                                    }}
                                    minLength={minimum_description_character_length}
                                ></textarea>

                                <span className='text-gray-600 text-sm p-2 font-bold'>Use <a className='text-blue-600 cursor-pointer' href={`https://www.markdownguide.org/getting-started/`}>markdown</a> to format your text.</span>
                            </div>
                            <div className="flex">
                                <div className="border-4 border-r-0 font-bold text-gray-600 px-4 py-2 w-[max-content] text-xl rounded-l-full">
                                    Image/
                                </div>
                                <input type="text" name="model_name" id="model_name" className='text-xl w-full text-gray-900 border-4 rounded-r-full duration-200 focus:border-blue-600 outline-none px-4 py-2 font-bold' placeholder='Model Image URL' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-end py-2 px-4">
                        <button type="button" aria-label='Proceed' aria-expanded={true} aria-disabled={true} className='px-4 py-2 rounded-xl font-bold text-white bg-green-600 active:bg-green-800 active:outline-green-600 outline-4 outline' onClick={() => {
                            set_current_view('Configuration')
                        }}>Proceed</button>
                    </div>
                </div>

            </div>
        </>)
}
interface Configuration_Structure {
    set_current_view: React.Dispatch<React.SetStateAction<any>>,
    use_default_methods_state: boolean,
    set_use_default_methods_state: React.Dispatch<React.SetStateAction<any>>,
}
export const Configuration: React.FC<Configuration_Structure> = ({ set_current_view, use_default_methods_state, set_use_default_methods_state }) => {
    return (<>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,100,1,200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <div className="flex justify-center">
            <div className="w-full max-w-[800px] bg-gray-100 overflow-y-scroll max-h-[100vh]">
                <div className="text-start px-4 pt-10">
                    <hr className='mt-16' />
                    <div className="flex">
                        <h1 className='text-3xl font-bold pt-6'>Configuration</h1>
                        <span className="material-symbols-outlined pt-8 px-2 text-gray-600 cursor-pointer">
                            info
                        </span>
                    </div>
                </div>
                <div className="border m-4 rounded">
                    <h2 className='px-4 py-2 font-bold text-green-700'>Necessary Fill-outs</h2>
                    <div className="px-4 py-2 space-y-2">
                        <div className="py-4">
                            <label htmlFor="source_url" className='font-bold p-2'>Source API</label><br />
                            <input type="text" name="source_url" id="source_url" className="px-4 py-2 rounded-full w-full outline-none border-4 focus:border-blue-600 font-bold duration-200" placeholder={`Type or Paste your model's origin`} aria-autocomplete="none" aria-description="model source" />
                        </div>
                        <div className="py-4">
                            <label htmlFor="" className='font-bold p-2'>Configure Methods</label><br />
                            {/* Field */}
                            <div className="border m-2 rounded">
                                <div className="w-full flex p-4">
                                    <div className="w-full text-start mt-2 text-sm font-bold">
                                        <span className="mt-2 text-blue-800">
                                            Use Default Methods
                                        </span>
                                    </div>
                                    <div className="w-full text-end">
                                        <span className="material-symbols-rounded m-1 cursor-pointer active:bg-gray-300 rounded-full duration-200 selection-none hover:scale-[2] hover:shadow-xl transform" onClick={() => {
                                            set_use_default_methods_state(!use_default_methods_state)
                                        }}>
                                            {
                                                use_default_methods_state ? ('radio_button_checked') : ('radio_button_unchecked')
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="opacity-70 px-4 py-2">
                                    <b className='text-sm'>Custom methods coming soon.</b>
                                </div>
                            </div>
                            <div className="w-full text-end py-2 px-4">
                                <button type="button" aria-label='Proceed' aria-expanded={true} aria-disabled={true} className='px-4 py-2 rounded-xl font-bold text-white bg-green-600 active:bg-green-800 active:outline-green-600 outline-4 outline' onClick={() => {
                                    set_current_view('Deploy')
                                }}>Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </>)
}

export const Deploy: React.FC = () => {
    return (<>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,100,1,200" />
        <div className="flex justify-center">
            <div className="w-full max-w-[800px] bg-gray-100 overflow-y-scroll max-h-[100vh]">
                <div className="text-start px-4 pt-10">
                    <hr className='mt-16' />
                    <div className="flex">
                        <h1 className='text-3xl font-bold pt-6'>Deploy</h1>
                        <span className="material-symbols-outlined pt-8 px-2 text-gray-600 cursor-pointer">
                            info
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}