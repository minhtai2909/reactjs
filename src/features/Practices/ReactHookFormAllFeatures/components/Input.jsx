import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';



const Input = forwardRef((props, ref) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            inputRef={ref}
            fullWidth
            autoComplete="off"
            {...props}
        />
    );
})

export default Input;