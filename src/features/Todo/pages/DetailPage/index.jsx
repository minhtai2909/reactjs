import React from "react";
import { useParams } from "react-router-dom";
import queryString from "query-string";
function DetailPage() {
    let { detailId } = useParams();
    let param = queryString.parse(window.location.search);
    console.log("param", param)
    return (
        <div>
            <h2> DetailPage</h2>
            <li>{detailId}</li>
            <div>

            </div>

        </div>
    );
}

export default DetailPage;
