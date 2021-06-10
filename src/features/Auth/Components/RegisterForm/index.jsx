import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-control/InputField/Index';
import PasswordField from 'components/form-control/PasswordField/Index';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        paddingTop: theme.spacing(4)
    },

    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main

    },

    title: {
        margin: theme.spacing(2, 0, 3, 0),
        textAlign: 'center'
    },

    submit: {
        margin: theme.spacing(3, 0, 2, 0)
    }
    ,
    progress: {
        position: 'absolute',
        top: theme.spacing(1),
        left: 0, right: 0
    }
}))

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const classes = useStyles();

    const schema = yup.object().shape({
        fullname: yup.string()
            .required("Please enter your full name.")
            .test('should has at least two words', 'please enter at least two words', (value) => {
                return value.split(' ').length >= 2;
            }),

        email: yup.string().required('Please enter an email')
            .email('Please enter a valid email'),

        password: yup.string('Please enter your full password')
            .min(6, 'Please enter at least six characters'),

        retypepassword: yup.string().required('Please retype your password.')
            .oneOf([yup.ref('password')], 'Password does not match')
    });

    const form = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            retypepassword: '',
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = async (value) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(value)
        }
        // form.reset();
    }

    const { isSubmitting } = form.formState;

    useEffect(() => {
        console.log("isSubmitting", isSubmitting)
    }, [isSubmitting])

    return (
        <>
            <div className={classes.root}>
                {isSubmitting && <LinearProgress className={classes.progress} />}
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined></LockOutlined>
                    </Avatar>
                    <Typography className={classes.title} component="h3" variant="h3">
                        Create An Account
                </Typography>
                    <InputField name="fullname" label="Full name" form={form} />
                    <InputField name="email" label="Email" form={form} />
                    <PasswordField name="password" label="Password" form={form}
                        type="password"

                    />
                    <PasswordField name="retypepassword" label="Retype Password" form={form} />

                    <Button disable={!!isSubmitting || "false"} type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
                        Create an account
                    </Button>
                </form>
            </div>
        </>
    );
}
export default RegisterForm;