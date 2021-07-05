import { Tabs, Tab } from '@material-ui/core';
import React from 'react';


function ProductSort({ currentSort, onChange }) {
    const handleSortChange = (e, newValue) => {
        if (onChange) onChange(newValue);
    }
    return (
        <Tabs
            value={currentSort}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleSortChange}
            aria-label="disable tabs example"
        >
            <Tab label="Giá thấp tới cao" value="salePrice:ASC"></Tab>
            <Tab label="Giá cao xuống thấp" value="salePrice:DESC"></Tab>
        </Tabs>
    );
}

export default ProductSort;