import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ marginBottom: `10px` }}>Hello There</h1>
    <div>
      <h4>
        My name is <kbd>Zubier</kbd>.
      </h4>
      <p>Welcome to my little corner of the internet</p>
      <p>
        I am a fullstack developer working in <kbd>Toronto</kbd>
      </p>
    </div>
  </Layout>
)

export default IndexPage
