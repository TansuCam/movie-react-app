import React from 'react';
import styles from './style.module.scss';
import { Typography } from 'antd';

interface MovieInfoProps {
    movieDetail: any;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movieDetail }) => {
    return (
        <div className={styles["movie-info"]}>
            <h1>{movieDetail?.Title}</h1>
            <Typography.Text><strong>Year:</strong> {movieDetail?.Year} </Typography.Text>
            <Typography.Text><strong>Released:</strong> {movieDetail?.Released} </Typography.Text>
            <Typography.Text><strong>Duration:</strong> {movieDetail?.Runtime} </Typography.Text>
            <Typography.Text><strong>Genre:</strong> {movieDetail?.Genre} </Typography.Text>
            <Typography.Text><strong>Director:</strong> {movieDetail?.Director} </Typography.Text>
            <Typography.Text><strong>Writer:</strong> {movieDetail?.Writer} </Typography.Text>
            <Typography.Text><strong>Actors:</strong> {movieDetail?.Actors} </Typography.Text>
            <Typography.Text><strong>IMDb Rating:</strong> {movieDetail?.imdbRating} </Typography.Text>
            <Typography.Text><strong>Country</strong> {movieDetail?.Country} </Typography.Text>
            <Typography.Text><strong>Awards</strong> {movieDetail?.Awards} </Typography.Text>
        </div>
    );
};

export default MovieInfo;
