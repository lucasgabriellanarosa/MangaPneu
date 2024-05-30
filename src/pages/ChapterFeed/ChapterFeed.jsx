import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'



const ChapterFeed = () => {

    const [mangaData, setMangaData] = useState({})
    const [mangaHash, setMangaHash] = useState()

    let {chapterID} = useParams()

    const baseURL = `https://uploads.mangadex.org/data/${mangaHash}/`

    useEffect(() => {
        fetch(`https://corsproxy.io/?https://api.mangadex.org/at-home/server/${chapterID}`)
        .then(response => response.json())
        .then(data => {
            setMangaData(data.chapter.data)
            setMangaHash(data.chapter.hash)
    })
    },[])


    return (
        <div>
            {Object.values(mangaData).map((feedIMG, index) => (
                <img key={index} src={baseURL + feedIMG} />
            ))}
        </div>
    )
}

export default ChapterFeed