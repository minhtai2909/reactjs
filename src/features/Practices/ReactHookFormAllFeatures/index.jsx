import React from 'react';
import "./index.css";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, useRouteMatch, Switch, Redirect } from 'react-router-dom';
import Header from "./components/Header";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Result from "./Result";
import { DataProvider } from './DataContext';
import NotFound from 'components/NotFound';

App.propTypes = {

};

function App(props) {
    const { path } = useRouteMatch();
    console.log("path", path)
    return (
        <>
            <Header />
            <Router>
                <Switch>
                    <Route exact path={`${path}/`} component={Step1} />

                    <Route exact path={`${path}/Step1`} >
                        <Redirect to={`${path}/`} />
                    </Route>

                    <Route path={`${path}/Step2`} component={Step2} />
                    <Route path={`${path}/Step3`} component={Step3} />
                    <Route path={`${path}/result`} component={Result} />
                    <Route component={NotFound} />


                </Switch>
            </Router>

        </>
    );
}
export default App;