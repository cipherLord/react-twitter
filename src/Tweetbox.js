import React from 'react'
import { Avatar, Button} from "@material-ui/core";
import "./css/TweetBox.css"
function Tweetbox() {
    return (
        <div className = "tweetBox">
            <form>
                <div className= "tweetBox_input">
                    <Avatar src =""></Avatar>
                    <input placeholder = "What's happening?" type = "text"/>
                    {/* <input placeholder = "Image URL" type = "text"/> */}
                </div>
                <Button className = "tweetBox_button">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
