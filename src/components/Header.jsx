import React, {useContext} from 'react';
import Avatar from "./Avatar.jsx";
import {UserContext} from "../utils/useContext.js";

const Header = () => {
    return (
        <div className={'nav'}>
            <p>Nav</p>
            <h1>Y</h1>
            <Avatar size={"small"}/>
        </div>
    );
};

export default Header;