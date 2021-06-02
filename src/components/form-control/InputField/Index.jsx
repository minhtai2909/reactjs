import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { errors } = form;
    const hasError = errors[name];

    return (
        <Controller
            name={name}
            control={form.control}
            as={TextField}

            variant="outlined"
            margin="normal"
            size="small"

            fullWidth
            label={label}
            disabled={disabled}

            error={!!hasError}
            helperText={errors[name]?.message}
        />
    );
}

export default InputField;