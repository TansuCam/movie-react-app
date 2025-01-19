// React
import React from 'react';

// Components
import Filters from '../../components/Filter';
import TableView from '../../components/TableView';
import GridView from '../../components/GridView';

// Ant Design
import { Pagination } from 'antd';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/movieSlice';

// Home page
const Home: React.FC = () => {
    // Get pagination data and current view mode from Redux store
    const { page, totalResults, viewMode } = useSelector((state: any) => state.movie);

    // Redux dispatch hook
    const dispatch = useDispatch();

    /**
     * Handles pagination change and updates the current page in the Redux store.
     * 
     * @param {number} page - The new page number selected by the user.
     */
    const handlePaginationChange = (page: number) => {
        dispatch(setPage(page));
    };

    return (
        <>
            {/* Filter component for searching and selecting movie criteria */}
            <Filters />

            {/* Conditionally render table or grid view based on viewMode */}
            {viewMode === 'table' ? <TableView /> : <GridView />}

            {/* Pagination component to control the current page */}
            <Pagination
                className='pagination'
                current={page}
                pageSize={10}
                total={totalResults}
                showSizeChanger={false}
                onChange={handlePaginationChange}
            />
        </>
    );
};

export default Home;
