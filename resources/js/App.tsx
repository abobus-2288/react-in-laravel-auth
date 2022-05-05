import React from 'react';

import {Routes, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Main from "./components/Content/Main/Main";
import Register from "./components/Content/Register/Register";
import Login from "./components/Content/Login/Login";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route index element={<Main/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </div>
    )
}

export default App;
