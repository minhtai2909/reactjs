import React from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles } from '@material-ui/core';

PrimaryButton.propTypes = {

};
const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 2),
    }
}));

function PrimaryButton({ children, ...props }) {
    const styles = useStyles();
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.root}
            {...props}

        >
            { children}

        </Button>
    );
}

export default PrimaryButton;