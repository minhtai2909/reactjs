import React, { useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/form-control/InputField/Index';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,

};


function TodoForm(props) {
    const schema = yup.object().shape({
        title: yup.string().required('Please enter title')
            .min(5, "Length is to short"),

    });

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = value => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(value)
        }
        form.reset();
    }
    let emailRef = useRef(null);
    function onClickButton() {
        emailRef.current.focus();
    }
    return (
        <>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="title" label="Todo" form={form} />
            </form>
        ------ Test Something ----------
            <div>
                <EmailInput ref={emailRef} />
                <button onClick={() => onClickButton()}>
                    Click me to focus email
        </button>
            </div>
        </>
    );
}
const EmailInput3 = forwardRef((props, ref) => (
    <input ref={ref} {...props} type="email" className="AppEmailInput" />
));
const EmailInput = forwardRef((props, ref) => (
    <input ref={ref} {...props} type="email" className="AppEmailInput" />
));
export default TodoForm;