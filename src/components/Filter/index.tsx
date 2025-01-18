import React, { useEffect } from 'react';
import { Button, Form, Input, Select, Tooltip, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setYear, setType, setMovies, setTotalResults, setLoading } from '../../redux/movieSlice';
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

    const fetchInitialMovies = async () => {
        try {
            dispatch(setLoading(true))
            const data = await fetchMovies(search, year, type, page);
            dispatch(setLoading(false))
            dispatch(setMovies(data.Search));
            dispatch(setTotalResults(data.totalResults));
        } catch (error) {
            dispatch(setLoading(false))
            console.error("Error fetching initial movies:", error);
        }
    };

    useEffect(() => {
        fetchInitialMovies();
    }, [page]);

    const onFinish = async (values: any) => {
        const { search: searchValue, year: yearValue, type: typeValue } = values;

        dispatch(setSearch(searchValue));
        dispatch(setYear(yearValue));
        dispatch(setType(typeValue));

        try {
            dispatch(setLoading(true))
            const data = await fetchMovies(searchValue, yearValue, typeValue, page);
            dispatch(setLoading(false))
            dispatch(setMovies(data.Search));
            dispatch(setTotalResults(data.totalResults));
        } catch (error) {
            console.error("Error fetching movies:", error);
            dispatch(setLoading(false))
        }
    };
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
