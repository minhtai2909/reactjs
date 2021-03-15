import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

Form.propTypes = {

};

const useStyles = makeStyles((theme) => ({
    root: {
        witdh: "100%",
        marginTop: theme.spacing(1)
    }
}));

function Form({ children, ...props }) {
    const styles = useStyles();
    return (
        <form
            className={styles.root}
            noValidate {...props}
        >
            {children}
        </form>
    );
}

export default Form;