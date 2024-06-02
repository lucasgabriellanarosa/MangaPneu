import { useState } from 'react'
import { Link } from 'react-router-dom';
import './home.css'

function Home() {
  const [mangaList, setMangaList] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const fetchMangaList = () => {
    fetch(`https://corsproxy.io/?https://api.mangadex.dev/manga?limit=15&title=${searchQuery}`)
    .then(res => res.json())
    .then(data => setMangaList(data.data))
  }

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value)
    fetchMangaList()
  }
  return(
    <div className='appContainer'>
      <input type="text" 
      value={searchQuery}
      onChange={handleSearchQuery}
      placeholder='Search for a manga...'
      className='inputSearchManga maxWidth-300'
      />
      <ul className='listContainer'>
        {Object.values(mangaList).map((manga, index) => (
          <li key={index}>
            { 
              manga.attributes.title.ja ?
                <Link className='listItem' key={index} to={`/MangaPneu/${manga.attributes.title.ja}/${manga.id}`}>{manga.attributes.title.ja} - {manga.attributes.year}</Link> 
                : 
                <Link className='listItem' key={index} to={`/MangaPneu/${manga.attributes.title.en}/${manga.id}`}>{manga.attributes.title.en} - {manga.attributes.year}</Link> 
            }
            {
              manga.attributes.description.en ? 
                <p>{manga.attributes.description.en}</p>
                :
                <p>No description available.</p>
            }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
