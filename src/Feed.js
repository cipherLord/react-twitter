import React, {useState, useEffect} from 'react'
import './css/Feed.css'
import Tweetbox from './Tweetbox'
import Post from './Post'
import db from './firebase'

function Feed() {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
      db.collection('posts').onSnapshot(snapshot =>(
        setPosts(snapshot.docs.map(doc => doc.data()))  
      ))
    }, [])
    return (
        <div className = "feed">
           {/* Header */}
            <div className = "feed_header">
              <h2>Home</h2>  
            </div>
           {/* TweetBox */}
            <Tweetbox/>
           {/* Post */}
           {posts.map(post =>(
              <Post 
              displayName = {post.displayName} 
              userName = {post.userName} 
              isVerified = {post.isVerified} 
              message = {post.message}
              avatar = {post.avatar}
              image = {post.image}
              />
           ))}
        </div>
    )
}

export default Feed
