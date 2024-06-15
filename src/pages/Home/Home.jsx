import { useState } from 'react'
import './home.css'
import { ListItem } from '../../components/ListItem/ListItem';
import LogoTitleImage from '../../assets/logoTitle.png'
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';

function Home() {
  const [mangaList, setMangaList] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const fetchMangaList = (e) => {
    e.preventDefault()
    setMangaList([])
    axios.get(`https://corsproxy.io/?https://api.mangadex.dev/manga?limit=15&title=${searchQuery}&includes[]=author&includes[]=cover_art`)
    .then((res) => setMangaList(res.data.data))
  }

  return (
    <div className='appContainer'>

      <header className='appHeaderContainer'>

        <img className='appTitleImg' src={LogoTitleImage} />

        <form className='navContainer'
          onSubmit={(e) => fetchMangaList(e)}
        >
          
          <input type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='inputSearchManga'
          />

          <IoIosSearch />

        </form>
      </header>

      <ul className='listContainer'>
        {Object.values(mangaList).map((manga, index) => (
          <ListItem manga={manga} key={index} />
        ))}

      </ul>

    </div>
  )
}

export default Home
