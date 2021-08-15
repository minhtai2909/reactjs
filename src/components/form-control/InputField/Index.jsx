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
    const { formState: { errors } } = form;

    const hasError = !!errors ? errors[name] : false;

    return (
        <>
            <Controller
                name={name}
                control={form.control}
                // as={TextField}
                render={({ onChange, onBlur, value, name }) =>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        size="small"

                        fullWidth
                        label={label}
                        disabled={disabled}

                        error={!!hasError}
                        helperText={errors[name]?.message}

                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        name={name}
                    />
                }
            />
        </>
    );
}

export default InputField;