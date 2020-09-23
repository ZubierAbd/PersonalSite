const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("./src/templates/blogPost.js")
  const storyPostTemplate = path.resolve("./src/templates/storyPost.js")
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
              type
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
    console.log(blogPostTemplate)
    console.log(storyPostTemplate)
    posts.forEach(edge => {
      // let path = edge.node.frontmatter.path
      let type = edge.node.frontmatter.type
      let location = edge.node.frontmatter.path;
      if (type != null && type == "story") {
        createPage({
          path: location,
          component: storyPostTemplate,
          context: {
            slug: location
          },
        })
      } else {
        createPage({
          path: location,
          component: blogPostTemplate,
          context: {
            slug: location
          },
        })
      }
    })
  })
}
