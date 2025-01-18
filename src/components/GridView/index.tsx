import React from 'react';
import { Card, Col, Row } from 'antd';
import styles from './style.module.scss';
import { Movie } from '../../types/movieTypes';
import { useSelector } from 'react-redux';

const { Meta } = Card;

const GridView: React.FC = () => {
    const { movies } = useSelector((state: any) => state.movie);
    return (
        <Row gutter={[16, 16]} className={styles['grid-view']}>
            {movies.map((film: Movie, index: number) => (
                <Col span={8} key={index}>
                    <Card
                        hoverable
                        cover={<img alt={film.Title} src={film.Poster} />}
                    >
                        <Meta title={film.Title} description={`Year: ${film.Year}`} />
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default GridView;
