import React from 'react'
import Link from 'gatsby-link'

const headerTextContainer = {
  float: 'right',
  display: 'flex',
  width: '275px',
  justifyContent: 'space-between'
}

const headerText = {
  color: 'white',
  textDecoration: 'none',
}

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'darkslategray',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={headerText}>
          {siteTitle}
        </Link>
      </h1>

      <div style={headerTextContainer}>

        <h3>
          <Link to="/" style={headerText}>
            home
          </Link>
        </h3>

        <h3>
          <a href="https://s3.amazonaws.com/danmer.info/dan-merino-resume.pdf" style = {headerText}>
              resume
          </a>
        </h3>

        <h3>
          <a href={"mailto:danmerino98@gmail.com"} style={headerText}>
            email    
          </a>
        </h3>

      </div>
    </div>
  </div>
)

export default Header
