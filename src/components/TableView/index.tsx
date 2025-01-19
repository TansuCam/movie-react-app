// React
import React, { useMemo } from 'react';

// Components
import { Spin, Table } from 'antd';

// Styles
import styles from './style.module.scss';

// Redux
import { useSelector } from 'react-redux';

// React Router
import { useNavigate } from 'react-router-dom';

// Types
import { Movie } from '../../types/movieTypes';

// Assets
import dummyImage from '../../images/dummy_image.jpg';

// TableView component
const TableView: React.FC = () => {
    // Get movies and loading state from Redux store
    const { movies, isLoading } = useSelector((state: any) => state.movie);

    // React Router hook to navigate between pages
    const navigate = useNavigate();

    /**
     * Handles row click event and navigates to the movie details page.
     * 
     * @param {Movie} record - The clicked movie record.
     */
    const handleRowClick = (record: Movie) => {
        navigate(`/movie/${record.imdbID}`);
    };

    // Define table columns
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
                        className={styles.posterImage}
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
                scroll={{ x: 'max-content' }}
            />
        </Spin>
    );
};

export default TableView;
