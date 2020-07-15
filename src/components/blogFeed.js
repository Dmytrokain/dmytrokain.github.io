import React from "react"
import blogFeedStyles from "../components/blogFeed.module.css"

import PostCard from "./postCard"
import { useStaticQuery, graphql } from "gatsby"

const BlogFeed = () => {

  const data = useStaticQuery(graphql`
    query allPosts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            date
            title
            description
            readTime
          }
          fields {
            slug
          }
          rawMarkdownBody
        }
      }
    }
  `)

  return (
    <div className={blogFeedStyles.feedContainer}>
      <div>Blog Posts</div>
      
      { data.allMarkdownRemark.nodes.map( (post) => 
        <PostCard data={post}/>
      )}
    </div>
  )
}

export default BlogFeed