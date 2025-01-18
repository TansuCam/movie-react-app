import React, { useEffect } from 'react';
import { Button, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setYear, setType, setMovies, setTotalResults } from '../../redux/movieSlice';
import styles from './style.module.scss';
import { fetchMovies } from '../../services/movieAPI';

const { Option } = Select;

interface FiltersProps {
    viewMode: 'grid' | 'table';
    setViewMode: (mode: 'grid' | 'table') => void;
}

const Filters: React.FC<FiltersProps> = ({ viewMode, setViewMode }) => {
    const dispatch = useDispatch();
    const { search, year, type, page } = useSelector((state: any) => state.movie);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchMovies(search, year, type, page);
            dispatch(setMovies(data.Search));
            dispatch(setTotalResults(data.totalResults));
        };

        fetchData();
    }, [dispatch, search, year, type, page]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value));
    };

    const handleYearChange = (value: string) => {
        dispatch(setYear(value));
    };

    const handleTypeChange = (value: string) => {
        dispatch(setType(value));
    };

    return (
        <div className={styles.filters}>
            <Input
                className={styles['search-input']}
                value={search}
                placeholder="Search for a movie..."
                onChange={handleSearchChange}
            />
            <Select
                className={styles.select}
                defaultValue={year}
                onChange={handleYearChange}
            >
                <Option value="">All Years</Option>
            </Select>
            <Select
                className={styles.select}
                defaultValue={type}
                onChange={handleTypeChange}
            >
                <Option value="movie">Movies</Option>
                <Option value="series">TV Shows</Option>
                <Option value="episode">Episodes</Option>
            </Select>
            <div className="view-toggle">
                <Button
                    className={`view-button ${viewMode === 'table' ? 'active' : ''}`}
                    onClick={() => setViewMode('table')}
                >
                    Table View
                </Button>
                <Button
                    className={`view-button ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                >
                    Grid View
                </Button>
            </div>
        </div>
    );
};

export default Filters;
