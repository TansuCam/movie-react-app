// React
import React from 'react';

// Components
import { Card, Col, Empty, Row, Spin } from 'antd';

// Utilities
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Styles
import styles from './style.module.scss';

// Types
import { Movie } from '../../types/movieTypes';

// Dummy Image
import dummyImage from '../../images/dummy_image.jpg';

const { Meta } = Card;

// GridView component 
const GridView: React.FC = () => {
    // Redux state: Movies and loading status
    const { movies, isLoading } = useSelector((state: any) => state.movie);

    // React Router navigate hook
    const navigate = useNavigate();

    /**
     * Handles row click event to navigate to the movie's detailed page.
     * 
     * @function handleRowClick
     * @param {Movie} record - The movie record that was clicked.
     * @returns {void}
     */
    const handleRowClick = (record: Movie) => {
        navigate(`/movie/${record.imdbID}`);
    };

    return (
        <Spin spinning={isLoading}>
            <Row gutter={[16, 16]} className={styles['grid-view']}>
                {movies?.length > 0 ? (
                    <>
                        {movies.map((film: Movie, index: number) => (
                            <Col span={6} key={index}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt={film.Title}
                                            src={film.Poster && film.Poster.startsWith('http') ?
                                                film.Poster :
                                                dummyImage}
                                            style={{ height: 400 }}
                                        />
                                    }
                                    onClick={() => handleRowClick(film)}
                                >
                                    <Meta
                                        title={film.Title}
                                        description={
                                            <div className={styles['movie-meta']}>
                                                <span>Year: {film.Year}</span>
                                                <span>Type: {film.Type}</span>
                                                <span>IMDb ID: {film.imdbID}</span>
                                            </div>
                                        }
                                    />
                                </Card>
                            </Col>
                        ))}
                    </>
                ) : (
                    <div className={styles['empty-container']}>
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    </div>
                )}
            </Row>
        </Spin>
    );
};

export default GridView;
