import React from "react"
import { Link, graphql } from "gatsby"
import {
  FaAngular,
  FaReact,
  FaRegSmile,
  FaRegNewspaper,
  FaJava,
  FaCss3,
} from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"

const assignIcon = name => {
  switch (name) {
    case "react":
      return <FaReact />
    case "angular":
      return <FaAngular />
    case "smile":
      return <FaRegSmile />
    case "newspaper":
      return <FaRegNewspaper />
    case "Java":
      return <FaJava></FaJava>
    case "CSS":
      return <FaCss3></FaCss3>
    default:
      return null
  }
}

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog Posts" />
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <article className="article">
          <h5 style={{ marginBottom: `0` }} className="article-title">
            <Link
              style={{ background: `none`, color: `#323232` }}
              to={`/` + post.node.frontmatter.path}
            >
              {" "}
              <span
                style={{
                  marginRight: `15px`,
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
          <Link style={{ background: `none` }} to={`/` + post.node.frontmatter.path}>
            {" "}
            <button>Read more </button>
          </Link>
        </article>
        <hr></hr>
      </div>
    ))}
  </Layout>
)

export const BlogQuery = graphql`
  query blogIndexQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { ne: "story" } } }) {
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

export default BlogPage
