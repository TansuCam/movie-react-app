import React, { useEffect, useCallback } from 'react';
import { Button, Form, Input, Select, Tooltip, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setYear, setType, setMovies, setTotalResults, setLoading, setViewMode } from '../../redux/movieSlice';
import { fetchMovies } from '../../services/movieAPI';
import styles from './style.module.scss';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { debounce } from 'lodash';

const { Option } = Select;

const Filters: React.FC = () => {
    const dispatch = useDispatch();
    const { search, year, type, page, viewMode } = useSelector((state: any) => state.movie);

    const fetchFilteredMovies = useCallback(async () => {
        try {
            dispatch(setLoading(true));
            const data = await fetchMovies(search, year, type, page);
            dispatch(setLoading(false));
            dispatch(setMovies(data.Search));
            dispatch(setTotalResults(data.totalResults));
        } catch (error) {
            dispatch(setLoading(false));
            console.error("Error fetching movies:", error);
        }
    }, [search, year, type, page, dispatch]);

    const debouncedFetch = useCallback(debounce(fetchFilteredMovies, 500), [fetchFilteredMovies]);

    useEffect(() => {
        debouncedFetch();
        return () => debouncedFetch.cancel();
    }, [search, year, type, page, debouncedFetch]);

    const onFinish = async (values: any) => {
        const { search: searchValue, year: yearValue, type: typeValue } = values;

        dispatch(setSearch(searchValue));
        dispatch(setYear(yearValue));
        dispatch(setType(typeValue));
    };

    const changeViewMode = (mode: 'grid' | 'table') => {
        dispatch(setViewMode(mode));
    }

    return (
        <div className={styles.filters}>
            <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={{ search, year, type }}
            >
                <div className={styles['filter-items']}>
                    <Form.Item
                        label={<Typography.Text>Name</Typography.Text>}
                        name="search"
                    >
                        <Input
                            className={styles['search-input']}
                            placeholder="Search for a movie..."
                        />
                    </Form.Item>

                    <Form.Item
                        label={<Typography.Text>Year</Typography.Text>}
                        name="year"
                    >
                        <Input
                            className={styles['search-input']}
                            placeholder="Enter year..."
                        />
                    </Form.Item>

                    <Form.Item
                        label={<Typography.Text>Type</Typography.Text>}
                        name="type"
                    >
                        <Select className={styles.select}>
                            <Option value="movie">Movies</Option>
                            <Option value="series">TV Shows</Option>
                            <Option value="episode">Episodes</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">Search</Button>
                    </Form.Item>
                </div>
            </Form>

            <Tooltip title="Change view mode">
                {viewMode === 'table' ? (
                    <UnorderedListOutlined
                        style={{ fontSize: 22, cursor: 'pointer' }}
                        onClick={() => changeViewMode('grid')}
                    />
                ) : (
                    <AppstoreOutlined
                        style={{ fontSize: 22, cursor: 'pointer' }}
                        onClick={() => changeViewMode('table')}
                    />
                )}
            </Tooltip>
        </div>
    );
};

export default Filters;
