import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from "./../../userSlice";
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

Register.propTypes = {

};

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (value) => {
        try {
            // auto set userName email
            value.username = value.email;
            const action = register(value);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log("new user", user)
            enqueueSnackbar('Register successfully!!!', { variant: 'success' });
            const { closeDialog } = props;
            if (closeDialog)
                closeDialog();
        } catch (error) {
            console.log("Failed to register", error)
            enqueueSnackbar(error.message, { variant: 'error' });
        }

    }

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;