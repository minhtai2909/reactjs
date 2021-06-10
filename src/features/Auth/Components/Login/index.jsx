import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import { useDispatch } from 'react-redux';
import { login } from "../../userSlice";
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

Login.propTypes = {

};

function Login(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (value) => {
        try {
            // auto set userName email

            const action = login(value);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

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
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;