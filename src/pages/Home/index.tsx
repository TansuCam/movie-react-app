import React, { useState } from 'react';
import Filters from '../../components/Filter';
import TableView from '../../components/TableView';
import GridView from '../../components/GridView';

const Home: React.FC = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'table'>('table');

    return (
        <>
            <Filters viewMode={viewMode} setViewMode={setViewMode} />
            {viewMode === 'table' ? <TableView /> : <GridView />}
        </>
    );
};

export default Home;
