import React, { useState } from "react";
import RightPlusBtn from './RightPlusBtn'
import RightContents from './RightContents'
import SlackModal from './SlackModal'

function RightSidebar() {
  const [slackmodal, setslackmodal] = useState(false);

  return (
    <div className="sideBar">
      <RightPlusBtn onChange={function(){
        setslackmodal(!slackmodal);
      }}></RightPlusBtn>
      <RightContents></RightContents>
      {slackmodal==true ? <SlackModal/> : null}
    </div>
  );
}
export default RightSidebar;