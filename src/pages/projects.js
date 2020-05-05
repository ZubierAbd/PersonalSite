import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import UnderConstruction from "./UnderConstruction"

const ProjectPage = () => (
  <Layout>
    {/* <UnderConstruction /> */}
    <NormalProjectPage />
  </Layout>
)

const NormalProjectPage = () => {
  let data1 = {
    name: "Spheres",
    tech: "Angular",
    URL: "https://spheres-2411a.firebaseapp.com/",
    description:
      "This is a simple site created using Angular showcasing some fun animations and the usage of music.",
  }
  let data2 = {
    name: "Portfolio",
    tech: "Angular",
    URL: "https://saima-ef594.firebaseapp.com/",
    description:
      "This is a portfolio site I have created for a friend using Angular. The Angular ",
  }

  let projectArray = [data1, data2]
  return (
    <div>
      <div style={{ display: "flex" }}>
        {projectArray.map(ele => (
          <Project object={ele} />
        ))}
      </div>
    </div>
  )
}

export default ProjectPage
