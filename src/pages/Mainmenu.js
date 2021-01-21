import React from 'react'
import { Link, useHistory, useParams, useLocation } from "react-router-dom";

const MainMenu = () => {
    
    let location = useLocation();

    return <div>{location.state.dataSend}</div>;
}

export default MainMenu
