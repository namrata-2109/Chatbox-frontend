import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ClearIcon from '@material-ui/icons/Clear';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import NearMeIcon from '@material-ui/icons/NearMe';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React, { useState } from 'react';
import './Chat.css';
function Chat() {
    const [input, setInput] = useState("");
    const sendMess = (e) => {
        e.preventDefault();
        //console.log("tjsvwee",input);
        setInput("");
    }
    return (
        <div className="chat">
            <div className='chat-top'>
                <div className='profile_rect'>
                    <Avatar src="reat1.jpg" />
                    <h5 className='profile_text'>Prakash</h5>
                </div>
                <div className='arrow_icon'>
                    <ArrowDropDownIcon />
                </div>
            </div>
            <div className="chat_header">

                {<div className="chat_headerRight">
                    <div className='chat_header-avatar'>
                        <Avatar src="reat1.jpg" />
                        {/* <div className="sidebarchat">
                            <h4> Dr. Shilpa M</h4>
                        </div> */}
                        {/* <h3>Rupesh Kumar</h3> */}
                    </div>
                    <div className='chat-header-name'>
                        <h3>Esther</h3>
                    </div>
                    <div className="chat-headers-icon">
                        <MoreVertIcon />
                        {/* <LocalHospitalRoundedIcon />
                        <p className="chat-headers-text">  Doctor </p> */}
                    </div>

                    <div className="chat-headers-icon">
                        <ClearIcon />
                        {/* <QueryBuilderIcon />
                        <p className="chat-headers-text"> Appionments</p> */}
                    </div>

                    <div className="chat-headers-icon">
                        {/* <ChatBubbleOutlineRoundedIcon />
                        <p className="chat-headers-text"> Chat with Doctor</p> */}
                    </div>


                </div>}

            </div>

            <div className="chat_body">
                <div className='chat_avatar'>
                    <Avatar src="reat1.jpg" />
                    <p className="chat_messege">

                        {/* <span className="chat_name"> rupesh kumar</span> */}
                        Hii Prakash !
                        Feels like it’s been a while! How are you? Do you
                        have any time for the remainder of the week to
                        help me with an ongoing  project?

                        <span className="chat_time">  8:00 </span>
                    </p>
                </div>
                <div className='chat_avatar_right'>

                    <p className="chat_reciever ">
                        {/* <span className="chat_name"> rupesh kumar</span> */}

                        Hii Easther, glad to hear from you, I’m fine, What
                        about you? and how it’s going with the velocity
                        website? off cours, I’ll help with this project

                        <span className="chat_time"> 8:01 </span>

                    </p>
                    <Avatar src="reat1.jpg" />
                </div>

            </div>
            <div className="chat_footer">
                {/* <InsertEmoticonIcon /> */}
                <form>
                    <input type="text" placeholder="Write a message " value={input} onChange={(e) =>
                        setInput(e.target.value)} />

                    <button onClick={sendMess} type="submit"> Send a message</button>
                </form>
                <AttachFileIcon />

                <NearMeIcon />
            </div>
        </div>
    )
}
export default Chat;