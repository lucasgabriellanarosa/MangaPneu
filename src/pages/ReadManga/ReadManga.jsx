import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './ReadManga.css'
import Carousel from '../../components/Carousel/Carousel';
import { Link } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';

const ReadManga = () => {
    const [mangaData, setMangaData] = useState({})
    const [mangaHash, setMangaHash] = useState()
    const [mangaBaseURL, setMangaBaseURL] = useState()
    
    let { mangaID} = useParams()
    let { mangaTitle} = useParams()
    let { chapterID } = useParams()


    useEffect(() => {
        fetch(`https://corsproxy.io/?https://api.mangadex.dev/at-home/server/${chapterID}`)
            .then(response => response.json())
            .then(data => {
                setMangaData(data.chapter.data)
                setMangaHash(data.chapter.hash)
                setMangaBaseURL(data.baseUrl)
            })
    }, [])

    const imageUrls = Object.values(mangaData).map(feedIMG => `${mangaBaseURL}/data/${mangaHash}/${feedIMG}`);
    return (
        <div className='readMangaContainer'>

            <Link to={`/MangaPneu/${mangaTitle}/${mangaID}`} className='backBtn'>
                <IoChevronBack />
            </Link>

            <Carousel images={imageUrls} />

        </div>
    )
}

export default ReadManga