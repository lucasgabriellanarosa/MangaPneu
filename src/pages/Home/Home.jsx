import { useState } from 'react'
import './home.css'
import { ListItem } from '../../components/ListItem/ListItem';
import LogoTitleImage from '../../assets/logoTitle.png'
import { IoIosSearch } from "react-icons/io";


function Home() {
  const [mangaList, setMangaList] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const fetchMangaList = () => {
    fetch(`https://corsproxy.io/?https://api.mangadex.dev/manga?limit=15&title=${searchQuery}&includes[]=author&includes[]=cover_art`)
    .then(res => res.json())
    .then(data => setMangaList(data.data))
  }

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value)
    fetchMangaList()
  }

  console.log(mangaList)
  return(
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

      <ul className='listContainer'>
        {Object.values(mangaList).map((manga, index) => (
          <ListItem manga={manga} key={index}/>
        ))}
      </ul>

    </div>
  )
}

export default Home
