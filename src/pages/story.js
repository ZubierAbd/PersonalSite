import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout" //need to replace this with story and article specific layout

const storyPage = ({ data }) => (
  <Layout>
    <h1>Latest Stories</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{" "}
          {post.node.frontmatter.date}
        </small>
        <br></br>
        <br></br>
        <p>{post.node.frontmatter.summary}</p>
        <Link to={post.node.frontmatter.path}>Check it out</Link>
        <br></br>
        <br></br>
        <hr></hr>
      </div>
    ))}
  </Layout>
)

export const StoryQuery = graphql`
  query storyIndexQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "story" } } }) {
      edges {
        node {
          id
          frontmatter {
            path
            author
            date
            title
            summary
          }
        }
      }
    }
  }
`

export default storyPage
