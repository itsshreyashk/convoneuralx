import React from 'react'
interface PropsProps {
    usernameRef: React.RefObject<any>,
    passwordRef: React.RefObject<any>,
    handleSignIn: () => void,
    passView: any,
    setPassView: any,
}
const Props: React.FC<PropsProps> = ({ usernameRef, passwordRef, handleSignIn, passView, setPassView }) => {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <div className="flex justify-center py-[25vh]">
                <div className="w-[80%] max-w-[350px] min-w-[max-content] border h-[max-content] rounded-xl px-4 py-2 backdrop-blur-xl">
                    <div className="w-full text-start space-y-2">
                        <div className="space-y-0">
                            <label htmlFor="username" className='text-sm'>Username</label>
                            <input type="text" name="username" className="px-4 py-2 w-full border rounded-full outline-none text-sm" ref={usernameRef} />
                        </div>
                        <div className="space-y-0">
                            <label htmlFor="password" className='text-sm'>Password</label>
                            <div className="flex">
                                <input type={`${passView}`} name="password" className="px-4 py-2 w-full border border-r-0 rounded-l-full outline-none text-sm" ref={passwordRef} />
                                <button type="button" className='text-sm px-4 py-2 rounded-r-full bg-white border border-l-0 flex' onClick={() => {
                                    (passView === 'password') ? `${setPassView('text')}` : `${setPassView('password')}`
                                }}>{(passView === 'password') && (
                                    <span className="material-symbols-outlined mt-4/5">
                                        visibility
                                    </span>
                                )}
                                    {(passView === 'text') && (
                                        <span className="material-symbols-outlined mt-4/5">
                                            visibility_off
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-7 space-y-1">
                        <button type="button" className='w-full text-center text-sm px-4 py-2 bg-blue-600 text-white rounded-full active:bg-blue-800 active:scale-[0.9] duration-200 prevent-highlight' onClick={handleSignIn}>Sign In</button>
                        <button type="button" className='w-full text-center text-sm px-4 py-2 bg-gray-100 text-gray-800 rounded-full active:bg-gray-300 active:scale-[0.9] duration-200 prevent-highlight'>Forgot Password</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Props;