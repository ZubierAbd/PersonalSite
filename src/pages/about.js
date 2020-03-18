import React from "react"
import Layout from "../components/layout"
import TechCard from "../components/techCard"
import { DiJavascript1 } from "react-icons/di"
import SEO from "../components/seo"

const jsObject = {
  name: "javascript",
  icon: <DiJavascript1 />,
}

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Zubier" />
      <div style={{ minHeight: `375px` }}>
        <h1>About Me</h1>

        <p style={{}}>
          Like I said before, I am a full stack developer currently working in
          Toronto, Ontario.
        </p>

        <p>
          I am also an internationally published short story author, hailing
          from Bangladesh{" "}
          <span role="img" aria-label="bangladeshi-flag">
            🇧🇩
          </span>
          .
        </p>
        <TechCard data={jsObject} />
      </div>
    </Layout>
  )
}

export default AboutPage
