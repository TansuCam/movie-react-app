import React from 'react';
import { Card, Col, Empty, Flex, Row, Spin } from 'antd';
import styles from './style.module.scss';
import { Movie } from '../../types/movieTypes';
import { useSelector } from 'react-redux';
import dummyImage from '../../images/dummy_image.jpg';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const GridView: React.FC = () => {
    const { movies, isLoading } = useSelector((state: any) => state.movie);
    const navigate = useNavigate();

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
                                            style={{ height: 400 }
                                            }
                                        />
                                    }
                                    onClick={() => handleRowClick(film)}
                                >
                                    <Meta
                                        title={film.Title}
                                        description={
                                            <Flex vertical>
                                                <span>Year: {film.Year}</span>
                                                <span>Type: {film.Type}</span>
                                                <span>IMDb ID: {film.imdbID}</span>
                                            </Flex>
                                        }
                                    />
                                </Card>
                            </Col>
                        ))}
                    </>
                ) :
                    <div className={styles['empty-container']}>
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    </div>
                }
            </Row>
        </Spin >
    );
};

export default GridView;
