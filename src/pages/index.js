import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <Layout>
        <section className="hero is-medium">
          {posts.map(({ node: post }) => (
            <div className="hero-body" key={post.id} style={{ backgroundImage: `url(${post.frontmatter.full_image})` }}>
              <div className="container">
                <div className="columns is-mobile is-centered">
                  <div className="column is-8">
                    <div className="columns intro">
                      <div className="column is-5">
                        <h1 className="title">
                          { post.frontmatter.heading }
                        </h1>
                      </div>
                      <div className="column is-1 arrow">Arrow</div> 
                      <div className="column is-5 is-offset-1">
                        <h2 className="subtitle">
                          { post.frontmatter.description }
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
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
