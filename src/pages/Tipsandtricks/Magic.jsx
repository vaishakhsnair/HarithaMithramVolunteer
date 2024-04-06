import React from 'react'
import Navbar from '../../components/Navbar'

const Magic = () => {
  const Newsblock = ({title = 'adaf',desc='afkanf'}) =>{
    return (
      <div className='w-screen flex flex-col py-2 border-2 overflow-hidden border-green-300 items-center justify-center '>
        <div className='w-full h-48 object-fill rounded-tl-lg rounded-tr-lg overflow-hidden'>
            <img src="senset.webp" loading='lazy' alt="sunset" />
        </div>
        <div className='w-screen h-auto flex mt-2 ps-2 gap-6'>
          <div className='w-14 h-14 rounded-full'>
            <img src="user.png" className='w-full h-full object-contain' loading='lazy' alt="sunset" />
          </div>  
          <div className='max-w-5/6'>
            <div className=' max-w-5/6'>
              <p className='font-bold text-wrap max-w-4/6'>{title}</p>
              <p className='font-thin'>Stats</p>
              </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className='w-screen h-screen flex flex-col items-center justify-start p-4 '>
      <div>Magic</div>
      <div className='flex flex-col gap-2'>
        <Newsblock title='Tips & Tricks by Varun Haridas Presents Amazing tips' desc='Varun Haridas Presents Udaiypu tips' />
      </div>
      <Navbar />
    </section>
  )
}

export default Magic