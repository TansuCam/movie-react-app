import React, { useMemo } from 'react';
import { Spin, Table } from 'antd';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../../types/movieTypes';
import dummyImage from '../../images/dummy_image.jpg';

const TableView: React.FC = () => {
    const { movies, isLoading } = useSelector((state: any) => state.movie);
    const navigate = useNavigate();

    const handleRowClick = (record: Movie) => {
        navigate(`/movie/${record.imdbID}`);
    };

    const columns = useMemo(() => [
        {
            title: 'Poster',
            dataIndex: 'Poster',
            key: 'Poster',
            render: (text: string) => {
                return (
                    <img
                        src={text && text.startsWith('http') ? text : dummyImage}
                        alt="poster"
                        style={{ width: 50 }}
                        onError={(e) => {
                            e.currentTarget.src = dummyImage;
                            e.currentTarget.alt = 'Dummy Poster';
                        }}
                    />
                );
            },
        },
        { title: 'Movie', dataIndex: 'Title', key: 'Title' },
        { title: 'Year', dataIndex: 'Year', key: 'Year' },
        { title: 'IMDb ID', dataIndex: 'imdbID', key: 'imdbID' },
        { title: 'Type', dataIndex: 'Type', key: 'Type' },
    ], []);

    return (
        <Spin spinning={isLoading}>
            <Table
                className={styles['table-view']}
                dataSource={movies}
                columns={columns}
                rowKey="imdbID"
                pagination={false}
                onRow={(record: Movie) => ({
                    onClick: () => handleRowClick(record),
                    style: { cursor: 'pointer' },
                })}
            />
        </Spin>
    );
};

export default TableView;
