import { Box, Typography, makeStyles } from '@material-ui/core';
import { formatPrice } from 'features/utils';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom:theme.spacing(2),
        borderBottom:`1px solid ${theme.palette.grey[200]}`,
    },
    description: {
        margin: theme.spacing(2, 0),
    },
    priceBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[100],
    },
    salePrice: {
        marginRight: theme.spacing(3),
        fontSize: theme.typography.h4,
        fontWeight: 'bold'
    },
    originalPrice: {
        marginRight: theme.spacing(2),
        textDecoration: 'line-through'
    },
    promotionPercent: {},
}));

function ProductInfo({ Product = {} }) {
    const classes = useStyles();
    const { name, shortDescription, salePrice, originalPrice, promotionPercent } = Product;
    return (
        <Box className={classes.root}>
            <Typography component="h1" variant="h4">{name}</Typography>
            <Typography variant="body2" className={classes.description}>{shortDescription}</Typography>

            <Box className={classes.priceBox}>
                <Box component="span" className={classes.salePrice}>{formatPrice(salePrice)}</Box>
                {
                    promotionPercent > 0 &&
                    <>
                        <Box component="span" className={classes.originalPrice}>{formatPrice(originalPrice)}</Box>
                        <Box component="span" className={classes.promotionPercent}>{`-${promotionPercent}%`}</Box>
                    </>
                }

            </Box>
        </Box>
    );
}
export default ProductInfo;