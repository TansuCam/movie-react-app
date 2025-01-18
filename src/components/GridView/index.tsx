import React from 'react';
import { Card, Col, Empty, Flex, Row } from 'antd';
import styles from './style.module.scss';
import { Movie } from '../../types/movieTypes';
import { useSelector } from 'react-redux';

const { Meta } = Card;

const GridView: React.FC = () => {
    const { movies } = useSelector((state: any) => state.movie);
    return (
        <Row gutter={[16, 16]} className={styles['grid-view']}>
            {movies?.length > 0 ? (
                <>
                    {movies.map((film: Movie, index: number) => (
                        <Col span={6} key={index}>
                            <Card
                                hoverable
                                cover={<img alt={film.Title} src={film.Poster} style={{ height: 400 }} />}
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
    );
};

export default GridView;
