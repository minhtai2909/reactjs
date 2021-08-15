import { yupResolver } from '@hookform/resolvers/yup';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputField from 'components/form-control/InputField/Index';
import QuantityField from 'components/form-control/QuantityField/Index';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

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

function AddToCartFrom({ OnSubmit = () => { } }) {
    const classes = useStyles();

    const schema = yup.object().shape({
        quantity: yup
            .number()
            .required('Please enter quantity')
            .min(1, 'Minimum value is 1')
            .typeError('Please enter a number'),
    });

    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = async (value) => {
        console.log("value", value)
        await OnSubmit(value);
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <QuantityField name="quantity" label="Quantity" form={form} />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                style={{ width: '250px' }}
            >
                Add to card
            </Button>
        </form>
    )
}
export default AddToCartFrom;