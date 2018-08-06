import React from 'react'
import Link from 'gatsby-link'

const techHeaders = {
  fontSize: '1.62671rem',
  textDecoration: 'underline',
  marginBottom: '0px', 
  paddingTop: '15px'
}

const linkStyle = {
  textDecoration: 'none'
}

const pStyle = {
  marginBottom: '15px'
}

const IndexPage = () => (
  <div>
    <h1 style = {{marginBottom: '5px'}}>me llamo dan</h1>
    <p>and this is diners, drive-ins, and dives</p>

    <p style = {pStyle}>I'm currently a junior at the University of Central Florida (go knights!) studying IT with a minor in Secure Computing and Networks.</p>
    <p style = {pStyle}>Outside of DevOps, my interests include competitive Super Smash Bros., music, and basketball.</p>

    <span>socials: </span>

    <a style = {linkStyle} href="https://www.linkedin.com/in/danthemanmerino/">linkedin</a> - 
    <a style = {linkStyle} href="https://twitter.com/slaminad"> twitter</a> - 
    <a style = {linkStyle} href="https://open.spotify.com/user/1225094990?si=QQm3X3GGQNu1ibaWp4VhFA"> spotify</a>
   
    <h2 style = {techHeaders}>Languages</h2>
    <span>Python, C, Java</span>

    <h2 style = {techHeaders}>Technologies</h2>
    <span>AWS, Linux, React</span>

    <h2 style = {techHeaders}>Tools</h2>
    <span>Docker, Git, CloudFormation</span>
    
  </div>
)

export default IndexPage
