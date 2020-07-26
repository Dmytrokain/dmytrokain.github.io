import React, { createRef, useEffect } from "react"
import { Link } from "gatsby"
import postCardStyles from "./postCard.module.css"
import Image from 'gatsby-image'

const PostCard = ({ title, date, description, readTime, image, slug }) => {

  return (
    <article className={postCardStyles.article}>
      <div>
      <div className={postCardStyles.imageWrapper}>
          {image && (
            <Link to={slug} style={{margin: '0'}}>
              <Image className={postCardStyles.image} fixed={image.childImageSharp.fixed} />
            </Link>
          )}
        <div className={postCardStyles.imageOverlay}> 
        
        <header className={postCardStyles.postHeaderContainer}>
          <h3 className={postCardStyles.postHeader}>
            <Link to={slug}>
                {title}
            </Link>
          </h3>
            <small>
              <p className={postCardStyles.readTime}>{date} ⌛ {readTime} min read</p>
            </small>

          <p className={postCardStyles.postDescription}>{description}</p>
        </header>
        </div>
      </div>
      </div>
    </article>
  )
}

export default PostCard