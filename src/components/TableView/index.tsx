import React from 'react';
import { Table } from 'antd';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';

const TableView: React.FC = () => {
    const { movies } = useSelector((state: any) => state.movie);

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
            rowKey="imdbID"
            pagination={false}
        />
    );
};

export default TableView;
