import React from "react"
import Link from "gatsby"

export default function blogPostTemplate({ data }) {
  let post = data.markdownRemark
  console.log(data)
  console.log("CHEKER HERE")
  if (post == null) {
    return (
      <div>
        <p>Sorry</p>
      </div>
    )
  }

  return (
    <div>
      <Link to="/blog">Go back</Link>
      <hr></hr>
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by: {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  )
}

export const postQuery = graphql`
  query blogPostByPath($path: String!) {
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
