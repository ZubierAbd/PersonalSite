import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav style={{ background: `#ABD` }} className="border fixed split-nav">
    <div style={{ textDecoration: `none` }} className="nav-brand">
      <h3>
        {" "}
        <Link to="/">{siteTitle}</Link>
      </h3>
    </div>
    <div className="collapsible">
      <input id="collapsible1" type="checkbox" name="collapsible1" />
      <button>
        <label for="collapsible1">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </label>
      </button>
      <div className="collapsible-body">
        <ul style={{ margin: `15 0` }} className="inline">
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Writing</Link>
          </li>
          <li>
            <Link>Projects</Link>
          </li>
          <li>
            {" "}
            <Link>About</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
