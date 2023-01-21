import { useCallback, useEffect, useRef, useState } from 'react';
import { useGetAllMovies } from '../../hooks/TMDB';
import { IMovie } from '../../interfaces/interfaces';
import { Card } from '../Cards/Card';
import { AfterGallery, ResponsiveGallery } from './Gallery.styles';

export const Gallery = () => {
    const [page, setPage] = useState(1);
    const { loading, error, list } = useGetAllMovies(page);
    const loader = useRef(null);

    //logica del observado
    const handleObserver = useCallback((entries: any) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    // observamos si no está cargando
    useEffect(() => {
        if (!loading) {
            const option = {
                root: null,
                rootMargin: "20px",
                threshold: 0
            };
            const observer = new IntersectionObserver(handleObserver, option);
            if (loader.current) observer.observe(loader.current);
        }
    }, [handleObserver, loading]);

    if (error) return <p>Error!</p>
    return (
        <div>
            {loading && <p>Loading...</p>}
            <ResponsiveGallery>
                { list.map((row: IMovie) => {
                    return <Card key={row.id} movie={row} />
                })}               
            </ResponsiveGallery>
            <AfterGallery />
            {!loading && <div ref={loader} />}  
        </div>
    );  
}