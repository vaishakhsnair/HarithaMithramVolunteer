import React from 'react'
import '../../styles/styles.css'
const LangaugeSelect = () => {
    const Lang = [
        {   title: 'English',symbol:'En', key: 'en', img: '/' },
        {   title: 'മലയാളം',symbol: 'മ', key: 'mal', img: '/' },
        {   title: 'हिंदी', symbol: 'हिं' ,key: 'hindi', img: '/' },
    ]
    const langSubmit= ()=>{
        console.log("Language selected")
    }
  return (
    <form className='w-screen h-screen bg-[#96F835]/[.1] flex flex-col items-center justify-center bg-lang-sc p-4' method='GET'>
        <h1 className='text-3xl font-bold text-purple-950 z-50'>
            Choose
            <br></br>
             Language</h1>
        <div className='circle-designs w-full h-full absolute z-10 overflow-hidden'>
            <div className='lng-dsg-cirle'></div>
            <div className='lng-dsg-cirle'></div>
            <div className='lng-dsg-cirle'></div>
            <div className='lng-dsg-cirle'></div>
        </div>
        <div className='wrapper flex-wrap w-5/6 items-center justify-center mt-10 mb-10 flex h-auto p-2 gap-4 z-20'>
            {Lang.map((lang) => {
                return (
                    <button type='button' className='border-2 border-green-600/[.2] w-28 h-28  rounded-lg font-semibold lg:text-2xl text-lg
                            hover:bg-green-600/[.2] hover:text-white
                    ' key={lang.key}>
                        <div className='flex flex-col font-bold'>
                            <span className='text-4xl'>{lang.symbol}</span>
                            <span className='font-light'>{lang.title}</span>
                        </div>
                    </button>
                );
            })}
        </div>
        <button type='submit' className='bg-[#276B88]/[.87] px-10 py-4 text-white rounded-lg hover:cursor-pointer z-20 ' onClick={langSubmit}>
            <span>Submit</span>
        </button>
    </form>
  )
}

export default LangaugeSelect