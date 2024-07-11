import React from 'react';
import Profile from "./Profile.jsx";
import Stats from "./Stats.jsx";

const SideBar = () => {
    return (
        <div className={'sidebar'}>
            <Profile/>
            <Stats/>
        </div>
    );
};

export default SideBar;