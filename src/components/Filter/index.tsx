import React, { useEffect } from 'react';
import { Flex, Input, Select, Tooltip, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setYear, setType, setMovies, setTotalResults } from '../../redux/movieSlice';
import styles from './style.module.scss';
import { fetchMovies } from '../../services/movieAPI';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';

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

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setYear(e.target.value));
    };

    const handleTypeChange = (value: string) => {
        dispatch(setType(value));
    };

    return (
        <div className={styles.filters}>
            <Flex vertical>
                <Typography.Text>Movie Name</Typography.Text>
                <Input
                    className={styles['search-input']}
                    value={search}
                    placeholder="Search for a movie..."
                    onChange={handleSearchChange}
                />
            </Flex>

            <Flex vertical>
                <Typography.Text>Year</Typography.Text>
                <Input
                    className={styles['search-input']}
                    value={year}
                    placeholder="Search for a movie..."
                    onChange={handleYearChange}
                />
            </Flex>
            <Flex vertical>
                <Typography.Text>Type</Typography.Text>
                <Select
                    className={styles.select}
                    defaultValue={type}
                    onChange={handleTypeChange}
                >
                    <Option value="movie">Movies</Option>
                    <Option value="series">TV Shows</Option>
                    <Option value="episode">Episodes</Option>
                </Select>
            </Flex>

            <Tooltip title="Change view mode">
                {viewMode === 'table' ?
                    <UnorderedListOutlined
                        style={{ fontSize: 22, cursor: 'pointer' }}
                        onClick={() => setViewMode('grid')}
                    /> :
                    <AppstoreOutlined
                        style={{ fontSize: 22, cursor: 'pointer' }}
                        onClick={() => setViewMode('table')}
                    />
                }
            </Tooltip>
        </div>
    );
};

export default Filters;
