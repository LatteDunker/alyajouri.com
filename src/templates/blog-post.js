import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import '../styles/mystyle.css'
import Layout from '../components/layout.js'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../components/CodeBlock'


// Blogpost Template
export default function BlogPost( {data} ) {

const tags  = data.strapiBlogPosts.tags.map( tag => tag.tag_name )

    return (
        <Layout>
            <article className="blog-post">
                <div className="post-meta-data">
                    <h1 className='post-title'> {data.strapiBlogPosts.title} </h1>
                    <div className='post-info'>By <Link to={`/me`} className={`author`}>{data.strapiBlogPosts.author}</Link> on {data.strapiBlogPosts.date} </div>
                    <div className="tags">{tags.map((tag) => (<Link key={tag} to={`/tags/${tag}`} className='tag'>{tag}</Link>))}</div>
                </div>
                <div className='post-content'>
                    <ReactMarkdown 
                        source={data.strapiBlogPosts.content}
                        transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.REACT_IMAGE_BASE_URL}${uri}`}
                        renderers={{ code: CodeBlock }}
                    />
                </div>
            </article>
        </Layout>
    )
}

export const query = graphql`
query myQuery($slug: String!) {
    strapiBlogPosts(slug: { eq: $slug}) {
        title
        author
        date(formatString: "MMMM D, YYYY")
        content
        tags {
            id
            tag_name
          }
      }
}
`