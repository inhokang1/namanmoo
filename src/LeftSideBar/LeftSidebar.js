import React, { useState } from "react";
import LeftPlusBtn from './LeftPlusBtn'
import LeftContents from './LeftContents'
import NotionModal from './NotionModal.js'

function LeftSidebar() {
  const [notionmodal, setnotionmodal] = useState(false);
  return (
    <div className="sideBar">
      <LeftPlusBtn onChange={function(){
        setnotionmodal(!notionmodal);
      }}></LeftPlusBtn>
      <LeftContents></LeftContents>
      {notionmodal==true ? <NotionModal/> : null}
    </div>
  );
}


export default LeftSidebar;