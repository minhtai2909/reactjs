import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { productApi } from 'api/productAPI';
import React, { useEffect, useMemo, useState } from 'react';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import FilterViewer from '../components/FilterViewer';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from "query-string";
ListPage.propTypes = {

};

const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px'
    },
    right: {
        flex: '1 1 0'
    },
    pagination: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',

        marginTop: '20px',
        paddingBottom: '20px',
    }
}))



function ListPage(props) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const queryParams = useMemo(() => {
        let params = queryString.parse(location.search);
        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 9,
            _sort: params._sort || 'salePrice:ASC',
            isPromotion: params.isPromotion === 'true',
            isFreeShip: params.isFreeShip === 'true'

        }
    }, [location.search]);

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    const [pagination, setPagination] = useState({
        limit: 8,
        total: 10,
        page: 1,
        category: {},
    });

    // const [filters, setFilters] = useState({
    //     _page: 1,
    //     _limit: 8,
    //     _sort: 'salePrice:ASC'
    // });

    // const [filters, setFilters] = useState(() => ({
    //     ...queryParams,
    //     _page: Number.parseInt(queryParams._page || 1),
    //     _limit: Number.parseInt(queryParams._limit || 9),
    //     _sort: queryParams._sort || "salePrice:ASC",
    // }));

    const handlePageChange = (e, pageParam) => {
        //  setFilters(x => ({ ...x, _page: pageParam }));
        const filters = {
            ...queryParams,
            _page: pageParam
        };
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters)
        });
    }

    const handleSortChange = (newValue) => {
        // setFilters(x => ({ ...x, _sort: newValue }));
        const filters = {
            ...queryParams,
            _sort: newValue
        };
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters)
        });
    }

    const handleFilterChange = (newValue) => {
        // setFilters(preValue => ({
        //     ...preValue,
        //     ...newValue
        // }));
        const filters = {
            ...queryParams,
            ...newValue
        };

        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters)
        });

    }

    // useEffect(() => {
    //     history.push({
    //         pathname: history.location.pathname,
    //         search: queryString.stringify(filters)

    //     })
    // }, [history, filters])

    const setNewFilter = (newFilters) => {
        //  setFilters(newFilters);        
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newFilters)
        });
    }

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(queryParams);
                setProductList(data);
                setPagination(pagination);


            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            setLoading(false);
        })();
    }, [queryParams])



    return (
        <Box >
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilter filters={queryParams} OnChange={handleFilterChange} />
                        </Paper>

                    </Grid>

                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />
                            <FilterViewer filters={queryParams} onChange={setNewFilter} />
                            {
                                loading
                                    ? <ProductSkeletonList length={8} />
                                    : <ProductList data={productList} />
                            }
                            <Box className={classes.pagination}>
                                <Pagination
                                    color="primary"
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    page={pagination.page}
                                    onChange={handlePageChange}
                                />
                            </Box>

                        </Paper>


                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
}

export default ListPage;