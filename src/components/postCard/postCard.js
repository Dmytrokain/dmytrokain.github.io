import React, { createRef, useEffect } from "react"
import { Link, navigate } from "gatsby"
import {Route} from 'react-router'
import postCardStyles from "./postCard.module.css"
import Image from 'gatsby-image'
import { withPrefix } from 'gatsby';


const PostCard = ({ title, date, description, readTime, image, slug }) => {

  return (
    <article className={postCardStyles.article}>
      <div>
        <div className={postCardStyles.imageWrapper}>
          {image && (
            <Link to={withPrefix(slug)} style={{margin: '0', position: 'absolute'}}>
              <Image className={postCardStyles.image} fixed={image.childImageSharp.fixed} />
            </Link>
          )}
        </div>

        <header className={postCardStyles.postHeaderContainer}>
          <h3 className={postCardStyles.postHeader}>
            <Link to={withPrefix(slug)}>
              {title}
            </Link>
          </h3>
          <small>
            <p className={postCardStyles.readTime}>{date} ⌛ {readTime} min read</p>
          </small>

          <p className={postCardStyles.postDescription}>{description}</p>
          <Link to={withPrefix(slug)} className={postCardStyles.readMore}>Read more</Link>
        </header>
      </div>
    </article>
  )
}

export default PostCard
