import React from 'react';
import styles from './style.module.scss';
import dummyImage from '../../images/dummy_image.jpg';

interface MoviePosterProps {
    posterUrl: string;
    title: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ posterUrl, title }) => {
    return (
        <div className={styles["movie-poster"]}>
            <img
                src={posterUrl && posterUrl.startsWith('http') ?
                    posterUrl :
                    dummyImage
                }
                alt={title}
            />
        </div>
    );
};

export default MoviePoster;
