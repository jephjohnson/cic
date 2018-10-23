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
            <div className="container">
                <div className="hero-body">
                    <div className="columns is-centered">
                        <div className="column is-10-tablet is-9-desktop">
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
        <section className="section">
				{posts.map(({ node: post }) => (
            <div key={post.id} className="container">
								<div className="columns is-centered features">
										<div className="column is-10-tablet is-8-desktop features--outer is-paddingless">
												<div className="columns features--inner" style={{ backgroundImage: `url(${post.frontmatter.main.image1.image})` }}>
													<div className="column is-5-desktop is-offset-7 features--text has-text-centered">
														<h5>{post.frontmatter.main.image1.title}</h5>
														<h6>{post.frontmatter.main.image1.subtitle}</h6>
														<p>{post.frontmatter.main.image1.description}</p>
													</div>
												</div>
										</div>
								</div>
								<div className="columns is-centered features">
										<div className="column is-10-tablet is-8-desktop features--outer is-paddingless">
												<div className="column features--inner">
														<img
														src={post.frontmatter.main.image1.image}
														alt={post.frontmatter.main.image1.alt}
														/>
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
            main {
							image1 {
								image
								alt
								title
								subtitle
								description
							}
							image2 {
								image
								alt
								title
								subtitle
								description
							}
							image3 {
								image
								alt
								title
								subtitle
								description
							}
            }
          }
        }
      }
    }
  }
`
