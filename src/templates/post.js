import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        date
        description
        title
      }
      html
    }
  }
`

const Post = (props) => {
  console.log(props)
  return (
    <Layout>
       <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>  
    </Layout>
  )
}


export default Post
