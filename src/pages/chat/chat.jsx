import React from "react";
import "./Chat.css"

function Chat() {
  return (
  <React.Fragment>
    <div class="purple_block" id="calendar"><h1>Chat Room</h1></div>
    <div id="chat_body">
      <h3 style={{marginBottom: "30px"}}>CHAT ROOMS</h3>
      <div style={{display: "flex"}}>
        <p>Sort by: Recent Activity | </p>
        <img alt="maganafing glass" src="/media/maganafing_glass.png" height={30} width={30}/>
      </div>

      <div id="rooms">
        <div id="sort">
          <p class="cats">All(1)</p>
          <p class="cats">My Groups</p>
          <p class="cats">Suggested Groups</p>
        </div>
        
        <div id="group_card">
          <img alt="group of people" src="/media/groups.jpg" width="130px" height="60px" style={{paddingRight: "1%"}}/>
          <div style={{width: "20%"}}>
            <p><b>My Site 4 Group</b></p>
            <div id="substext">
              <p>Private &nbsp; · &nbsp; 1 member</p>
            </div>  
          </div>

          <div id="button_enclosing">
            <button class="enroll">Request To Join</button>
          </div>
        </div>

      </div>

    </div>
  </React.Fragment>
  );
}

export default Chat;