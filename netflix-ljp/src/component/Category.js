import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'; 
import { searchAction } from '../redux/action/searchAction';
const Category = () => {
    const { genreList } = useSelector((state) => state.search); 
    const { selectedGenre } = useSelector((state) => state.search.filters); 
    const dispatch = useDispatch();
    const handleOnClickGenre = (genre) => {
        console.log('genre', genre);
        dispatch(searchAction.getList(genre));
    }
  return (
    <div className='dropdown-box'>
        <div className='dropdown-name-area'>
            <span className='side-names'>Genres</span>
        </div>
        <ul className='category-area'>
        {genreList?.map((item) => (
            <li key={item.id}>
                <Button className={item.id === selectedGenre ? 'genre-btns selected-genre-btns' : 'genre-btns'} variant='' onClick={()=>handleOnClickGenre(item.id)}>
                    {item.name}
                </Button>
                
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Category