// React
import React from 'react';

// Styles
import styles from './style.module.scss';

// Assets
import dummyImage from '../../images/dummy_image.jpg';

interface MoviePosterProps {
    /**
     * The URL of the movie poster image.
     * This URL will be used to fetch and display the movie poster.
     * 
     * @type {string}
     * @required
     */
    posterUrl: string;

    /**
     * The title of the movie, used for the alt text of the image.
     * 
     * @type {string}
     * @required
     */
    title: string;
}

// MoviePoster component
const MoviePoster: React.FC<MoviePosterProps> = ({ posterUrl, title }) => {
    return (
        <div className={styles["movie-poster"]}>
            <img
                src={posterUrl && posterUrl.startsWith('http') ? posterUrl : dummyImage}
                alt={title}
            />
        </div>
    );
};

export default MoviePoster;
