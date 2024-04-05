import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { FcGoogle } from "react-icons/fc";
import './login.css'

const supabase = createClient(
    "https://uauainidbpansqtbflwz.supabase.com",
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhdWFpbmlkYnBhbnNxdGJmbHd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMDc0MDYsImV4cCI6MjAyNzg4MzQwNn0.zKvZkMNYYV45TLFeD4QcjiQlXjWHXvv2jOVESBIWk5E'
)


export default function Login() {
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


    const googleLogin = async () => {
        const { user, session, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
        console.log(user, session, error)
    }

    return (
        <div
            className='flex flex-col items-center justify-center min-w-screen min-h-screen 
                        bg-image bg-no-repeat bg-cover 
                        bg-center border-2 text-center'>
            <div className='flex items-center justify-center 
                        min-w-[90vw] rounded-xl min-h-20 bg-[#E3F4E1] gap-10 text-center
                        text-xl cursor-pointer  '
                onClick={googleLogin}>
                <FcGoogle size={45} color='white' className='m-2' /> Login With Google
            </div>

            <div className='flex items-center justify-center text-2xl text-white'>
                or
            </div>

            <div className='flex items-center justify-center
                        min-w-[90vw] rounded-xl min-h-14 bg-[#1472FE] gap-10 text-center
                        text-lg text-white absolute bottom-20 font-bold' >
                LOGIN WITH EMAIL
            </div>
        </div>
    )
}