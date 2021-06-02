import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import TodoFeature from "./features/Todo"
import AlbumFeature from "./features/Album"
import React from 'react';
import NotFound from './components/NotFound';
import Practices from './features/Practices';
import counterFeature from 'features/Counter';
import Header from 'components/Header';
function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        {/* <Redirect from="/home/:cc" to="/todos/:cc" exact /> */}


        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/Practices" component={Practices} />
        <Route path="/Counter" component={counterFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
