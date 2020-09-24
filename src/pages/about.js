import React from "react"
import Layout from "../components/layout"
import TechCard from "../components/techCard"
import { DiJavascript1 } from "react-icons/di"
import { FaHtml5, FaCss3Alt, FaJava, FaGit, FaReact, FaAngular, FaDocker, FaAws } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import SEO from "../components/seo"


const AboutPage = () => {

  /**Add Technology Map here so that we loop over it instead of individually adding the icons. */


  return (
    <Layout>
      <SEO title="About Zubier" />
      <div style={{ minHeight: `375px`, textAlign: "center " }}>
        <h2>About Me</h2>

        <div >
          <p style={{ width: "80vw" }}>
            I am a FullStack Developer living in Toronto and currently work for one of the largest Banks in Canada in Capital Markets. I am equally at home working both front end and back and switch depending on the role.             I am also an internationally published short story author, hailing
          from Bangladesh{" "}
          </p>

          <p>
            <h3>Technologies I know</h3>
            <ul className="tech-container">
              <Tech icon={<DiJavascript1 />} name="Javascript" />
              <Tech icon={<FaHtml5 />} name="HTML" />
              <Tech icon={<FaCss3Alt />} name="CSS" />
              <Tech icon={<FaJava />} name="Java" />
              <Tech icon={<FaGit />} name="GIT" />
              <Tech icon={<FaReact />} name="React" />
              <Tech icon={<FaAngular />} name="Angular" />
            </ul>
          </p></div>

        <p>
          <h3>Technologies I am learning or planning to learn</h3>
          <ul className="tech-container">
            <Tech icon={<FaDocker />} name="Docker" />
            <Tech icon={<FaAws />} name="AWS" />
            <Tech icon={<SiMongodb />} name="MongoDb" />
          </ul>
        </p>
      </div>
    </Layout>
  )
}

const Tech = ({ icon, name }) => {
  return (
    <div className="TechCard">
      <p className="techy">{icon}</p>
      <p >{name}</p>
    </div>
  )
}

export default AboutPage
