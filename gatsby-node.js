const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)

  const result = await graphql(`
    query loadPagesQuery ($limit: Int!) {
      allMarkdownRemark(limit: $limit) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `${edge.node.fields.slug}`,
        component: postTemplate,
        context: {
          slug: `${edge.node.fields.slug}`
        }
      })
    })
  })
}