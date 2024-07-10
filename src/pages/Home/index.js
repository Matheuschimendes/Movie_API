import { Container , MovieList, Movie} from "./styles"
import { useState, useEffect } from 'react' 
import { API_key } from "../../config/key"
import { Link } from "react-router-dom"



function Home() {
     
    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() =>{
         //consumir a API.. 

         fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a4015914e1e3147bb87e4fb8c8bdb48c&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data =>{
                //console.log(data.results)
                setMovies(data.results)
            })    
            
    }, []  )//array de dependencias
  
    return (
        <Container>
            <h1> Movies </h1>
            
                <MovieList>
                    {
                        movies.map(movie => {
                            return (
                                <Movie key={movie.id}>

                                    <Link to={`/Details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                                     
                                     <span>{movie.title}</span>
                                </Movie>
                            )
                        })
                    }
                  
                </MovieList>
        </Container>
       
    )

}   

export default Home;