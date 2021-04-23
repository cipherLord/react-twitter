import React, {useState} from 'react'
import { Avatar, Button} from "@material-ui/core";
import "./css/TweetBox.css"
import db from './firebase';
function Tweetbox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImg, setTweetImg] = useState("");
    const sendTweet = (event)=>{
        // Stop from refreshing the whole page 
        event.preventDefault();

        db.collection("posts").add({
            displayName: "John Doe",
            userName: "johndoe",
            isVerified : true,
            message: tweetMessage,
            image: tweetImg,
            avatar: "https://cdn.myanimelist.net/images/userimages/8100182.jpg?t=1619083200"
        });

        setTweetMessage("");
        setTweetImg("");
    };

    return (
        <div className = "tweetBox">
            <form>
                <div className= "tweetBox_input">
                    <Avatar src ="https://cdn.myanimelist.net/images/userimages/8100182.jpg?t=1619083200"></Avatar>
                    <input
                    onChange = {(event)=> setTweetMessage(event.target.value)}
                    value = {tweetMessage}
                    placeholder = "What's happening?" 
                    type = "text"
                    />
                </div>
                <input
                value = {tweetImg}
                onChange = {(event) => setTweetImg(event.target.value)} 
                className = "tweetBox_imageinput" 
                placeholder = "Optional : Enter Image URL" 
                type = "text"/>
                
                <Button 
                onClick = {sendTweet}
                className = "tweetBox_button"
                type = "submit"
                >Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
