import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useHistory, useRouteMatch } from 'react-router';
import MainContainer from './components/MainContainer';
import Form from './components/Form';
import Input from './components/Input';
import PrimaryButton from './components/PrimaryButton';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useData } from './DataContext';
import { parsePhoneNumberFromString } from "libphonenumber-js";

Step2.propTypes = {

};

const schema = yup.object().shape({
    email: yup.string()
        .email("Email should have correct format")
        .required("Email is a required field"),
});

const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value);
    if (!phoneNumber) {
        return value;
    }
    console.log("phoneNumber", phoneNumber)
    return phoneNumber.formatInternational();

}

function Step2(props) {
    const { path } = useRouteMatch();
    const { data, setValues } = useData();
    const { register, watch, errors, handleSubmit } = useForm({
        defaultValues: {
            email: data.email,
            hasPhone: data.hasPhone,
            phoneNumber: data.phoneNumber
        },
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    const hasPhone = watch("hasPhone", false);

    const history = useHistory();

    const onSubmit = (value) => {
        setValues(value);
        history.push("Step3");

    }


    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                🍹  Step 2 🐱
            </Typography>

            <Form type="submit" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="email"
                    name="email"
                    label="Email"
                    ref={register}
                    required
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />

                <FormControlLabel
                    control={<Checkbox
                        defaultValue={data.hasPhone}
                        defaultChecked={data.hasPhone}
                        color="primary"
                        inputRef={register}
                        name="hasPhone"
                    />}

                    label="Do you have a phone"
                />
                {
                    hasPhone && <Input
                        ref={register}
                        id="phoneNumber"
                        type="tel"
                        label="Phone Number"
                        name="phoneNumber"
                        onChange={(e) => {
                            e.target.value = normalizePhoneNumber(e.target.value)
                        }}
                    />
                }

                <PrimaryButton type="submit">Next</PrimaryButton>
            </Form>

        </MainContainer>
    );
}

export default Step2;