import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch as xxx, useSelector as yyy } from 'react-redux';
import { decrease, increase } from './counterSlice';

counterFeature.propTypes = {

};

function counterFeature(props) {
    const dispatch = xxx();
    const count = yyy(state => state.counter)

    const handleIncreaseClick = () => {
        const action = increase(2);
        dispatch(action);
    }
    const handleDecreaseClick = () => {
        const action = decrease(3);
        dispatch(action);
    }

    return (
        <>
            <div>
                Counter:{count}
            </div>
            <div>
                <button onClick={handleIncreaseClick}>
                    Increase
            </button>
                <button onClick={handleDecreaseClick}>
                    Decrease
            </button>
            </div>
        </>
    );
}

export default counterFeature;