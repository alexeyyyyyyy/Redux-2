import React from 'react';
import "./App.css";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";

const App = () => {
    return (
        <div className={"app"}>
                <Header/>
                <Content/>
        </div>
    );
};

export default App;