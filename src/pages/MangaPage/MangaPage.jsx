import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import './mangaPage.css';

const MangaPage = () => {
    const [mangaData, setMangaData] = useState({})
    const [chapterTitle, setChapterTitle] = useState("")
    let {mangaTitle} = useParams();
    let {mangaID} = useParams();
  
    useEffect(() => {
      fetch(`https://corsproxy.io/?https://api.mangadex.dev/manga/${mangaID}/aggregate?translatedLanguage%5B%5D=en`)
      .then(response => response.json())
      .then(data => {
        setMangaData(data.volumes)
      })
    }, [])
    const baseURL = `https://mangadex.org/chapter/`

    return (
      <ul className='appContainer'>
        <h1>{mangaTitle}</h1>
        {Object.values(mangaData).map((volumeData, index) => (
          <div key={index} className='volumeContainer'>
            <h3>Volume N°: {volumeData.volume}</h3>
            <ul className='chaptersContainer'>
              {Object.values(volumeData.chapters).map((chaptersData, index) => (
                <li key={index}>
                  <a className='listItem' target='_blank' href={baseURL + chaptersData.id}>Chapter N°: {chaptersData.chapter}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    )
}

export default MangaPage