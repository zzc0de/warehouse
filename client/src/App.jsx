import React, { useState } from "react";
import "./styles/App.css";
import SideBar from "./components/sidebar/SideBar";

import { Routes, Route, Link } from "react-router-dom";

import Homepage from "./components/pages/Homepage";
import AddDevice from "./components/pages/AddDevice";
import EditDevice from "./components/pages/EditDevice";
import DeviceSearch from "./components/pages/DeviceSearch";
import Statistic from "./components/pages/Statistic";
import Users from "./components/pages/Users";
import Tasks from "./components/pages/Tasks";
import Calendar from "./components/pages/Calendar";
import Settings from "./components/pages/Settings";
import Header from "./components/header/Header";

function App() {
  const [slideStateContainer, setSlideStateContainer] = useState(false);
  const [pageName, setPageName] = useState('')
  const [recivedOnChange, setRecivedOnChange] = useState('');

  return (
    <div className="App">
      <div
        className="menu-container">
        <SideBar 
        slideContentContainer={setSlideStateContainer} 
        setPageName={setPageName}
        />
      </div>
      <div className={`content-wrapper slided-content${
          slideStateContainer === false ? "slided-content" : ''
        }`}>
          <Header 
          pageName={pageName}
          getOnChangeValue={setRecivedOnChange}
          />
        <div className="content-container">
          <div className="content-container__inner">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/add_device" element={<AddDevice />}></Route>
            <Route path="/edit_device" element={<EditDevice />}></Route>
            <Route path="/search" element={<DeviceSearch
              sendOnChage={recivedOnChange}
             />}></Route>
            <Route path="/statistic" element={<Statistic />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
