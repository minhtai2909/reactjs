import { Box, Chip, makeStyles } from '@material-ui/core';
import React, { useMemo } from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',

        margin: theme.spacing(2, 0),
        listStyleType: 'none',

        '& > li': {
            margin: 0,
            padding: theme.spacing(1)
        }

    }
}))

const FILTER_LIST = [
    {
        id: 1,
        getLabel: () => 'Giao hàng miễn phí',
        isActive: (filters) => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: false,
        onRemove: () => { },
        onToggle: (filters) => {
            const newfilters = { ...filters };
            if (newfilters.isFreeShip) {
                delete newfilters.isFreeShip;
            } else {
                newfilters.isFreeShip = true;
            }
            return newfilters;
        }
    },
    {
        id: 2,
        getLabel: () => 'Có khuyến mãi',
        isActive: () => true,
        isVisible: (filters) => filters.isPromotion,
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.isPromotion;
            return newFilters;
        },
        onToggle: () => { }
    },
    {
        id: 3,
        getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
        isActive: () => true,
        isVisible: (filters) => Object.keys(filters).includes('salePrice_lte') && Object.keys(filters).includes('salePrice_gte'),
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.salePrice_lte;
            delete newFilters.salePrice_gte;
            return newFilters;
        },
        onToggle: () => { }
    },
    {
        id: 4,
        getLabel: (filters) => ``,
        isActive: () => true,
        isVisible: (filters) => true,
        isRemovable: true,
        onRemove: (filters) => { },
        onToggle: (filters) => { }
    },
]

function FilterViewer({ filters = {}, onChange = () => { } }) {
    const classess = useStyles();

    const visibleFilters = useMemo(() => {
        console.log("FilterViewer",filters)
        return FILTER_LIST.filter(x => x.isVisible(filters));
    }, [filters]);

    return (
        <Box component="ul" className={classess.root}>
            {
               visibleFilters.map(x => (
                <li key={x.id}>
                    <Chip
                        size="small"
                        label={x.getLabel(filters)}
                        color={x.isActive(filters) ? 'primary' : 'default'}
                        clickable={!x.isRemovable}
                        onClick={x.isRemovable ? null : () => {
                            const newFilters = x.onToggle(filters);
                            onChange(newFilters);
                        }}
                        onDelete={x.isRemovable ? () => {
                            const newfilters = x.onRemove(filters);
                            onChange(newfilters);
                        } : null}
                    />
                </li>
            ))
            }
        </Box>
    );
}
export default FilterViewer;