import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import '../styles/mystyle.css'
import Layout from '../components/layout.js'





// Component for Tag pages
export default function TagPage( {data, pageContext} ) {
    const { tag } = pageContext;
    const length = data.allStrapiBlogPosts.nodes.length;

    return (
        <Layout>
		    <div>
                <h1>Posts tagged: {tag}</h1>
                <p> Posts found: {length}</p>
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
}

export const query = graphql`
    query TagPage($tag: String!) {
    allStrapiBlogPosts(filter: {tags: {elemMatch: {tag_name: {eq: $tag}}}}) {
      nodes {
        title
        date(formatString: "MMM DD")
        slug
      }
    }
  }  
`