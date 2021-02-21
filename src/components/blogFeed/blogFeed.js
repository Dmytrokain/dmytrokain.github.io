import React from "react"
import blogFeedStyles from "./blogFeed.module.css"

import PostCard from "../postCard/postCard"

const BlogFeed = ({allPosts}) => {
  return (
    <div className={blogFeedStyles.feedContainer}>
      <div className={blogFeedStyles.blogFeedTitle}>
        Recent Posts
        <div className={blogFeedStyles.border}></div>
      </div>
      
      { allPosts.allMarkdownRemark.nodes.map( (post) => {
        const { title, date, description, readTime, image } = post.frontmatter
        
        return <PostCard title={title}
                         date={date}
                         description={description}
                         readTime={readTime}
                         slug={post.fields.slug}
                         image={image}
                />
      })}
    </div>
  )
}

export default BlogFeed
