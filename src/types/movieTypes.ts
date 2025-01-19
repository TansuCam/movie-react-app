/**
 * TypeScript interfaces for movie-related data.
 */

/**
 * Interface representing a single movie.
 */
export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

/**
 * Interface representing detailed information about a movie.
 */
export interface MovieDetails {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: { Source: string; Value: string }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

/**
 * Interface representing the state structure for movies.
 */
export interface MovieState {
    movies: Movie[];
    movieDetails: MovieDetails;
    search: string;
    year: string;
    type: string;
    page: number;
    totalResults: number;
    isLoading: boolean;
    viewMode: 'grid' | 'table';
}
