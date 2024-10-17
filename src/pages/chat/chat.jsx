import React from "react";
import "./chat.css"

function chat() {
  return (
  <React.Fragment>
    <div class="purple_block" id="calendar"><h1>Chat Room</h1></div>
    <div id="chat_body">
      <h3>CHAT ROOMS</h3>
      <p>Sort by: Recent Activity | </p>

      <div id="rooms">
        <div id="sort">
          <p class="cats">All(1)</p>
          <p class="cats">My Groups</p>
          <p class="cats">Suggested Groups</p>
        </div>
        
        <div id="group_card">
          <img src="/media/groups.jpg" alt="" width="130px" height="60px" style={{paddingRight: "1%"}}/>
          <div style={{width: "20%"}}>
            <p><b>My Site 4 Group</b></p>
            <div id="substext">
              <p>Private·</p>
              <p>1 member</p>
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

export default chat;