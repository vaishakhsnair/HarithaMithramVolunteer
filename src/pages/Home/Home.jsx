import { supabase } from '../../components/supabaseClient'
import { useState, useEffect } from 'react'
import UserProfile from '../User/UserProfile';
import NewUser from '../User/NewUser';

import '../../components/background.css'



export default function Home() {
    const isLoggedIn = true;
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
  
      return () => subscription.unsubscribe()
    }, [])

    

    const bg_with_circles = (
      <div className='min-w-screen min-h-screen z-2 '>
        <div className='relative top-[-50vw] -left-[70vw] w-[140vw] h-[140vw] bg-[#EAFED6] rounded-full z-0'></div>
        <div className='relative top-[-10vw] right-0 w-[100vw] h-[100vw] bg-[#FEE5FD] rounded-full z-0'></div>
      </div>
    )


    const menuButton = (name,icon,redirectTo) => (
      <div className='min-w-11 min-h-11 border-2 border-[#337C54]'>

      </div>
    )

    

    return (
        <div className='relative min-w-screen min-h-screen max-h-screen flex-col '>
           <div className='absolute w-full h-screen border-2 border-green-400 '>
              <div className='relative'>
                <div className='bg-circle-dsg'></div>
                <div className='bg-circle-dsg'></div>
                <div className='bg-circle-dsg'></div>
                <div className='bg-circle-dsg'></div>
              </div>
           </div>
          <div className='relative w-full h-full'>
            <img src='/kswmp.png' className='relative w-screen  z-10'></img>
          </div>        
        </div>

    )
}
