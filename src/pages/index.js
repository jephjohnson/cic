import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/'
const ReactMarkdown = require('react-markdown')

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
   
    return (
      <Layout>
        {posts.map(({ node: post }) => (
          <section className="hero is-medium" key={post.id} style={{ backgroundImage: `url(${post.frontmatter.full_image})` }}>
              <div className="hero-body">
                <div className="container">
                  <div className="columns is-centered">
                    <div className="column is-10-tablet is-8-desktop">
                      <div className="columns intro">
                        <div className="column">
                            <ReactMarkdown className="title has-text-centered" source={ post.frontmatter.heading } />
                        </div>
                        <div className="column is-2 arrow has-text-centered">Arrow</div> 
                        <div className="column">
                            <ReactMarkdown className="subtitle has-text-centered" source={ post.frontmatter.description } />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
        ))}
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "home-page" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            heading
            description
            full_image
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
