import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { supabase } from './components/supabaseClient'
import './App.css';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import QrScanner from './pages/QrScanner/QrScanner';
import CreatePost from './pages/Posts/CreatePost';
import UserProfile from './pages/User/Profile/UserProfile';
import Magic from './pages/Tipsandtricks/Magic';

function checkExistingUser(user) {
  supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .then(({ data, error }) => {
      if (error) {
        console.log(error)
      } else {
        if (data.length === 0) {
          supabase
            .from('users')
            .insert([
              {
                id: user.id,
                setup_check : false
              },
            ])
            .then(({ data, error }) => {
              if (error) {
                console.log(error)

              } else {
                console.log(data)
                console.log("Added Inital User Data")
              }
            })
        }
      }
    })
}

function App() {
  const [session, setSession] = useState(null)

 
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (session) {
        checkExistingUser(session.user)
      }
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])




  return (
    <Router>
    <Routes>
      <Route path="/" element={session ? <Home />: <Login />} />
      <Route path="/qrscan" element={session ? <QrScanner />: <Login />} />
      <Route path="/posts" element={session? <CreatePost /> : <Login />} />
      <Route path="/profile" element={session? <UserProfile /> : <Login />} />
      <Route path="/tips" element={session? <Magic /> : <Login /> } />
    </Routes>
  </Router>
  );
}

export default App;
