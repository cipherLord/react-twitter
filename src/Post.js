import React from 'react'
import "./css/Post.css"
import { Avatar } from "@material-ui/core"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishIcon from "@material-ui/icons/Publish"


function Post({
    avatar,
    displayName,
    userName,
    isVerified,
    timeOfPost,
    message,
    image
}) {
    return (
        <div className = "post">
            <div className = "post-avatar">
                <Avatar src = {avatar}/>
            </div>
            <div className= "post-body">
                <div className = "post-header">
                    <div className = "post-header-text">
                        <h3>
                            {displayName}{" "} 
                            <span className = "post-header-special">
                                {isVerified && <VerifiedUserIcon className = "post-badge"/>} @{userName}
                            </span>
                        </h3>
                    </div>
                    <div className = "post-header-description">
                        <p>{message}</p>
                    </div>
                </div>
                <img src = {image} alt = ""/>
                <div className= "post-footer">
                    <ChatBubbleOutlineIcon fontSize = "small"/>
                    <RepeatIcon fontSize = "small"/>
                    <FavoriteBorderIcon fontSize = "small"/>
                    <PublishIcon fontSize = "small"/>

                </div>
            </div>
        </div>
    )
}

export default Post
