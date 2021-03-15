import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import MainContainer from './components/MainContainer';
import Form from './components/Form';
import Input from './components/Input';
import PrimaryButton from './components/PrimaryButton';
import { Typography } from '@material-ui/core';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

Step1.propTypes = {

};

const schema = yup.object().shape({
    firstName: yup.string()
        .matches(/^([^0-9]*)$/, "First name should not contain number")
        .required("First name is a required field"),
    lastName: yup.string()
        .matches(/^([^0-9]*)$/, "Last name should not contain number")
        .required("Last name is a required field"),

});

function Step1(props) {
    const { register, errors, handleSubmit } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    });
    const history = useHistory();
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                🦄 Step 1 🐔
            </Typography>

            <Form type="submit">
                <Input
                    type="text"
                    name="firstName"
                    label="First Name"
                    ref={register}
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                />

                <Input
                    type="text"
                    name="lastName"
                    label="Last Name"
                    ref={register}
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                />
                <PrimaryButton type="submit">Next</PrimaryButton>
            </Form>

        </MainContainer>
    );
}

export default Step1;