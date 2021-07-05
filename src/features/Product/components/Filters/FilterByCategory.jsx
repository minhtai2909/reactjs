import { Box, makeStyles, Typography, Button } from '@material-ui/core';
import categoryAPI from 'api/categoryAPI';
import { getListCategory } from 'features/Product/productSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },

    menu: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',

        '& > li': {
            marginTop: theme.spacing(1),
            transition: 'all .25s',

            '&:hover': {
                color: theme.palette.primary.dark,
                cursor: 'pointer'
            }
        }
    },
}));

function FilterByCategory({ OnChange = () => { } }) {
    const dispatch = useDispatch();
    let selector = useSelector(state => state.product.LstCategory);
    console.log("selector", selector)

    const [categoryList, setCategoryList] = useState([]);
    const classes = useStyles();

    const handleCategoryClick = (category) => {
        OnChange(category.id);
    }

    const handleClickFetch = async () => {
        let lst = await dispatch(getListCategory());
        console.log("handleClickFetch", lst)
        //setCategoryList([...lst]);
    }

    useEffect(() => {
        (async () => {
            try {
                const list = await categoryAPI.getAll();
                setCategoryList(list.map(x => ({ id: x.id, name: x.name })));
                
                console.log("useEffect", list)
             
                // setCategoryList(selector);
            } catch (error) {
                console.log('Failed to fetch category list', error);
            }
        })();
    }, []);

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
            {/* <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() => handleClickFetch()}
            >
                Fetch Category List
            </Button> */}
            <ul className={classes.menu}>
                {
                    categoryList.map(category => (
                        <li
                            key={category.id}
                            onClick={() => handleCategoryClick(category)}
                        >
                            <Typography variant="body2">{category.name}</Typography>
                        </li>
                    ))
                }
            </ul>
        </Box>
    );
}
export default FilterByCategory;