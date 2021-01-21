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
    function handleClickNumber() {
        setText(text + 1);
    }

    return (
      <div>
        <h1>hi</h1>
        <textarea></textarea>
        <button type="button" onClick={handleClick}>
          sent
        </button>
        <button onClick={handleClickNumber}>click</button>
        {text}
      </div>
    );
}

export default Login