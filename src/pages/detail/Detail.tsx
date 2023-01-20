import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetMovie } from '../../hooks/TMDB';

export const Detail = () => {  
    const params = useParams();
    const movieID = params.movieID;
    const { loading, error, detail } = useGetMovie(Number(movieID));
    const navigate = useNavigate();
    const hanldeOnclick = useCallback((event: any) => {
        navigate("/");
    }, [navigate])  
    if (error) return <p>Error!</p>
    if (loading) return <p>Loading...</p>
    return (
        <div>
            <button onClick={hanldeOnclick}> BACK </button>
            <header>
                <h2>{detail?.title}</h2>
            </header>
            <section>
                <img src={`https://image.tmdb.org/t/p/w500/${detail?.poster_path}`} alt={detail?.poster_path} />
                <h5>Genres</h5>
                <ul>
                    {detail?.genres?.map((genr) => {return <li>{genr.name}</li>})}
                </ul>
            </section>
            <footer>
                <h5>Release date</h5>
                <p>{detail?.release_date}</p>
                <h5>Cast</h5>
                <ul>
                    {detail?.credits?.map((cast) => {return <li>{cast.name}</li>})}
                </ul>
            </footer>
        </div>
    );
}