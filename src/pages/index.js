import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import About from "../components/about"
import BlogFeed from "../components/blogFeed"

const IndexPage = () => (
  <Layout>
    <About />
    <BlogFeed />
  </Layout>
)

export default IndexPage
