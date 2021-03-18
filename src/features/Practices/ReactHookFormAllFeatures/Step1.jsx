import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
import * as yup from "yup";
import Form from './components/Form';
import Input from './components/Input';
import MainContainer from './components/MainContainer';
import PrimaryButton from './components/PrimaryButton';
import { useData } from './DataContext';

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
    const { path } = useRouteMatch();
    const { data, setValues } = useData();
    const { register, errors, handleSubmit } = useForm({
        defaultValues: { firstName: data.firstName, lastName: data.lastName },
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    const history = useHistory();
    const onSubmit = (value) => {
        history.push(`${path}Step2`);
        setValues(value);
    }
    console.log("data-Context", data)

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                🦄 Step 1 🐔
            </Typography>

            <Form type="submit" onSubmit={handleSubmit(onSubmit)}>
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