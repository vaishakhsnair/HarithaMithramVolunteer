import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { supabase } from './components/supabaseClient'
import './App.css';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      console.log(session)
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
    </Routes>
  </Router>
  );
}

export default App;
