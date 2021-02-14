import { graphql } from 'gatsby'
import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'

// Data represents graphql query at bottom of file
// Get data and place in post preview template below
const BlogPage = ( {data} ) => (
    <Layout>
		<div>
      <h1>Posts</h1>
        	{data.allStrapiBlogPosts.nodes.map( post => (
          <div className='post-listing'>
            <Link to={`/blog/${post.slug}`}>
                <div className='post-listing-row'>
                  <time>{post.date}</time>
                  <h3>{post.title}</h3>
                </div>
	    		  </Link>
          </div>
        	))}
      </div>
	</Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
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
          date(formatString: "MMM DD")
          slug
        }
      }
}
`
export default BlogPage
