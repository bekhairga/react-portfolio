import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Award from '../components/Award'
import {useHistory} from 'react-router-dom';
import {MovieState} from '../MovieState';

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie)=> stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url])
    return (
        <>
        {movie && (
        <Details>
            <Headline>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt={movie.title}/>
            </Headline>
            <Awards>
                {movie.awards.map((award) => (
                    <Award award={award} />
                ))}
            </Awards>
            <ImageDisplay>
                <img src={movie.secondaryImg} alt={movie.title}/>
            </ImageDisplay>
        </Details>
        )}
        </>
    )
}

const Details = styled.div`
    color: #ffffff;
`;
const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;


export default MovieDetail;
