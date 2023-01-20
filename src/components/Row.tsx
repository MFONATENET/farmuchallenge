import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { IMovie } from '../interfaces/interfaces';

export const Row = (props: {movie: IMovie}) => {
    const navigate = useNavigate();
    const hanldeOnclick = useCallback((event: any) => {
        navigate(`/movies/${props.movie.id}`);
    }, [props.movie.id, navigate])  
    return (
        <nav className="MovieNavigation" key={props.movie.id} onClick={hanldeOnclick}>
            <header>
                <h2>{props.movie.title}</h2>
            </header>
            <section>
                <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={props.movie.poster_path} />
            </section>
            <footer>
            <p>{props.movie.release_date}</p>
            </footer>
        </nav>
    );
}