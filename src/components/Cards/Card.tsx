import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { IMovie } from '../../interfaces/interfaces';
import { MovieNavigation } from './Card.styles';

export const Card = (props: {movie: IMovie}) => {
    const navigate = useNavigate();
    const hanldeOnclick = useCallback((event: any) => {
        navigate(`/movies/${props.movie.id}`);
    }, [props.movie.id, navigate])  
    return (
        <MovieNavigation key={props.movie.id} >
            <header className="movieNavigationHeader">
                <h2>{props.movie.title}</h2>
            </header>
            <img className="movieNavigationImage" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.poster_path} onClick={hanldeOnclick} />
            <footer className="movieNavigationFooter">
                <p>Release Date: {props.movie.release_date}</p>
            </footer>
        </MovieNavigation>
    );
}