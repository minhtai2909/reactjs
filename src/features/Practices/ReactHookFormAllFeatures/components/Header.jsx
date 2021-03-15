import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

Headers.propTypes = {

};
const useStyles = makeStyles((them) => ({
    root: {
        margin: them.spacing(3, 0, 2),
        fontFamily: "Permanent Marker",
        textAlign: "center",
        fontSize: "40px",
        color: "deeppink",
        textShadow: "1px 1px darkmagenta"
    }
}))

function Headers(props) {

    const styles = useStyles()
    return (
        <Typography
            component="h1"
            className={styles.root}
        >
            The Ultime Form Challenge
        </Typography>
    );
}

export default Headers;