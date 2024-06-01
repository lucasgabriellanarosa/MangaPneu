import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';

const MangaPage = () => {
    const [mangaData, setMangaData] = useState({})
    let {mangaID} = useParams();
  
    useEffect(() => {
      fetch(`https://corsproxy.io/?https://api.mangadex.dev/manga/${mangaID}/aggregate?translatedLanguage%5B%5D=pt-br`)
      .then(response => response.json())
      .then(data => setMangaData(data.volumes))
    }, [])

    const baseURL = `https://mangadex.org/chapter/` 

    return (
      <ul>
        {Object.values(mangaData).map((volumeData, index) => (
          <div key={index}>
            <li>Volume N°: {volumeData.volume}</li>
            <ul>
              {Object.values(volumeData.chapters).map((chaptersData, index) => (
                <li key={index}>
                  <a target='_blank' href={baseURL + chaptersData.id}>{chaptersData.chapter}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    )
}

export default MangaPage