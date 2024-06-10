import { useState } from 'react'
import './home.css'
import { ListItem } from '../../components/ListItem/ListItem';
import LogoTitleImage from '../../assets/logoTitle.png'
import Pedro from '../../assets/pedro.jpeg'
import { IoIosSearch } from "react-icons/io";

function Home() {
  const [mangaList, setMangaList] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const debounce = (func, delay) => {
    let timeoutId;
    return function () {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(func, delay)
    }
  }

  const fetchMangaList = () => {
    fetch(`https://corsproxy.io/?https://api.mangadex.dev/manga?limit=15&title=${searchQuery}&includes[]=author&includes[]=cover_art`)
      .then(res => res.json())
      .then(data => setMangaList(data.data))
  }

  const debouncedFetchMangaList = debounce(fetchMangaList, 2000)

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value)
    debouncedFetchMangaList()
  }

  return (
    <div className='appContainer'>

      <header className='appHeaderContainer'>

        <img className='appTitleImg' src={LogoTitleImage} />

        <nav className='navContainer'>
          
          <input type="text"
            value={searchQuery}
            onChange={handleSearchQuery}
            className='inputSearchManga'
          />
          <IoIosSearch />

        </nav>
      </header>

      <ul className='listContainer' style={searchQuery === "Pedro" ? {backgroundImage: `url(${Pedro})`, backgroundSize: `cover`, backgroundPosition: "center"} : {backgroundColor: `#111111`} }>
        {Object.values(mangaList).map((manga, index) => (
          <ListItem manga={manga} key={index} />
        ))}

      </ul>

    </div>
  )
}

export default Home
