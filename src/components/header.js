import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

import headerStyles from './header.module.css'
import TwitterIcon from '../images/twitter.png'
import GithubIcon from '../images/github.png'

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          twitterLink
          githubLink
        }
      }
    }
  `)

  const { title, twitterLink, githubLink } = data.site.siteMetadata;

  return (
    <nav>
      <ul className={headerStyles.navList}>
          <li className={headerStyles.blogName}>
            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
              {title}
            </Link>
          </li>
        <li>
          <a href={twitterLink}>
            <img className={headerStyles.navItem} src={TwitterIcon}/>
          </a>
        </li>
        <li>
          <a href={githubLink}>
            <img className={headerStyles.navItem} src={GithubIcon}/>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
