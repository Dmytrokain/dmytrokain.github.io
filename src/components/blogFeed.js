import React from "react"
import blogFeedStyles from "../components/blogFeed.module.css"

import Post from "./postCard"

const BlogFeed = () => {
  return (
    <div className={blogFeedStyles.feedContainer}>
      <div>Blog Posts</div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default BlogFeed