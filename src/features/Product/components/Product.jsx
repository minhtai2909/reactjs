import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { useMediaQuery } from 'react-responsive';



function Product({ product = {} }) {
    let thumbnailUrl = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : `${THUMBNAIL_PLACEHOLDER}`;

    let isDesktopScreen = useMediaQuery({ minWidth: 1024 });
    let isTablet = useMediaQuery({ maxWidth: 856 });
    let isMobile = useMediaQuery({ maxWidth: 480 });

    return (
        <Box padding={1}>
            {
                isDesktopScreen && <Box padding={1} minHeight='215px'>
                    <img src={thumbnailUrl} alt={product.name} width="100%" />
                </Box>
            }
            {
                isTablet && <Box padding={1} minHeight='175'>
                    <img src={thumbnailUrl} alt={product.name} width="100%" />
                </Box>
            }
            {
                isMobile && <Box padding={1} minHeight='100px'>
                    <img src={thumbnailUrl} alt={product.name} width="100%" />
                </Box>
            }

            <Typography variant="body2">
                {product.name}
            </Typography>
            <Typography variant="body2">
                <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Box>
                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
            </Typography>

        </Box>
    );
}

export default Product;