import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "../components/menu"
import ThemeToggle  from "./ThemeToggler"
import './layout.css'
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `var(--text)`,
      marginBottom: `1.5em`,
      padding:'0'
    }}
  >
    <div class="menu">
      <h2 style={{ 
        margin:0,
        minWidth:'40%'
      }}>
        <Link
          to="/"
          style={{
            color: `var(--text)`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
    <Menu/>
    <ThemeToggle/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
