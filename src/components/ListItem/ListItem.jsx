import { Link } from 'react-router-dom';
import React from 'react'
import './ListItem.css'

export const ListItem = ({manga}) => {

    return (
        <li className='itemContainer'>
            <img className='mangaCoverImg' src={`https://uploads.mangadex.org/covers/${manga.id}/${(manga.relationships.find(rel => rel.type === "cover_art")).attributes.fileName}`} />

            <div className='listItem'>
                <Link className='listItemLink' to={`/MangaPneu/${manga.attributes.title.en || manga.attributes.title.ja}/${manga.id}`}>
                    {manga.attributes.title.en || manga.attributes.title.ja}
                </Link>
                
                <small className='listItemAuthor'>
                    {
                        // Check if there's an author and if the author has a name attribute defined
                        manga.relationships.find(rel => rel.type === "author") && manga.relationships.find(rel => rel.type === "author").attributes.name ? 
                            manga.relationships.find(rel => rel.type === "author").attributes.name 
                            : 'No author found'
                    }
                </small>
            </div>

        </li>
    )
}
