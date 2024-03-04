import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
      <div className='absolute top-[5%] w-full py-9 flex justify-center text-xl font-semibold text-zinc-900 '>
        Save your Docs
      </div>
      <h1 className='absolute text-[10vw] leading-none tracking-tigher top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 font-semibold'>anyDocs.</h1>
    </div>
    </>
  )
}

export default Background