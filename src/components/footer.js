import React from "react"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

const footerStyles = {
  textAlign: `center`,
  width: `100vw`,
  background: `#222`,
  color: `white`,
  padding: `10px`,
  position: `fixed`,
  bottom: 0,
  left: `0`,
  opacity: `0.8`,
}

const Footer = () => {
  return (
    <div>
      <footer style={footerStyles}>
        <div style={{ display: `inline` }}>
          <a
            style={{ margin: `0 5px` }}
            role="link"
            href="https://www.linkedin.com/in/zubierabd/"
          >
            <FaLinkedin size="1.2rem" color="white" />
          </a>
          <a
            style={{ margin: `0 5px` }}
            role="link"
            href="https://github.com/ZubierAbd"
          >
            <FaGithub size="1.2rem" color="white" />
          </a>
          <a
            style={{ margin: `0 5px` }}
            role="link"
            href="https://www.instagram.com/zubierabd/"
          >
            <FaInstagram size="1.2rem" color="white" />
          </a>
        </div>
        <div> © {new Date().getFullYear()}, Built with ❤️</div>
      </footer>
    </div>
  )
}

export default Footer
