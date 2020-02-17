import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <article className="article">
          <h5 style={{ marginBottom: `0` }} className="article-title">
            <Link
              style={{ background: `none`, color: `#323232` }}
              to={post.node.frontmatter.path}
            >
              {post.node.frontmatter.title}
            </Link>
          </h5>
          <h4 className="article-meta">
            Posted by {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </h4>
          <p>{post.node.frontmatter.summary}</p>{" "}
          <button>
            <Link
              style={{ background: `none` }}
              to={post.node.frontmatter.path}
            >
              Read more
            </Link>
          </button>
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
          }
        }
      }
    }
  }
`

export default BlogPage
