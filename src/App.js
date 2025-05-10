/** @format */
import React, { useState } from "react";
import SearchBar from "./component/youtube/SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./component/youtube/VideoList";
import VideoDetail from "./component/youtube/VideoDetail";
import NavbarComponent from "./component/navbar/NavbarComponent";
import YoutubeComponent from "./component/youtube/YoutubeComponent";
import "./App.css";
import "./font/IranianSans.ttf";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        test
        <NavbarComponent />
      </BrowserRouter>
    </div>
  );
};
export default App;
