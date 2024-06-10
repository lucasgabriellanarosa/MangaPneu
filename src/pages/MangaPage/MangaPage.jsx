import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import './mangaPage.css';
import { Link } from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5";
import axios from 'axios';

const MangaPage = () => {
  const [volumeChaptersData, setVolumeChaptersData] = useState({})
  const [mangaData, setMangaData] = useState([])
  let { mangaTitle } = useParams();
  let { mangaID } = useParams();


  const fetchVolumesChaptersData = (languageSelected) => {
    fetch(`https://corsproxy.io/?https://api.mangadex.dev/manga/${mangaID}/aggregate?translatedLanguage%5B%5D=${languageSelected}`)
      .then(response => response.json())
      .then(data => {
        setVolumeChaptersData(data.volumes)
      })
  }



  useEffect(() => {

    axios.get(`https://corsproxy.io/?https://api.mangadex.org/manga/${mangaID}?includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author`).then((res) => setMangaData(res.data.data))

    fetchVolumesChaptersData("pt-br")

  }, [])


  return (
    <div className='mangaDataContainer'>
      {
        mangaData.relationships && mangaData.relationships.length > 0 ?
          <>

            <header className='mangaDataHeaderContainer'>

              <div
                className='backgroundImage'
                style={{
                  backgroundImage: `url("https://uploads.mangadex.org/covers/${mangaData.id}/${mangaData.relationships.find(rel => rel.type === "cover_art").attributes.fileName}")`,
                }} />

              <div className='mangaDataHeader'>
                <Link to={`/MangaPneu/`} className='backBtn'>
                  <IoChevronBack />
                </Link>
                <h1 className='mangaDataTitle'>{mangaTitle}</h1>
                <img className='mangaDataCoverImg' src={`https://uploads.mangadex.org/covers/${mangaData.id}/${mangaData.relationships.find(rel => rel.type === "cover_art").attributes.fileName}`} />
              </div>

            </header>

            <div className='mangaDetails'>
              <ul className='tagListContainer'>
                {mangaData.attributes.tags.map((tag, index) => (
                  <li key={index}>{tag.attributes.name.en || "No tag."}</li>
                ))}
              </ul>

              <p className='mangaDescription'>{mangaData.attributes.description.en || "No description available."}</p>
            </div>
          </>

          :
          <h1>No data available.</h1>
      }

      <main className='mainContent'>

        <select onChange={e => fetchVolumesChaptersData(e.target.value)} className='maxWidth-300'>
          <option value="pt-br">Português</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </select>
        <div className='volumesGridContainer'>
          {Object.values(volumeChaptersData).map((volumeData, index) => (
            <div key={index} className='volumeContainer'>
              <ul className='chaptersContainer'>
                <h3>Volume N°: {volumeData.volume}</h3>
                {Object.values(volumeData.chapters).map((chaptersData, index) => (
                  <li key={index}>
                    <Link className='chapterListItem' to={`/MangaPneu/${mangaTitle}/${mangaID}/${chaptersData.id}`}>Chapter N°: {chaptersData.chapter}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </main>

    </div >
  )
}

export default MangaPage