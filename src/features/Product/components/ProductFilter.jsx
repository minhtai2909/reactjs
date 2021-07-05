import React from 'react';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';


function ProductFilter({ filters = {}, OnChange = () => { } }) {

    const handleCategoryChange = (newCategoryId) => {
        const newFilter = {
            "category.id": newCategoryId
        };
        OnChange(newFilter);
    }

    const handleOnChange = (values) => {
        OnChange(values);
    }

    return (
        <div>
            <FilterByCategory OnChange={handleCategoryChange} />
            <FilterByPrice OnChange={handleOnChange} />
            <FilterByService Filter={filters} OnChange={handleOnChange} />
        </div>
    );
}
export default ProductFilter;