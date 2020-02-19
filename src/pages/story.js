import React from "react"
import { Link, graphql } from "gatsby"
import "../components/styles.css"
import {
  FaSkull,
  FaCity,
  FaSnowflake,
  FaBug,
  FaCamera,
  FaHeartbeat,
} from "react-icons/fa"
import { GiSnakeBite } from "react-icons/gi"

import Layout from "../components/layout"

const assignIcon = name => {
  switch (name) {
    case "faSnowflake":
      return <FaSnowflake />
    case "faCity":
      return <FaCity />
    case "faSkull":
      return <FaSkull />
    case "bug":
      return <FaBug />
    case "camera":
      return <FaCamera />
    case "heartbeat":
      return <FaHeartbeat />
    case "snake":
      return <GiSnakeBite />
    default:
      return null
  }
}

const storyPage = ({ data }) => (
  <Layout>
    <h1 style={{ marginBottom: `0` }}>Latest Stories</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <article className="article">
          <h5 style={{ marginBottom: `0` }} className="article-title">
            <Link
              style={{ background: `none` }}
              to={post.node.frontmatter.path}
            >
              <span
                className="story-icon"
                style={{
                  marginRight: `10px`,
                  bottom: `-6px`,
                  position: `relative`,
                }}
              >
                {assignIcon(post.node.frontmatter.icon)}
              </span>
              {post.node.frontmatter.title}
            </Link>
          </h5>
          <h4 className="article-meta">
            Posted by {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </h4>
          <p>{post.node.frontmatter.summary}</p>{" "}
          <Link style={{ background: `none` }} to={post.node.frontmatter.path}>
            {" "}
            <button>Read more </button>
          </Link>
        </article>
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
            icon
          }
        }
      }
    }
  }
`

export default storyPage
