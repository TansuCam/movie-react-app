// React
import React, { useEffect, useCallback } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setYear, setType, setMovies, setTotalResults, setLoading, setViewMode } from '../../redux/movieSlice';
import { fetchMovies } from '../../services/movieAPI';

// Components
import { Button, Form, Input, Select, Tooltip, Typography } from 'antd';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';

// Utilities
import { debounce } from 'lodash';

// Styles
import styles from './style.module.scss';

const { Option } = Select;

// Filters component
const Filters: React.FC = () => {
    // Redux dispatch hook
    const dispatch = useDispatch();

    // Accessing state from Redux store
    const { search, year, type, page, viewMode } = useSelector((state: any) => state.movie);

    /**
     * Function to fetch filtered movies based on search, year, type, and page.
     * It dispatches actions to set loading state, movies data, and total results.
     * 
     * @async
     * @function fetchFilteredMovies
     * @returns {Promise<void>}
     */
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

    // Debounced version of the fetchFilteredMovies function to limit API calls
    const debouncedFetch = useCallback(debounce(fetchFilteredMovies, 500), [fetchFilteredMovies]);

    /**
     * Effect hook to trigger debouncedFetch whenever search, year, type, or page changes.
     * It also cleans up the debounce function on unmount.
     */
    useEffect(() => {
        debouncedFetch();
        return () => debouncedFetch.cancel();
    }, [search, year, type, page, debouncedFetch]);

    /**
     * Handles form submission and dispatches the updated filter values (search, year, type) to the Redux store.
     * 
     * @function onFinish
     * @param {Object} values - Contains the filter values (search, year, type)
     * @returns {void}
     */
    const onFinish = async (values: any) => {
        const { search: searchValue, year: yearValue, type: typeValue } = values;

        dispatch(setSearch(searchValue));
        dispatch(setYear(yearValue));
        dispatch(setType(typeValue));
    };

    /**
     * Changes the view mode between 'grid' and 'table'.
     * 
     * @function changeViewMode
     * @param {'grid' | 'table'} mode - The selected view mode.
     * @returns {void}
     */
    const changeViewMode = (mode: 'grid' | 'table') => {
        dispatch(setViewMode(mode));
    };

    return (
        <div className={styles.filters}>
            <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={{ search, year, type }}
            >
                <div className={styles['filter-items']}>
                    {/* Search Input Field */}
                    <Form.Item
                        label={<Typography.Text>Name</Typography.Text>}
                        name="search"
                    >
                        <Input
                            className={styles['search-input']}
                            placeholder="Search for a movie..."
                        />
                    </Form.Item>

                    {/* Year Input Field */}
                    <Form.Item
                        label={<Typography.Text>Year</Typography.Text>}
                        name="year"
                    >
                        <Input
                            className={styles['search-input']}
                            placeholder="Enter year..."
                        />
                    </Form.Item>

                    {/* Type Selector Field */}
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

                    {/* Submit Button */}
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Search</Button>
                    </Form.Item>
                </div>
            </Form>

            {/* Tooltip to change view mode */}
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
