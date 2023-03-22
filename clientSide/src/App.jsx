import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { Auth, Home, Form } from './components';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='/home' element={<Home />} />
      <Route path='/form' element={<Form/>} />
    </Routes>
  )
}

export default App