import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'


const ChapterFeed = () => {
    const [mangaData, setMangaData] = useState([])
    const [mangaHash, setMangaHash] = useState('')
    const [mangaBaseURL, setMangaBaseURL] = useState('')

    let {chapterID} = useParams()


    useEffect(() => {
        fetch(`https://corsproxy.io/?https://api.mangadex.dev/at-home/server/${chapterID}`)
        .then(response => response.json())
        .then(data => {
            setMangaData(data.chapter.data)
            setMangaHash(data.chapter.hash)
            setMangaBaseURL(data.baseUrl)
    })
    },[chapterID])   

    console.log(mangaData)
    console.log(mangaHash)
    console.log(mangaBaseURL)


    return (
        <div>
            {Object.values(mangaData).map((feedIMG, index) => (  
                <>
                    <img key={index} src={mangaBaseURL + `/data/` + mangaHash + `/` + feedIMG} />
                </>              
            ))}
        </div>
    )
}

export default ChapterFeed