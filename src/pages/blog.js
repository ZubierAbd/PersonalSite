import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{" "}
          {post.node.frontmatter.date}
        </small>
        <br></br>
        <br></br>
        <Link to={post.node.frontmatter.path}>Check it out</Link>
        <br></br>
        <br></br>
        <hr></hr>
      </div>
    ))}
  </Layout>
)

export const BlogQuery = graphql`
  query blogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            author
            date
            title
          }
        }
      }
    }
  }
`

export default BlogPage
