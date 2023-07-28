import React, { useState } from "react";
import './App.css'
import LeftSidebar from './LeftSideBar/LeftSidebar.js'
import RightSidebar from './RightSideBar/RightSidebar.js'
import ChatWrap from './Chat/ChatWrap.js'


function App() {
  return (
    <div className='wrap'>
      <LeftSidebar></LeftSidebar>
      <ChatWrap></ChatWrap>
      <RightSidebar></RightSidebar>
    </div>
  );
}


export default App;
