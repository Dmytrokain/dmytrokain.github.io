import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query authorQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const currentYear = new Date().getFullYear();

  return (
    <div className={footerStyles.footer}> Created by @{data.site.siteMetadata.author} {currentYear}</div>
  )
}

export default Footer