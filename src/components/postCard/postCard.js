import React from "react"
import { Link } from "gatsby"
import postCardStyles from "./postCard.module.css"

const PostCard = ({ data }) => {
  const { title, date, description, readTime } = data.frontmatter

  return (
    <article className={postCardStyles.article}>
      <header>
        <h3 className={postCardStyles.postHeader}>
          <Link to={data.fields.slug}>
              {title}
          </Link>
        </h3>
          <small>
            <p>{date} ⌛ {readTime} min read</p>
          </small>

        <p className={postCardStyles.postDescription}>{description}</p>
      </header>
    </article>
  )
}

export default PostCard