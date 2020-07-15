import React from "react"
import { Link } from "gatsby"
import postStyles from "../components/post.module.css"

const PostCard = ({ data }) => {
  const { title, date, description, readTime } = data.frontmatter

  return (
    <article className={postStyles.article}>
      <header>
        <h3 className={postStyles.postHeader}>
          <Link to={data.fields.slug}>
              {title}
          </Link>
        </h3>
          <small>
            <p>{date} ⌛ {readTime} min read</p>
          </small>

        <p className={postStyles.postDescription}>{description}</p>
      </header>
    </article>
  )
}

export default PostCard