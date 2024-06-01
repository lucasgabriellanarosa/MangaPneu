import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import MangaPage from './pages/MangaPage/MangaPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/MangaPneu/' element={<Home />} />
        <Route path='/MangaPneu/:mangaID' element={<MangaPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
