/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const { resolve } = require('path');
const path = require('path');

// ===================================================================================
// Query data for first 3 blog posts, pass data to blog-post.js template to create page
// ===================================================================================

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions

    // Templates
    const blogPostTemplate = path.resolve('src/templates/blog-post.js');
    const tagPageTemplate = path.resolve('src/templates/tag-page.js');

    const result = await graphql(`
        query {
            allStrapiBlogPosts(sort: {fields: date, order: DESC}, limit: 3) {
                nodes {
                    title
                    author
                    content
                    id
                    strapiId
                    tags {
                        id
                        tag_name
                    }
                    date(formatString: "MMMM, Do, YYYY")
                    slug
                }
            }
        }
    `)
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

// ===================================================================================
// Create page for each post
// ===================================================================================

    const posts = result.data.allStrapiBlogPosts.nodes;
    
    await posts.forEach( (post) => {
        createPage ({
            path: `/blog/${post.slug}`,
            component: blogPostTemplate,
            context: {
                slug: post.slug,
            },
        })
    })

// ===================================================================================
// Create page for each tag
// ===================================================================================

   // Generate set of unique tags (eliminate duplicates)

    const tagSet = new Set();
   
    await result.data.allStrapiBlogPosts.nodes.forEach( (post) => {
        if (post.tags) {
            post.tags.forEach( (tag) => {
                tagSet.add(tag.tag_name);
            })
        }
    })

    const tagList = Array.from(tagSet)

    // Generate page for each tag

    await tagList.forEach( (tag) => {
      createPage({
        path: `/tags/${tag}/`,
        component: tagPageTemplate,
        context: {
          tag: tag,
        },
      })
    })
  
}

