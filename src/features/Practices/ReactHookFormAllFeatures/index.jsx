import React from 'react';
import "./index.css";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Result from "./Result";

App.propTypes = {

};

function App(props) {
    return (
        <>
            <Header />
            <Step1 />
            <Router>
                <Switch>
                    <Route exact path="/Step1" component={Step1} />
                    <Route path="/Step2" component={Step2} />
                    <Route path="/Step3" component={Step3} />
                    <Route path="/result" component={Result} />



                </Switch>
            </Router>

        </>
    );
}

export default App;