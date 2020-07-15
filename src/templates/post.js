import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"


const Post = ({ data: { post } }) => {
  return (
    <Layout>
          <>
          <h1>{post.document.name}</h1>
          <p>{post.document.createdTime}</p>
          <div
              dangerouslySetInnerHTML={{__html: post.childMarkdownRemark.html}}
          />
      </>
    </Layout>
  )
}

export const query = graphql`
  query($path: String) {
    post: googleDocs(document: {path: {eq: $path}}) {
      document {
        createdTime(formatString: "")
        name
      }
      childMarkdownRemark {
        html
      }
    }
  }
`

export default Post
