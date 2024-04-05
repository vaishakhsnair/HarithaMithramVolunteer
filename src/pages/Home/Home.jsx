import { supabase } from '../../components/supabaseClient'
import { useState, useEffect } from 'react'
import UserProfile from '../User/UserProfile';
import NewUser from '../User/NewUser';


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
  
    return (
      <>
      {isLoggedIn? (
      <div>
        <NewUser  />
      </div>):(<>
        <div className='flex flex-col items-center justify-center min-w-screen min-h-screen 
                        bg-image bg-no-repeat bg-cover 
                        bg-center border-2 text-center'>
      <div className='flex items-center justify-center 
                        min-w-[90vw] rounded-xl min-h-20 bg-[#E3F4E1] gap-10 text-center
                        text-xl cursor-pointer  '>
                <button type='button' onClick={async ()=>{
                    const { error } = await supabase.auth.signOut();
                    console.log(error+"\nSign In")
                }} >LogOut</button>
      </div>
        </div>
      </>)}
      
      </>
      

    )
}
