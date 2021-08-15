import { Box, FormHelperText, Icon, makeStyles, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool
};

const useStyle = makeStyles((theme) => ({
    root: {},
    box: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        maxWidth: '200px'
    }

}))

function QuantityField(props) {
    const classes = useStyle();
    const { form, name, label, disabled } = props;
    const { formState: { errors }, setValue, } = form;
    const hasError = !!errors && errors[name];

    return (

        <FormControl error={hasError} fullWidth margin="normal" variant="outlined" size="small">
            <Typography>{label}</Typography>
            <Controller
                name={name}
                control={form.control}
                size="small"
                //   as={OutlinedInput}
                render={({
                    field: { onChange, onBlur, value, name, ref }
                }) =>
                    <Box className={classes.box}>
                        <Icon onClick={() => setValue(name, (Number.parseInt(value) || 2) - 1)}>
                            <RemoveCircleOutline />
                        </Icon>
                        <OutlinedInput
                            id={name}
                            type="number"
                            error={!!hasError}

                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            name={name}
                        />
                        <Icon onClick={() => setValue(name, (Number.parseInt(value) || 0) + 1)}>
                            <AddCircleOutline />
                        </Icon>
                    </Box>

                }

            />
            <FormHelperText> {errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default QuantityField;