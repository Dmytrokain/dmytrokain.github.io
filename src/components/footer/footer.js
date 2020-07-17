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
    <div className={footerStyles.footer}>
      <ul style={{display: "flex"}}>
        <li>
          <a>Twitter</a>
        </li>
        <li>
          <a>Github</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer