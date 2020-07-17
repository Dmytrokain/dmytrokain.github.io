import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout/layout"
import postStyles from "./post.module.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        date
        description
        title
        readTime
      }
      html
    }
  }
`

const Post = (props) => {
  const { previousPage, nextPage } = props.pageContext
  const { title, date, readTime } = props.data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={postStyles.postContainer}>
        <div className={postStyles.postHeader}>
          <h1>{title}</h1>
          <small>
            <p>{date} ⌛ {readTime} min read</p>
          </small>
        </div>
        
        <div className={postStyles.postBody}
             dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}} />
        
        <nav style={{
           margin: "60px 20px 20px 20px"
        }}>
          <ul style={{  
            display: 'flex',
            justifyContent: 'space-between',
            listStyle: 'none'
          }}>
            
            {previousPage && (
              <li>
                <Link to={`/${previousPage.fields.slug}`}>⟸ {previousPage.frontmatter.title}</Link>
              </li>
            )}
            {nextPage && (
              <li>
                <Link to={`/${nextPage.fields.slug}`}>{nextPage.frontmatter.title} ⟹</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </Layout>
  )
}


export default Post
