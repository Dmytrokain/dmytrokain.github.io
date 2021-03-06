import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

import headerStyles from './header.module.css'
import TwitterIcon from '../../images/twitter.png'
import GithubIcon from '../../images/github.png'
import DropdownIcon from '../../images/dropdown.png'

  
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
        <li className={headerStyles.navItem}>
          <Link to="/webAnalytics">
            Web Analytics 💻
          </Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/aboutMe">
            About me
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
