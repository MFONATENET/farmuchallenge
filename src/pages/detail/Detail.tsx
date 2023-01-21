import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DetailCard } from '../../components/Cards/DetailCard';
import { useGetMovie } from '../../hooks/TMDB';
import { BackToHome, DetailPage } from './Detail.styles';

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
        <DetailPage>
            <BackToHome onClick={hanldeOnclick}> Back to home </BackToHome>
            <DetailCard movie={detail} />
        </DetailPage>
    );
}