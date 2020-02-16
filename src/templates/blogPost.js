import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { render } from "react-dom"

const blogPostTemplate = ({ data }) => {
  let post = data.markdownRemark
  console.log(data)
  console.log("CHEKER HERE")
  if (post == null) {
    return (
      <div>
        <Layout>
          <p>Sorry</p>
          <p>This stupid page isn't loading for some reason</p>
          <Link to="/blog">Go back anyway</Link>
        </Layout>
      </div>
    )
  }
  return (
    <div>
      <Layout>
        <h2>{post.frontmatter.title}</h2>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link to="/blog">Go back</Link>
      </Layout>
    </div>
  )
}

export default blogPostTemplate

export const blogQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      excerpt
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
