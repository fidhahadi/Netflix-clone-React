import React, {useEffect, useState} from 'react'
import "./RowPost.css";
import axios from '../../axios';
import { API_KEY,imgUrl } from '../../constants/constants';

function RowPost() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
        console.log(response.data);
        setMovies(response.data.results)
      })
    }, [])
    

  return (
    <div className='row'>
        <h2>Netflix Originals</h2>
        <div className="posters">
            {
                movies.map((obj) =>
                <img className='poster' src={`${imgUrl+obj.backdrop_path}`} alt="poster" />
                )
                
            }
        </div>
    </div>
  )
}

export default RowPost