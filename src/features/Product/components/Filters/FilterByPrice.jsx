import { Box, TextField, Button, Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
    },


    range: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',

        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),

        '& > span': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        }
    }
}));

function FilterByPrice({ OnChange = () => { } }) {
    const classes = useStyles();
    const [value, setValue] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue(preValue => ({
            ...preValue,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        OnChange(value);

        setValue({
            salePrice_gte: 0,
            salePrice_lte: 0
        });
    }

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2" >CHỌN KHOẢNH GIÁ</Typography>

            <Box className={classes.range}>
                <TextField name="salePrice_gte" value={value.salePrice_gte} onChange={handleChange} />
                <span> - </span>
                <TextField name="salePrice_lte" value={value.salePrice_lte} onChange={handleChange} />
            </Box>

            <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={handleSubmit}>
                Áp dụng
            </Button>
        </Box>

    );
}
export default FilterByPrice;