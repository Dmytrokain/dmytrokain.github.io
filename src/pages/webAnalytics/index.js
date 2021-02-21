import React from "react"
import { Link } from "gatsby"

import '../../styles/index.css'
import Layout from "../../components/layout/layout"
import BlogFeed from "../../components/blogFeed/blogFeed"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {

    const webAnalyticsPosts = useStaticQuery(graphql`
        query webAnalyticsPosts {
        allMarkdownRemark(filter: {frontmatter: {tags: { eq: "Web Analytics"} } }) {
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
  
  return (
    <Layout>
        <BlogFeed allPosts={webAnalyticsPosts} />
    </Layout>
  )
}

export default IndexPage
