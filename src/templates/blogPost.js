import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  FaAngular,
  FaReact,
  FaRegSmile,
  FaRegNewspaper,
  FaJava,
} from "react-icons/fa"

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
      return <FaJava />
    default:
      return null
  }
}

const blogPostTemplate = ({ data }) => {
  let post = data.markdownRemark
  if (post == null) {
    return (
      <div>
        <Layout>
          <p>Sorry</p>
          <p>This stupid page isn't loading for some reason</p>
          <button>
            {" "}
            <Link to="/blog">Go back anyway</Link>
          </button>
        </Layout>
      </div>
    )
  }
  return (
    <div>
      <Layout style={{ textAlign: `left` }}>
        <SEO title={post.frontmatter.title} />
        <h2>
          {" "}
          <span
            style={{
              marginRight: `15px`,
              bottom: `-6px`,
              position: `relative`,
            }}
          >
            {assignIcon(post.frontmatter.icon)}
          </span>
          {post.frontmatter.title}
        </h2>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <button>
          {" "}
          <Link to="/blog">Go back</Link>
        </button>
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
        icon
      }
    }
  }
`
