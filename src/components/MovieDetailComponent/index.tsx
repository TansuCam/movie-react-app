// React
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { clearMovieDetails, setMovieDetails } from '../../redux/movieSlice';
import { fetchMovieDetails } from '../../services/movieAPI';

// Components
import MoviePoster from '../../components/MoviePoster';
import MovieInfo from '../../components/MovieInfo';
import { NotFoundMovieDetail } from '../NotFound';

// Styles
import styles from './style.module.scss';

// Utilities
import { Spin } from 'antd';
import { debounce } from 'lodash';

// MovieDetailComponent
const MovieDetailComponent: React.FC = () => {
    // Fetching IMDb ID from URL parameters
    const { imdbID } = useParams<{ imdbID: string }>();

    const [hasResponse, setHasResponse] = useState<boolean | null>(null)

    // Redux dispatch hook
    const dispatch = useDispatch();

    // Local state to handle loading state
    const [isLoadingDetail, setIsLoadingDetail] = useState<boolean>(true);

    // Accessing movie details from Redux store
    const { movieDetails } = useSelector((state: any) => state.movie);

    /**
     * Fetches the movie data based on the IMDb ID and updates the Redux store.
     * It also manages the loading state.
     * 
     * @async
     * @function fetchMovieData
     * @returns {Promise<void>}
     */
    const fetchMovieData = useCallback(async () => {
        if (!imdbID) return;

        try {
            setIsLoadingDetail(true);
            const movieDetail = await fetchMovieDetails(imdbID);
            setHasResponse(movieDetail?.Response === 'True')
            dispatch(setMovieDetails(movieDetail));
            setIsLoadingDetail(false);
        } catch (error) {
            setIsLoadingDetail(false);
            console.error("Error fetching movie details:", error);
        }
    }, [imdbID, dispatch]);

    // Debounced function to limit the number of API calls
    const debouncedFetch = useCallback(debounce(fetchMovieData, 500), [fetchMovieData]);

    useEffect(() => {
        dispatch(clearMovieDetails());
        debouncedFetch();
        return () => debouncedFetch.cancel();
    }, [imdbID, debouncedFetch, dispatch]);

    return (
        <Spin spinning={isLoadingDetail}>
            {hasResponse !== null &&
                <>
                    {!hasResponse ?
                        <NotFoundMovieDetail />
                        :
                        <div className={styles["movie-detail-container"]}>
                            <MoviePoster posterUrl={movieDetails?.Poster} title={movieDetails?.Title} />
                            <MovieInfo movieDetail={movieDetails} />
                        </div>
                    }
                </>
            }
        </Spin>
    );
};

export default MovieDetailComponent;
