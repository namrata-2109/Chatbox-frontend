import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
function SidebarChat({id,  addNewChat }) {
    const [seet1, setSeet1] = useState('');
    useEffect(() => {
        setSeet1(Math.floor(Math.random() * 100))

    }, [])
    const createChat=()=>{
      const roomName=prompt("Please enter name");
    };

    return  !addNewChat ? (
        <>
        <div className="sidebarchat">
            <Avatar src={`http://avatars.dicebear.com/api/human/ ${seet1}.svg`} />
            <div className="sidebarchat_info">
                <h4> Esther Howard</h4>
                <p> Of course I can,...</p>
            </div>
        </div>
        <div className="sidebarchat">
            <Avatar src={`http://avatars.dicebear.com/api/human/ ${seet1}.svg`} />
            <div className="sidebarchat_info">
                <h4> Marvin McKinney</h4>
                <p>That’s great!!</p>
            </div>
        </div>
        <div className="sidebarchat">
            <Avatar src={`http://avatars.dicebear.com/api/human/ ${seet1}.svg`} />
            <div className="sidebarchat_info">
                <h4> Floyd Miles</h4>
                <p> Let me know...</p>
            </div>
        </div>
        <div className="sidebarchat">
            <Avatar src={`http://avatars.dicebear.com/api/human/ ${seet1}.svg`} />
            <div className="sidebarchat_info">
                <h5> Albert Flores</h5>
                <p> All faith needs feet...</p>
            </div>
        </div>
        <div className="sidebarchat">
            <Avatar src={`http://avatars.dicebear.com/api/human/ ${seet1}.svg`} />
            <div className="sidebarchat_info">
                <h5> Brooklyn Simmons </h5>
                <p>Glad to hear from you...</p>
            </div>
        </div>
        </>
        
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2> Add New Chat</h2>
        </div>
    );
}
export default SidebarChat;
