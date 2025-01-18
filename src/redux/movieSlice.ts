import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MovieDetails, MovieState } from '../types/movieTypes';

/**
 * The initial state for the movie slice of the Redux store.
 * @type {MovieState}
 */
const initialState: MovieState = {
    movies: [],
    movieDetails: {} as MovieDetails,
    search: 'Pokemon',
    year: '',
    type: 'movie',
    page: 1,
    totalResults: 0
};

/**
 * Redux slice to manage movie-related state.
 * Contains actions for setting movies, movie details, search query, year, type, and page number.
 */
const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        /**
         * Sets the list of movies in the state.
         * @param {MovieState} state - The current state.
         * @param {PayloadAction<Movie[]>} action - The action containing the list of movies.
         */
        setMovies: (state, action: PayloadAction<Movie[]>) => {
            state.movies = action.payload;
        },

        /**
         * Sets the details of a single movie in the state.
         * @param {MovieState} state - The current state.
         * @param {PayloadAction<MovieDetails>} action - The action containing movie details.
         */
        setMovieDetails: (state, action: PayloadAction<MovieDetails>) => {
            state.movieDetails = action.payload;
        },

        /**
         * Sets the search query in the state.
         * @param {MovieState} state - The current state.
         * @param {PayloadAction<string>} action - The action containing the search string.
         */
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },

        /**
         * Sets the selected year for filtering movies in the state.
         * @param {MovieState} state - The current state.
         * @param {PayloadAction<string>} action - The action containing the year.
         */
        setYear: (state, action: PayloadAction<string>) => {
            state.year = action.payload;
        },

        /**
         * Sets the type of movie to filter (e.g., movie, series).
         * @param {MovieState} state - The current state.
         * @param {PayloadAction<string>} action - The action containing the type (e.g., 'movie', 'series').
         */
        setType: (state, action: PayloadAction<string>) => {
            state.type = action.payload;
        },

        /**
         * Sets the current page for pagination in the state.
         * @param {MovieState} state - The current state.
         * @param {PayloadAction<number>} action - The action containing the page number.
         */
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },

        /**
         * Sets the total number of results in the state.
         * This is typically used for pagination to track how many results are available
         * based on the current search, filters, and other parameters.
         * 
         * @param {MovieState} state - The current state.
         * @param {PayloadAction<number>} action - The action containing the total results count.
         */
        setTotalResults: (state, action: PayloadAction<number>) => {
            state.totalResults = action.payload;
        }

    }
});

// Export actions to be used in components or other parts of the app
export const { setMovies, setMovieDetails, setSearch, setYear, setType, setPage, setTotalResults } = movieSlice.actions;

// Default export of the reducer to be added to the store
export default movieSlice.reducer;
