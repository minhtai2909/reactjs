import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({    
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',

        padding: 0,
        listStyleType: 'none',

        '& > li': {
            padding: theme.spacing(2, 4)
        },

        '& > li > a': {
            color: theme.palette.grey[700]
        },

        '& > li > a.active': {
            color: theme.palette.primary.main,
            textDecoration: 'underline',
            fontWeight: 'bold'
        }
    },
    description: {
        margin: theme.spacing(2, 0),
    },
}));

function ProductAdditional({ }) {
    const classes = useStyles();
    return (
        <Box component="ul" className={classes.root}>
           tertretert
        </Box>
    );
}
export default ProductAdditional;