import React from 'react'
import { useState } from 'react'

function Counter() {
    let [number, setNumber] = useState(0);

  return (
    <div className='w-full bg-slate-500 h-screen'>
        <div className='container mx-auto '>
            <div className='pt-[5rem] flex flex-col items-center justify-center gap-10'>

            <h1 className='text-6xl  text-black' >counter</h1>
            <h2 className='text-8xl  text-black'>{number}</h2>

            <div className=' flex items-center gap-6'>
                <button  className='text-4xl text-white bg-green-950 py-2 px-4 rounded-md' onClick={() =>{
                    setNumber(number + 1)
                }}> increase</button>
                <button className='text-4xl text-white bg-green-950 py-2 px-4 rounded-md' onClick={() =>{
                    setNumber(0)
                }}>reset</button>
                <button className='text-4xl text-white bg-green-950 py-2 px-4 rounded-md' onClick={() =>{
                setNumber(number - 1)
            }}>decrease</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Counter