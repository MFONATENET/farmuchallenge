export interface IMovie {
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
    genres: ICatalog[];
    credits?: IMovieCredit[];
}

export interface ICatalog {
    id: number;
    name: string;
}

export interface IMovieCredit {
    id: number;
    name: string;
}
