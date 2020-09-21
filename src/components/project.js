import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import spheresPhoto from '../images/spheres.png'
import saimaPhoto from '../images/Saima.png'
import Tomato from '../images/Tomato.png'
import ticTac from '../images/TicTac.png'
import pokemonPhoto from '../images/Pokemon.png'
import Hangman from '../images/DotaHangman.png'

const Project = props => {
  let data = props.object
  let name = data.name ? data.name : "PlaceHolderName"
  let URL = data.URL ? data.URL : "www.google.com"
  let img = props.image ? props.image : ""
  let description = data.description ? data.description : "something something"
  let technology = data.tech ? data.tech : "React"

  const choosePhoto = name => {
    switch (name) {
      case "Spheres":
        return spheresPhoto
      case "Portfolio":
        return saimaPhoto
      case "Tomato Timer":
        return Tomato
      case "Dota Hangman":
        return Hangman
      case "React Tic Tac Toe x 5":
        return ticTac
      case "Pokedex":
        return pokemonPhoto

    }
  }

  return (
    <div
      class="card"
      style={{ width: "30%", margin: '10px', border: "1px solid #454545", alignContent: "center", textAlign: "center" }}
    >
      <img alt={name} style={{ border: '1px solid #fff' }} src={choosePhoto(name)}></img>
      <div class="card-body">

        <h4 class="card-title">{name}</h4>
        <h5 class="card-subtitle">{technology}</h5>
        <p class="card-text">{description}</p>

        <button>
          <a target="_blank" href={URL}>Let's check it out</a>
        </button>
      </div>
    </div>
  )
}

export default Project
