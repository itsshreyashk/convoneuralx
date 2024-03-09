import React from 'react'
import Link from 'next/link'

interface PropsProps {
    usernameRef: React.RefObject<any>,
    passwordRef: React.RefObject<any>,
    handleSignUp: () => void,
    passView: any,
    setPassView: any,
    ageRef: React.RefObject<any>,
    emailRef: React.RefObject<any>,
}
const Props: React.FC<PropsProps> = ({ usernameRef, passwordRef, handleSignUp, passView, setPassView, ageRef, emailRef }) => {
    return (
        <>
            <div className="flex justify-center py-[20vh]">
                <div className="w-[80%] max-w-[350px] min-w-[max-content] border h-[max-content] rounded-xl px-4 py-2 backdrop-blur-xl">
                    <div className="w-full text-start space-y-2">
                        <div className="space-y-0">
                            <label htmlFor="username" className='text-sm'>Create Username</label>
                            <input type="text" name="username" className="px-4 py-2 w-full border rounded-full outline-none text-sm" ref={usernameRef} />
                        </div>
                        <div className="space-y-0">
                            <label htmlFor="password" className='text-sm'>Create Password</label>
                            <div className="flex">
                                <input type={`${passView}`} name="password" className="px-4 py-2 w-full border border-r-0 rounded-l-full outline-none text-sm" ref={passwordRef} />
                                <button type="button" className='text-sm px-4 py-2 rounded-r-full bg-white border border-l-0' onClick={() => {
                                    (passView === 'password') ? `${setPassView('text')}` : `${setPassView('password')}`
                                }}>{(passView === 'password') ? 'view' : 'hide'}</button>
                            </div>
                        </div>
                        <div className="space-y-0">
                            <label htmlFor="email" className='text-sm'>Email</label>
                            <input type="email" name='email' className='px-4 py-2 w-full border rounded-full outline-none text-sm' ref={emailRef} />
                        </div>
                        <div className="space-y-0">
                            <label htmlFor="age" className='text-sm'>Age</label>
                            <input type="number" name='age' className='px-4 py-2 w-full border rounded-full outline-none text-sm' ref={ageRef} />
                        </div>
                    </div>
                    <div className="pt-7 space-y-1">
                        <Link href={'/sign/create/connect'}>
                            <button type="button" className='w-full text-center text-sm px-4 py-2 bg-gray-100 text-gray-700 border rounded-full active:bg-gray-200 active:scale-[0.9] duration-200 prevent-highlight' onClick={handleSignUp}>Continue Setup</button>
                        </Link>
                        <button type="button" className='w-full text-center text-sm px-4 py-2 bg-blue-600 text-white rounded-full active:bg-blue-800 active:scale-[0.9] duration-200 prevent-highlight' onClick={handleSignUp}>Proceed</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Props;