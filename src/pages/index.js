import React from "react"
import { Link } from "gatsby"

import '../styles/index.css'
import Layout from "../components/layout/layout"
import About from "../components/about/about"
import BlogFeed from "../components/blogFeed/blogFeed"

const IndexPage = () => (
  <Layout>
    <About />
    <BlogFeed />
  </Layout>
)

export default IndexPage
