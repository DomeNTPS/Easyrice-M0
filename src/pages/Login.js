import React from 'react'
import { Link, useHistory } from "react-router-dom";

const Login = () => {

    let history = useHistory();

    const [text,setText] = React.useState(Number)

    function handleClick() {
      history.push({
        pathname: "/InspectPage",
        state: { dataSend: text },
      });
      console.log(history.location.state.dataSend)
    }
    function handleClick() {
      history.push({
        pathname: "/Menu",
        state: { dataSend: text },
      });
    }
    function handleClick() {
      history.push({
        pathname: "/Setting",
        state: { dataSend: text },
      });
    }
    function handleClickNumber() {
        setText(text + 1);
    }

    return (
      <div>
        <button type="button" onClick={handleClick}>
          Menu
        </button>
        <button type="button" onClick={handleClick}>
          Setting
        </button>
        <button type="button" onClick={handleClick}>
          Inspect
        </button>
        <button onClick={handleClickNumber}>click</button>
        {text}
      </div>
    );
}

export default Login