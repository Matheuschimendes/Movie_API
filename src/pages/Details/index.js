import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { APIKey } from "../../config/key"
import { Container } from "./styles"


function Details () {
    const {id} = useParams()


    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() =>{
        //consumir a API.. 

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a4015914e1e3147bb87e4fb8c8bdb48c&language=pt-BR&page=1`)
           .then(response => response.json())
           .then(data =>{

            const { title, poster_path, overview, release_date} = data

            const movie = { 
                id, 
                title,
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                releaseDate: release_date
            }

            setMovie(movie)
             console.log(movie)
              // setMovies(data.results)
           })    
           
   }, [id]  )//array de dependencias




    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse}/>
                    <div className="details">
                        <h1>{movie.title}</h1>
                        <span>Sinopse: {movie.sinopse}</span>
                        <span className="release-date">Release date: {movie.releaseDate}</span>
                            <Link to="/"><button>Go back</button></Link>
                  
                    </div>
            </div>
        </Container>
    )    

}

export default Details