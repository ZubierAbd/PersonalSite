import React from "react"

const footerStyles = {
  textAlign: `center`,
  width: `100vw`,
  background: `#222`,
  color: `white`,
}

const Footer = () => {
  return (
    <div>
      <footer style={footerStyles}>
        © {new Date().getFullYear()}, Built with ❤️
      </footer>
    </div>
  )
}

export default Footer