import React from 'react';
import PropTypes from 'prop-types';
import MainContainer from './components/MainContainer';
import { makeStyles, Typography } from '@material-ui/core';

Result.propTypes = {

};

const useStyle = makeStyles({
    root: {
        marginBottom: "30px"
    },
    table: {
        marginBottom: "30px"
    }

})

function Result(props) {
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">

            </Typography>
        </MainContainer>
    );
}

export default Result;