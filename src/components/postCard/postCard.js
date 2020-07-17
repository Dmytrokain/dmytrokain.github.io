import React from "react"
import { Link } from "gatsby"
import postCardStyles from "./postCard.module.css"
import Image from 'gatsby-image'

const PostCard = ({ title, date, description, readTime, image, slug }) => {
  return (
    <article className={postCardStyles.article}>
      {image && (
        <Link to={slug} style={{margin: '0'}}>
          <Image className={postCardStyles.image} fixed={image.childImageSharp.fixed} />
        </Link>
      )}
      <header className={postCardStyles.postHeaderContainer}>
        <h3 className={postCardStyles.postHeader}>
          <Link to={slug}>
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