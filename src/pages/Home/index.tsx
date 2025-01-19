import React from 'react';
import Filters from '../../components/Filter';
import TableView from '../../components/TableView';
import GridView from '../../components/GridView';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/movieSlice';

const Home: React.FC = () => {
    const { page, totalResults, viewMode } = useSelector((state: any) => state.movie);
    const dispatch = useDispatch();

    const handlePaginationChange = (page: number) => {
        dispatch(setPage(page));
    };

    return (
        <>
            <Filters />
            {viewMode === 'table' ? <TableView /> : <GridView />}
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
