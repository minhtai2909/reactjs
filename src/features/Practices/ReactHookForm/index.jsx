import React from 'react';
import PropTypes from 'prop-types';
import content from './common/const';
import "./styles/style.css";
import { Button, TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

ReactHookForm.propTypes = {

};

const schema = yup.object().shape({
    username: yup.string().required("username is a required fielddd"),
    password: yup.string().required().min(5),
    email: yup.string().required("please enter the email").email(),
});

function ReactHookForm(props) {
    const { register, handleSubmit, errors, formState, reset, control } = useForm({
        defaultValues: {
            username: "",
            password: "",
            email: ""
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log("submit", data)
        reset();
    }

    return (
        <div>
            Login
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    content.inputs.map((input, index) => {
                        return (
                            <div key={index}>
                                {/* <TextField
                                    label={input.label}
                                    name={input.name}
                                    type={input.type}
                                    inputRef={register}

                                    error={!!formState.touched[input.name] && !!errors[input.name]}
                                    helperText={errors[input.name]?.message}
                                /> */}

                                <Controller
                                    label={input.label}
                                    name={input.name}
                                    type={input.type}
                                    inputRef={register}
                                    control={control}

                                    as={TextField}
                                    error={!!formState.touched[input.name] && !!errors[input.name]}
                                    helperText={errors[input.name]?.message}
                                />
                                <p>
                                    {/* <label htmlFor="">{input.label}</label>
                                    <input
                                        name={input.name}
                                        type={input.type}

                                        ref={register}
                                    /> */}
                                </p>
                            </div>
                        )
                    })
                }
                <Button variant="contained" color="primary"
                    type="submit">Submit</Button>

            </form>
        </div>
    );
}

export default ReactHookForm;