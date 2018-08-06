import React from 'react'
import Link from 'gatsby-link'

const footerStyle = {
  margin: '0 auto',
  maxWidth: 960,
  padding: '1.45rem 1.0875rem',
}

const footerText = {
  fontSize: '12px', 
  lineHeight: '1.5',
}

const Footer = ({ siteTitle }) => (
  <div style = {footerStyle}>
    <p style = {footerText}>
      © {new Date().getFullYear()} Dan Merino <br />
      made with gatsby, react, and tears
      <span role="img" aria-label="tears"> 💦 </span>
    </p>
  </div>
)

export default Footer
