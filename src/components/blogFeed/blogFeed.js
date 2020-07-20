import React from "react"
import blogFeedStyles from "./blogFeed.module.css"

import PostCard from "../postCard/postCard"
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
            image {
            childImageSharp {
              fixed(height: 200, width: 300) {
                ...GatsbyImageSharpFixed  
              }
            }
           }
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
      <div style={{margin: '16px'}}>Blog Posts</div>
      
      { data.allMarkdownRemark.nodes.map( (post) => {
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