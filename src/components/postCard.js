import React from "react"
import { Link } from "gatsby"
import postStyles from "../components/post.module.css"

const PostCard = () => {
  return (
    <article className={postStyles.article}>
      <header>
        <h3 className={postStyles.postHeader}>
          <Link to="/">
              {"How I created my blog with Gatsby"}
          </Link>
        </h3>
          <small>
            <p>July 15, 2020 ⌛ 10 min read</p>
          </small>

        <p className={postStyles.postDescription}>Story about my equainted with Gatsby and frontend</p>
      </header>
    </article>
  )
}

export default PostCard