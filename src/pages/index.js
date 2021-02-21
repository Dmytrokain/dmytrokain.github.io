import React from "react"
import { Link } from "gatsby"

import '../styles/index.css'
import Layout from "../components/layout/layout"
import BlogFeed from "../components/blogFeed/blogFeed"
import { useStaticQuery, graphql } from "gatsby"


const IndexPage = () => {
  const allPosts = useStaticQuery(graphql`
      query allPosts {
        allMarkdownRemark {
          nodes {
            frontmatter {
              date
              title
              tags
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


  return(
    <Layout>
      <BlogFeed allPosts={allPosts} />
    </Layout>
  )
}

export default IndexPage
