import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import '../styles/mystyle.css'





const IndexPage = ( {data} ) => (
  <Layout>
    <SEO title="Home" />
    {data.allStrapiBlogPosts.nodes.map( post => (
  
        <div className="card mb-3 articleContainer">
        <Link to={`/blog/${post.slug}`}>
          <Img fluid={post.thumbnail.childImageSharp.fluid} className="card-img-top" alt="..." />
         </Link>
          <div className="card-body">
          <Link to={`/blog/${post.slug}`}>
           <h2 className="card-title">{post.title} </h2>
          </Link>
            <p className="card-description">{ post.description }</p>
            <p className="card-text"><small className="text-muted">January 27, 2021</small></p>
          </div>
        </div>
  
        	))}
  </Layout>
)


export const query = graphql`
{
  allStrapiBlogPosts(sort: {fields: date, order: DESC}, limit: 3) {
    nodes {
      title
      id
      strapiId
      tags {
        id
        tag_name
      }
      date(formatString: "MMM DD")
      slug
      description
      thumbnail {
        relativePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`






export default IndexPage

