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
              fixed(height: 500, width: 890) {
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
      <div className={blogFeedStyles.blogFeedTitle}>
        Recent Posts
        <div className={blogFeedStyles.border}></div>
      </div>
      
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
