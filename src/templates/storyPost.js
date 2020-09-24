import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  FaSkull,
  FaCity,
  FaSnowflake,
  FaBug,
  FaCamera,
  FaHeartbeat,
  FaPenFancy,
  FaBirthdayCake,
  FaBook
} from "react-icons/fa"
import { GiSnakeBite } from "react-icons/gi"

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
    case "fancyPen":
      return <FaPenFancy />
    case "birthdayCake":
      return <FaBirthdayCake />
    case "book":
      return <FaBook />
    default:
      return null
  }
}

const storyPostTemplate = ({ data }) => {
  let post = data.markdownRemark
  console.log('Story Post Template')
  console.log(data)
  if (post == null) {
    return (
      <div>
        <Layout>
          <p>Sorry</p>
          <p>This stupid page isn't loading for some reason</p>{" "}
          <Link to="/blog">
            {" "}
            <button>Go back anyway </button>
          </Link>
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
            className="story-icon"
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

export default storyPostTemplate

export const blogQuery = graphql`
  query StoryPostByPath($location: String!) {
    markdownRemark(frontmatter: { path: { eq: $location } }) {
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
