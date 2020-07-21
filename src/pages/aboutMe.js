import React from "react"
import { Link, useStaticQuery } from "gatsby"

import '../styles/aboutMe.css'
import Layout from "../components/layout/layout"
import AvatarIcon from '../images/avatar.jpeg'
import TwitterIcon from '../images/twitter.png'
import GithubIcon from '../images/github.png'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MediaLinksQuery {
      site {
        siteMetadata {
          title
          twitterLink
          githubLink
          email
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="about-container">
        <div className="about-title">
          <p>About me</p>          
          
          <div className="about-border"></div>
          <img src={AvatarIcon} className="avatar"></img>
          <p className="email">{data.site.siteMetadata.email}</p>
          
          <ul className="social-refs">
            <li>
              <a href={data.site.siteMetadata.twitterLink} className="media-icon">
                <img src={TwitterIcon}></img>
              </a>
            </li>
            <li>
              <a href={data.site.siteMetadata.githubLink} className="media-icon">
                <img src={GithubIcon}></img>
              </a>
            </li>
          </ul>
        </div>

        <div className="about-description">
          <p>Hi, I'm Dmytro. I'm a software engineer from Lviv, Ukraine 🇺🇦</p>
          <p>Thank you for visiting my blog. I have created it for a few reasons: </p>
          <ul style={{paddingLeft: '30px'}}>
            <li>I am not an active user in social networks like Instagram and etc. Rarely I use Twitter to post my short thoughts or emotions. But sometimes I have more to tell about or share my own experience about something and the blog is exactly the right thing for this 🙂 </li>
            <li>I really like to work with new technologies, so this blog was a great ability to try them out. Of course, I will continually improve this blog 💪</li>
            <li>I hope someday to open this blog and see how cool the writer I was 😂</li>
          </ul>
            
          </div>
      </div>
    
    </Layout>
  )
}

export default IndexPage
