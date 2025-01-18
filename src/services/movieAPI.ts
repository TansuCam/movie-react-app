import axios from 'axios';

/**
 * API key for authentication.
 * @type {string}
 */
const API_KEY = process.env.API_KEY as string;

/**
 * Base URL for the API.
 * @type {string}
 */
const BASE_URL = process.env.API_BASE_URL as string;

/**
 * Fetches a list of movies based on search criteria.
 *
 * @param {string} search - The search query for the movie title.
 * @param {string} year - The release year of the movie.
 * @param {string} type - The type of content (e.g., "movie", "series", "episode").
 * @param {number} page - The page number for pagination.
 * @returns {Promise<Object>} A promise that resolves to the API response data.
 * @throws {Error} If the API request fails.
 */
export const fetchMovies = async (search: string, year: string, type: string, page: number) => {
    const response = await axios.get(BASE_URL, {
        params: {
            s: search,
            y: year,
            type: type,
            page: page,
            apikey: API_KEY
        }
    });

    return response.data;
};

/**
 * Fetches detailed information about a specific movie by its IMDb ID.
 *
 * @param {string} imdbID - The IMDb ID of the movie.
 * @returns {Promise<Object>} A promise that resolves to the API response data.
 * @throws {Error} If the API request fails.
 */
export const fetchMovieDetails = async (imdbID: string) => {
    const response = await axios.get(BASE_URL, {
        params: {
            i: imdbID,
            apikey: API_KEY
        }
    });

    return response.data;
};
