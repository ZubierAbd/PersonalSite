import React from "react"
import Layout from "../components/layout"
import TechCard from "../components/techCard"
import { DiJavascript1 } from "react-icons/di"
import { FaHtml5, FaCss3Alt, FaJava, FaGit, FaReact, FaAngular } from 'react-icons/fa'
import SEO from "../components/seo"


const AboutPage = () => {

  /**Add Technology Map here so that we loop over it instead of individually adding the icons. */


  return (
    <Layout>
      <SEO title="About Zubier" />
      <div style={{ minHeight: `375px`, textAlign: "center " }}>
        <h2>About Me</h2>

        <div >
          <p style={{}}>
            I am a FullStack Developer living in Toronto and currently work for one of the largest Banks in Canada in Capital Markets. I am equally at home working both front end and back and switch depending on the role.             I am also an internationally published short story author, hailing
          from Bangladesh{" "}
          </p>

          <p>
            <h4>Technologies I know</h4>
            <ul className="tech-container">
              <span className="techy"><DiJavascript1 /><span> </span></span>
              <span className="techy"><FaHtml5 /><span> </span></span>
              <span className="techy"><FaCss3Alt /><span> </span></span>
              <span className="techy"><FaJava /><span> </span></span>
              <span className="techy"><FaGit /><span> </span></span>
              <span className="techy"><FaReact /><span> </span></span>
              <span className="techy"><FaAngular /><span> </span></span>
            </ul>
          </p></div>
      </div>
    </Layout>
  )
}

export default AboutPage
