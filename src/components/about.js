import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

import aboutStyles from './about.module.css'
import AvatarIcon from '../images/avatar.jpeg'


const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitterLink
          author
        }
      }
    }
  `)

  const { author, twitterLink } = data.site.siteMetadata;

  return (
    <div className={aboutStyles.aboutContainer}>
      <img src={AvatarIcon}></img>
      <p className={aboutStyles.aboutDescription}>
          Personal blog by&nbsp;
          <a href={twitterLink} style={{textDecoration: 'none'}}>{author}.</a>
          <br/>
          Me and my daily routine.
      </p>
    </div>
  )
}

export default About
