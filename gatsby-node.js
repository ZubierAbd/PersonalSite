const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("./src/templates/blogPost.js")
  console.log(blogPostTemplate)
  console.log("check here Zubier")
  //
  //
  //
  return await graphql(`
    query LoadPagesQuery {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    ///Create blog post pages
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      let path = edge.node.frontmatter.path
      createPage({
        path,
        component: blogPostTemplate,
        context: {
          path,
        },
      })
    })
  })
}
