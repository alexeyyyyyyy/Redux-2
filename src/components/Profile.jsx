import React, {useContext} from 'react';
import Avatar from "./Avatar.jsx";
import {UserContext} from "../utils/useContext.js";
import {useSelector} from "react-redux";

const Profile = () => {
    const name = useSelector(store => store.name);

    return (
        <div className={'user-stats'}>
            <Avatar size={"big"}/>
            <h2 >{name}</h2>
        </div>
    );
};

export default Profile;