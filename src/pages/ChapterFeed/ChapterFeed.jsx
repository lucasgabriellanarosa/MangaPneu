import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";


const ChapterFeed = () => {
    // const [chapterPages, setChapterPages] = useState([])
    // let {chapterID} = useParams()

    // useEffect(() => {
    //     const fetchChapterPageURLs = async () => {
    //         const response = await axios.get(`https://corsproxy.io/?https://api.mangadex.dev/at-home/server/${chapterID}`);

    //         const {
    //             baseURL,
    //             chapter: {hash, data}
    //         } = response.data
            
    //         const pages = data;

    //         const pageURLs = pages.map((page) => `${baseURL}/data/${hash}/${page}`)
    //         return pageURLs
    //     }

    //     const fetchPages = async () => {
    //         const pageURLs = await fetchChapterPageURLs();
    //         setChapterPages(pageURLs);
    //     }

        

    // }, [])


    // return (
    //     <div>
    //         <h1>Helo</h1>
    //         {chapterPages.map((chapterPage, index) => {
    //                 <h1>hello</h1>
    //                 {/* <img key={index} src={chapterPage} /> */}
    //         })}
    //     </div>
    // )

    const [mangaData, setMangaData] = useState({})
    const [mangaHash, setMangaHash] = useState()
    const [mangaBaseURL, setMangaBaseURL] = useState()

    let {chapterID} = useParams()

    const baseURL = `https://uploads.mangadex.dev/data/${mangaHash}/`

    useEffect(() => {
        fetch(`https://corsproxy.io/?https://api.mangadex.dev/at-home/server/${chapterID}`)
        .then(response => response.json())
        .then(data => {
            setMangaData(data.chapter.data)
            setMangaHash(data.chapter.hash)
            setMangaBaseURL(data.baseUrl)
    })
    },[])   

console.log(mangaData)
console.log(mangaHash)
console.log(mangaBaseURL)


    return (
        <div>
            {Object.values(mangaData).map((feedIMG, index) => (                
                <img key={index} src={mangaBaseURL + `/data/` + mangaHash + `/` + feedIMG} />
            ))}
        </div>
    )
}

export default ChapterFeed