import { useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
  const [mangaList, setMangaList] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const fetchMangaList = () => {
    fetch(`https://corsproxy.io/?https://api.mangadex.dev/manga?limit=10&title=${searchQuery}`)
    .then(res => res.json())
    .then(data => setMangaList(data.data))
  }

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value)
    fetchMangaList()
  }

  console.log(mangaList)

  return(
    <div>
      <input type="text" 
      value={searchQuery}
      onChange={handleSearchQuery}
      />
      <ul>
        {Object.values(mangaList).map((manga, index) => (
          <li>
            <Link key={index} to={`/MangaPneu/manga/${manga.id}`}>{manga.attributes.title.en}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
