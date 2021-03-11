import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import TodoFeature from "./features/Todo"
import AlbumFeature from "./features/Album"
import React from 'react';
import NotFound from './components/NotFound';
import Practices from './features/Practices';
function App() {
  return (
    <div className="App">
      Header
      <p>
        <Link to="/todos">Todos</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/Practices">Practices</Link>

      </p>
      <Switch>
        {/* <Redirect from="/home/:cc" to="/todos/:cc" exact /> */}


        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/Practices" component={Practices} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
