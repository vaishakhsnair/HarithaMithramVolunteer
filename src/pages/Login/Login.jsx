import { useState, useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
import { supabase } from '../../components/supabaseClient'
import './login.css'
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';




export default function Login() {
    const [session, setSession] = useState(null)
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
        console.log('Login Page')
        console.log(session)
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
            redirectTo: window.location.origin
        })
        console.log(user, session, error)
    }

    async function signInWithEmail() {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password,
      })
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
                        text-lg text-white absolute bottom-20 font-bold cursor-pointer' 
                        onClick={() => {
                          setOpen(true)
                        
                        }} >
                LOGIN WITH EMAIL
            </div>

            <Dialog open={open} onClose={
              ()  => {
                setOpen(false)
              }
            }>
            <DialogTitle>Enter your username and password</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Username"
                type="text"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => {
                setOpen(false)
              }} color="primary">
                Cancel
              </Button>
              <Button onClick={signInWithEmail} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
    )

}