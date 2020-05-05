import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Project = props => {
  let data = props.object
  let name = data.name ? data.name : "PlaceHolderName"
  let URL = data.URL ? data.URL : "www.google.com"
  let img = props.image ? props.image : ""
  let description = data.description ? data.description : "something somethin g"
  let technology = data.tech ? data.tech : "React"

  return (
    <div
      class="card"
      style={{ width: "33%", margin: "20px", border: "1px solid #454545" }}
    >
      <div class="card-body">
        <h4 class="card-title">{name}</h4>
        <h5 class="card-subtitle">{technology}</h5>
        <p class="card-text">{description}</p>
        <button>
          <a href={URL}>Let's check it out</a>
        </button>
      </div>
    </div>
  )
}

export default Project
