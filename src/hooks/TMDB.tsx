import { useCallback, useEffect, useState } from 'react';
import { IMovie } from '../interfaces/interfaces';
import axios from 'axios';

const baseURL = "https://api.themoviedb.org/3";
// Si fuera un desarrollo de verdad ponemos la información sensible en una variable de entorno.
const api_key_url_param = "bce4b47142ed184077c8ea8739c2b515";

// TODO: esto se podría mejorar con algun http interceptor más la cache de axios u otras librerías como react-query
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bce4b47142ed184077c8ea8739c2b515
export const useGetAllMovies = (page: number) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState<IMovie[]>([]);

    const sendQuery = useCallback(async () => {
        try {
          setLoading(true);
          setError(false);
          const res = await axios.get(`${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${api_key_url_param}&page=${page}`);
          setList((prev) => [...prev, ...res.data.results]);
          setLoading(false);
        } catch (err) {
          setError(true);
        }
    }, [page]);
    
    useEffect(() => {
        sendQuery();
    }, [page, sendQuery]);
    
    return { loading, error, list };
}

// https://api.themoviedb.org/3/movie/550?api_key=bce4b47142ed184077c8ea8739c2b515
// https://api.themoviedb.org/3/movie/315162/credits?api_key=bce4b47142ed184077c8ea8739c2b515
export const useGetMovie = (id: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [detail, setDetail] = useState<IMovie>();

  const sendQuery = useCallback(async () => {
    let promises = [
      axios.get(`${baseURL}/movie/${id}?api_key=${api_key_url_param}`),
      axios.get(`${baseURL}/movie/${id}/credits?api_key=${api_key_url_param}`),
    ];
    try {
      setLoading(true);
      const [firstResponse, secondResponse] = await axios.all(promises);
      setDetail({...firstResponse.data, credits: [...secondResponse.data.cast]})
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  }, [id]);
    
  useEffect(() => {
    sendQuery();
  }, [id, sendQuery]);

  return { loading, error, detail };
}