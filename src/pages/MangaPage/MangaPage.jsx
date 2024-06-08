import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import './mangaPage.css';
import { Link } from 'react-router-dom';

const MangaPage = () => {
    const [mangaData, setMangaData] = useState({})
    let {mangaTitle} = useParams();
    let {mangaID} = useParams();


    const fetchData = (languageSelected) => {
      fetch(`https://corsproxy.io/?https://api.mangadex.dev/manga/${mangaID}/aggregate?translatedLanguage%5B%5D=${languageSelected}`)
      .then(response => response.json())
      .then(data => {
        setMangaData(data.volumes)
    })
    }

    useEffect(() => {
      fetchData("pt-br")
    }, [])
    
    console.log(mangaData)

    const baseURL = `https://mangadex.org/chapter/`

    return (
      <ul className='appContainer'>
        <h1>{mangaTitle}</h1>

        <select onChange={e => fetchData(e.target.value)} className='maxWidth-300'>
          <option value="pt-br">Português</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </select>
        
        {Object.values(mangaData).map((volumeData, index) => (
          <div key={index} className='volumeContainer'>
            <h3>Volume N°: {volumeData.volume}</h3>
            <ul className='chaptersContainer'>
              {Object.values(volumeData.chapters).map((chaptersData, index) => (
                <li key={index}>
                  <Link className='listItem' to={`/MangaPneu/chapter/${chaptersData.id}`}>Chapter N°: {chaptersData.chapter}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    )
}

export default MangaPage