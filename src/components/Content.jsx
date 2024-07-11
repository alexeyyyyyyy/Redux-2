import React from 'react';
import SideBar from "./SideBar.jsx";
import Feed from "./Feed.jsx";

const Content = () => {
    return (
        <div className={'body'}>
            <SideBar/>
            <Feed/>
        </div>
    );
};

export default Content;