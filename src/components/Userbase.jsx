import React from 'react'
import { AiOutlineArrowLeft, AiOutlineDoubleRight } from 'react-icons/ai'

const Userbase = ({data,UserCard}) => {
  return (
    <div className='w-full h-screen bg-white absolute'>
                    <section className='relative w-full h-full'>
                    <div className='w-full p-3 max-h-48 h-12 flex gap-12 mt-12 justify-start items-center'>
                    <button type='button' className='border-2 border-white rounded-xl p-4' onClick={()=>{(console.log('hellow wokr'))}}>
                        <AiOutlineArrowLeft className='w-12 h-12' />
        
                    </button>
                    <span className='font-semibold text-[#005C2]/[.95] text-4xl'>
                        Regions
                    </span>
                    </div>
                     <div className='flex flex-col items-center gap-2 justify-center mt-8'>
                        <UserCard user={data}/>
                     </div>
                     <div className='absolute position-proceed rounded-full flex items-center justify-center overflow-hidden
                     z-30'>
                        <button type='button' 
                            className='btn-proceed-animtn rounded-full bg-[#8a18e7] hover:bg-[#0a8b87]  text-white p-2 flex items-center justify-center  w-14 h-14 '
                            >
                                <AiOutlineDoubleRight className='w-14 h-14' />
                        </button>
                     </div>
                    </section>
                </div>
  )
}

export default Userbase