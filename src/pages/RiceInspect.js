import React from 'react'
import { Link, useHistory, useParams, useLocation } from "react-router-dom";

const RiceInspect = (props) => {
    // console.log(text)
    let history = useHistory();
    let params = useParams();
    let location = useLocation();

    // console.log(location.state)

    return (
      <div>
        <h1>{location.state.dataSend}</h1>
        <br />
        <button type="button" onClick={history.goBack}>
          back
        </button>
      </div>
    );
}

export default RiceInspect
