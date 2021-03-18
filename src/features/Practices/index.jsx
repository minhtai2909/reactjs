import React from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, useRouteMatch, Route } from 'react-router-dom';
import ReactHookForm from './ReactHookForm';
import ReactHookFormAllFeatures from './ReactHookFormAllFeatures';
import { DataProvider } from './ReactHookFormAllFeatures/DataContext';

Practice.propTypes = {

};

function Practice(props) {
    const { path, url } = useRouteMatch();
    return (
        <div>
            <ul>
                <li><Link to={`${url}/ReactHookForm`} >ReactHookForm</Link></li>
                <li><Link to={`${url}/ReactHookFormAllFeatures`} >ReactHookFormAllFeatures</Link></li>
            </ul>
            <Switch>
                <Route path={`${url}/ReactHookForm`} component={ReactHookForm} />
                <Route path={`${url}/ReactHookFormAllFeatures`} component={ReactHookFormAllFeatures} />
            </Switch>
        </div>
    );
}

export default Practice;