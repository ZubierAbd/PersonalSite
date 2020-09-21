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
    github: '',
    description:
      "This is a simple site created using Angular showcasing some fun animations and the usage of music. Please wait a moment for the sound files to load before you start clicking them",
  }
  let data2 = {
    name: "Portfolio",
    tech: "Angular",
    URL: "https://saima-ef594.firebaseapp.com/",
    github: '',
    description:
      "This is a portfolio site I have created for a friend using Angular. The Angular ",
  }

  let data3 = {
    name: "Tomato Timer",
    tech: "React",
    URL: "https://tomato-timer-abd.herokuapp.com/",
    github: 'https://github.com/ZubierAbd/TomatoTimerReact',
    description:
      "Small project I have made using React to practice using React hooks. This is based on the Tomato Timer and works the same way. You click on a button, a timer starts for 25 mins alerting you ",
  }


  let data4 = {
    name: "Dota Hangman",
    tech: "React",
    URL: "https://dota-hangman.herokuapp.com/",
    github: 'https://github.com/ZubierAbd/Dota2Hangman',
    description:
      "Hangman clone based on the video game Dota 2 - This is a simple hangman game which you can play on your browser based on the Dota 2 hereos.",
  }

  let data5 = {
    name: "React Tic Tac Toe x 5",
    tech: "React",
    URL: "https://tictactoe-react-x5.herokuapp.com/",
    github: 'https://github.com/ZubierAbd/tic-tac-toeX5-react',
    description:
      "Modified TicTacToe game I made. In this version the board has 4*4 rows and columns to make the game more dynamic.",
  }

  let data6 = {
    name: "Pokedex",
    tech: "React",
    URL: "https://pokedex-zubierabd.herokuapp.com/",
    github: '',
    description:
      "Pokedex created using React JS using the PokeApi.",
  }

  let projectArray = [data1, data2, data3, data4, data5, data6]
  return (
    <div style={{ margin: '20px' }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {projectArray.map(ele => (
          <Project object={ele} />
        ))}
      </div>
    </div>
  )
}

export default ProjectPage
