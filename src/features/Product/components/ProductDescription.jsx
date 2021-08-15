import { Paper } from '@material-ui/core';
import DOMPurify from 'dompurify';
import React from 'react';

const ProductDescription = ({ Product = {} }) => {
    let safeDescription = DOMPurify.sanitize(Product?.description)

    return (
        <Paper elevation={0} style={{ padding: '15px' }}>
            <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
        </Paper>
    );
}
export default ProductDescription;