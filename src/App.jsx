import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import ChapterFeed from './pages/ChapterFeed/ChapterFeed';
import MangaPage from './pages/MangaPage/MangaPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/MangaPneu/' element={<Home />} />
        <Route path='/MangaPneu/manga/:mangaID' element={<MangaPage />}/>
        <Route path='/MangaPneu/chapter/:chapterID' element={<ChapterFeed />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
