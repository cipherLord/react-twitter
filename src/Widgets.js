import React from 'react'
import "./css/Widgets.css"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
    return (
        <div className = "widgets">
            <div className = "widgets-input">
                <SearchIcon className = "widgets-searchIcon" />
                <input placeholder = "Search Twitter" type = "text" />
            </div>

            <div className = "widgets-widgetContainer">

                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1385519060188901384"} />

                <TwitterTimelineEmbed
                    sourceType = "profile"
                    screenName = "LetsTalk_FPL"
                    options = {{height: 400}}
                />

                <TwitterShareButton
                    url = {"https://www.facebook.com/sarthakjohnson.prasad/"}
                    options = {{text: "I am using your twitter-clone", via: "meme_cyborg"}}
                />

            </div>
        </div>
    )

}

export default Widgets
