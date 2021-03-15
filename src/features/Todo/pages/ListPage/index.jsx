import React from "react";
import { Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";

import queryString from "query-string";
import { useEffect } from "react";
import categoryAPI from "api/categoryAPI";
import TodoForm from "features/Todo/components/TodoForm";


function ListPage() {
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    let param = queryString.parse(location.search);
    console.log("param", param)

    const queryParams = { text: "one" };
    const oneOnClick = () => {
        history.push(
            {
                pathname: match.path,
                search: queryString.stringify(queryParams)
            }
        )
    }

    const queryParams2 = { text: "two" };
    const twoOnClick = () => {
        history.push(
            {
                pathname: match.path,
                search: queryString.stringify(queryParams2)
            }
        )
    }
    useEffect(() => {
        const fetchProducts = async () => {
            let res = await categoryAPI.getAll();
            console.log("products", res);
        }
        fetchProducts();
    }, [])


    const handleTodoFormSubmit = value => {
        console.log("ListPage", value);
    }

    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h2> ListPage </h2>
            <li>Location {param.text} </li>
            <div>
                <button onClick={() => oneOnClick()}>one</button>
                <button onClick={() => twoOnClick()}>two</button>

            </div>
        </div>
    );
}

export default ListPage;
