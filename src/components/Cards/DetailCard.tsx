import { IMovie } from '../../interfaces/interfaces';
import { MovieDetail } from './Card.styles';

export const DetailCard = (props: {movie: IMovie | undefined}) => {
    if (!props.movie) return <pre>Entity not found</pre> 
    return (
        <MovieDetail>
            <section className="movieNavigationSection">
                <img className="movieNavigationImage" src={`https://image.tmdb.org/t/p/w500/${props.movie?.poster_path}`} alt={props.movie?.poster_path} />  
                <p>Release date : {props.movie?.release_date}</p>
                <h5>Genres</h5>
                <ul className="noBullets">
                    {props.movie?.genres?.map((genr) => {return <li key={genr.id}>{genr.name}</li>})}
                </ul>
            </section>
            <footer className="movieNavigationFooter">
                <header className="movieNavigationHeader">
                    <h2>{props.movie?.title}</h2>
                </header>
                <h5>Cast</h5>
                <ul className="creditsList">
                    {props.movie?.credits?.map((cast) => {
                        return (
                            <li key={cast.id}>
                                { cast.profile_path && <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt="Avatar" className="avatar" />}
                                <p>{cast.name}</p>
                            </li>)
                        })
                    }
                </ul>
            </footer>
        </MovieDetail>
    );
}