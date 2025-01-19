// React
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Redux action
import { useDispatch, useSelector } from 'react-redux';
import { clearMovieDetails, setMovieDetails } from '../../redux/movieSlice';
import { fetchMovieDetails } from '../../services/movieAPI';

// Components
import MoviePoster from '../../components/MoviePoster';
import MovieInfo from '../../components/MovieInfo';

// Styles
import styles from './style.module.scss';
import { Spin } from 'antd';
import { debounce } from 'lodash';

const MovieDetailComponent = () => {
    const { imdbID } = useParams<{ imdbID: string }>();
    const dispatch = useDispatch();

    const [isLoadingDetail, setIsLoadingDetail] = useState<boolean>(true);

    const { movieDetails } = useSelector((state: any) => state.movie);

    const fetchMovieData = useCallback(async () => {
        if (!imdbID) return;
        try {
            setIsLoadingDetail(true);
            const movieDetail = await fetchMovieDetails(imdbID);
            dispatch(setMovieDetails(movieDetail));
            setIsLoadingDetail(false);

        } catch (error) {
            setIsLoadingDetail(false);

            console.error("Error fetching movie details:", error);
        }
    }, [imdbID, dispatch]);

    const debouncedFetch = useCallback(debounce(fetchMovieData, 500), [fetchMovieData]);

    useEffect(() => {
        dispatch(clearMovieDetails());
        debouncedFetch();
        return () => debouncedFetch.cancel();
    }, [imdbID, debouncedFetch]);

    return (
        <Spin spinning={isLoadingDetail}>
            <div className={styles["movie-detail-container"]}>
                <MoviePoster posterUrl={movieDetails?.Poster} title={movieDetails?.Title} />
                <MovieInfo movieDetail={movieDetails} />
            </div>
        </Spin>
    );
};


export default MovieDetailComponent;
