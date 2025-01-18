import React from 'react';
import { Table } from 'antd';
import styles from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/movieSlice';

const TableView: React.FC = () => {
    const { movies, page, totalResults } = useSelector((state: any) => state.movie);

    const dispatch = useDispatch();

    const handlePaginationChange = (page: number) => {
        dispatch(setPage(page));
    };

    const columns = [
        {
            title: 'Poster',
            dataIndex: 'Poster',
            key: 'Poster',
            render: (text: string) => <img src={text} alt="poster" style={{ width: 50 }} />,
        },
        { title: 'Movie', dataIndex: 'Title', key: 'Title' },
        { title: 'Year', dataIndex: 'Year', key: 'Year' },
        { title: 'IMDb ID', dataIndex: 'imdbID', key: 'imdbID' },
        { title: 'Type', dataIndex: 'Type', key: 'Type' },
    ];

    return (
        <Table
            className={styles['table-view']}
            dataSource={movies}
            columns={columns}
            pagination={{
                current: page,
                pageSize: 10,
                total: totalResults,
                onChange: handlePaginationChange,
                showSizeChanger: false,
            }}
            rowKey="imdbID"
        />
    );
};

export default TableView;
