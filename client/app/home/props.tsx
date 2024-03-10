import React from 'react'

const Dashboard: React.FC = () => {
  
  return (
    <>
    <div className="p-4 text-left">
      <h1 className='font-bold text-2xl'>Your Dashboard</h1>
    </div>
      <div className="p-4 flex justify-center border-b">
        <div className="w-full max-w-[400px] space-y-2">
          <button type="button" className='px-4 py-2 text-center w-full border-dotted border text-sm active:bg-gray-400 duration-200 active:scale-[0.9] transform font-bold border-gray-800'>Create new model</button>
          <button type="button" className='px-4 py-2 text-center w-full border-dotted border text-sm active:bg-gray-400 duration-200 active:scale-[0.9] transform font-bold border-gray-800'>View active models</button>

        </div>
      </div>
    </>
  )
}

export { Dashboard }