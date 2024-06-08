import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './ReadManga.css'

const ReadManga = () => {
    const [mangaData, setMangaData] = useState({})
    const [mangaHash, setMangaHash] = useState()
    const [mangaBaseURL, setMangaBaseURL] = useState()

    let {chapterID} = useParams()


    useEffect(() => {
        fetch(`https://corsproxy.io/?https://api.mangadex.dev/at-home/server/${chapterID}`)
        .then(response => response.json())
        .then(data => {
            setMangaData(data.chapter.data)
            setMangaHash(data.chapter.hash)
            setMangaBaseURL(data.baseUrl)
    })
    },[])   

    return (
        <div className='chapterFeedContainer'>
            {Object.values(mangaData).map((feedIMG, index) => (                
                <img key={index} src={mangaBaseURL + `/data/` + mangaHash + `/` + feedIMG} />
            ))}
        </div>
    )
}

export default ReadManga