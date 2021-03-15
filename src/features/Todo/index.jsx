
import NotFound from "components/NotFound";
import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import TodoList from "./components/TodoList";
import DetailPage from "./pages/DetailPage";
import ReactHookForm from "../Practices/ReactHookForm";
import ListPage from "./pages/ListPage";

function Todo(props) {
    const { path, url } = useRouteMatch();

    const todoList = [
        { id: 1, title: "Eat" }, { id: 2, title: "Sleep" }
    ]
    return (
        <div>
            <h2> Todo</h2>
            <ul>
                <li><Link to={`${url}/ListPage`} >ListPage</Link></li>
                <li><Link to={`${url}/DetailPage/123`}>DetailPage</Link></li>
            </ul>

            <Switch>
                <Route path={`${url}/ListPage`} component={ListPage} />
                <Route path={`${url}/DetailPage/:detailId`} component={DetailPage} />
                <Route component={NotFound} />
            </Switch>

            <h2> Todo</h2>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default Todo;
