import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="centered">
      <h1>Hello There</h1>
      <div>
        <h4>
          My name is <kbd>Zubier</kbd>.
        </h4>
        <p>Welcome to my little corner of the internet</p>
        <p>
          I am a fullstack developer working in <kbd>Toronto</kbd>
        </p>
        <p>I'm also an internationally published fiction writer</p>
        <p>
          get in touch with me at:{" "}
          <kbd>
            <a
              style={{ color: `white`, cursor: `pointer` }}
              href="mailto:zubierabd@gmail.com"
            >
              zubierabd@gmail.com
            </a>
          </kbd>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
