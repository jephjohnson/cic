import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/'
const ReactMarkdown = require('react-markdown')

export default class IndexPage extends React.Component {
	
	renderParagraph(props) {
		const { children } = props;
		if (children && children[0]
			&& children.length === 1
			&& children[0].props
			&& children[0].props.src) { // rendering media without p wrapper
	
			return <div className="column has-text-centered">{children}</div>;
		}
		return <p>{children}</p>;
	}

	render() {
    const { data } = this.props
		const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        {posts.map(({ node: post }) => (
          <section className="hero" key={post.id} style={{ backgroundImage: `url(${post.frontmatter.full_image})` }}>
            <div className="container">
                <div className="hero-body">
                    <div className="columns is-centered">
                        <div className="column is-10-tablet is-9-desktop">
                        <div className="columns intro">
                            <div className="column">
                                <ReactMarkdown className="title has-text-centered" source={ post.frontmatter.heading } />
                            </div>
                            <div className="column is-2 has-text-centered arrow-wrapper">
															<span className="arrow"></span>
														</div> 
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
										<div className="column is-12-mobile is-10-tablet is-9-desktop is-8-widescreen features--bg"></div>
										<div className="column is-10-mobile is-9-tablet is-10-desktop is-9-widescreen features--outer">
												<div className="columns features--inner">
													<div className="column is-6-desktop features--left" style={{ backgroundImage: `url(${post.frontmatter.main.image1.image})`, backgroundColor: post.frontmatter.main.image1.color }}></div>
													<div className="column is-1-desktop arrow-left" style={{ borderBottomColor: post.frontmatter.main.image1.color }}></div>
													<div className="column is-12-mobile is-5-tablet is-4-desktop has-text-centered features--right" style={{ backgroundColor: post.frontmatter.main.image1.color }}>
														<h5>{post.frontmatter.main.image1.title}</h5>
														<h6>{post.frontmatter.main.image1.subtitle}</h6>
														<ReactMarkdown source={ post.frontmatter.main.image1.description } />
													</div>
												</div>
										</div>
								</div>
								<div className="columns is-centered features">
										<div className="column is-12-mobile is-10-tablet is-9-desktop is-8-widescreen features--bg"></div>
										<div className="column is-10-mobile is-9-tablet is-10-desktop is-9-widescreen features--outer">
												<div className="columns features--inner right">
													<div className="column is-1-desktop arrow-right" style={{ borderBottomColor: post.frontmatter.main.image2.color }}></div>
													<div className="column is-12-mobile is-5-tablet is-4-desktop has-text-centered features--right left" style={{ backgroundColor: post.frontmatter.main.image2.color }}>
														<h5>{post.frontmatter.main.image2.title}</h5>
														<h6>{post.frontmatter.main.image2.subtitle}</h6>
														<ReactMarkdown source={ post.frontmatter.main.image2.description } />
													</div>
													<div className="column is-6-desktop features--left" style={{ backgroundImage: `url(${post.frontmatter.main.image2.image})`, backgroundColor: post.frontmatter.main.image2.color }}></div>
												</div>
										</div>
								</div>
								<div className="columns is-centered features">
										<div className="column is-12-mobile is-10-tablet is-9-desktop is-8-widescreen features--bg"></div>
										<div className="column is-10-mobile is-9-tablet is-10-desktop is-9-widescreen features--outer">
												<div className="columns features--inner">
													<div className="column is-6-desktop features--left" style={{ backgroundImage: `url(${post.frontmatter.main.image3.image})`, backgroundColor: post.frontmatter.main.image3.color }}></div>
													<div className="column is-1-desktop arrow-left" style={{ borderBottomColor: post.frontmatter.main.image3.color }}></div>
													<div className="column is-12-mobile is-5-tablet is-4-desktop has-text-centered features--right" style={{ backgroundColor: post.frontmatter.main.image3.color }}>
														<h5>{post.frontmatter.main.image3.title}</h5>
														<h6>{post.frontmatter.main.image3.subtitle}</h6>
														<ReactMarkdown source={ post.frontmatter.main.image3.description } />
													</div>
												</div>
										</div>
								</div>
								<div className="columns is-centered features">
										<div className="column is-12-mobile is-10-tablet is-9-desktop is-8-widescreen features--bg"></div>
										<div className="column is-10-mobile is-9-tablet is-10-desktop is-9-widescreen features--outer">
												<div className="columns features--inner right">
													<div className="column is-1-desktop arrow-right" style={{ borderBottomColor: post.frontmatter.main.image4.color }}></div>
													<div className="column is-12-mobile is-5-tablet is-4-desktop has-text-centered features--right left" style={{ backgroundColor: post.frontmatter.main.image4.color }}>
														<h5>{post.frontmatter.main.image4.title}</h5>
														<h6>{post.frontmatter.main.image4.subtitle}</h6>
														<ReactMarkdown source={ post.frontmatter.main.image2.description } />
													</div>
													<div className="column is-6-desktop features--left" style={{ backgroundImage: `url(${post.frontmatter.main.image4.image})`, backgroundColor: post.frontmatter.main.image4.color }}></div>
												</div>
										</div>
								</div>	
            </div>
						))}
        </section>
				<section className="section">
					<div className="container">
							<div className="columns is-centered">
								<div className="column is-12-mobile is-10-tablet is-10-widescreen">
									<div className="columns is-multiline is-mobile is-centered logos">
										{posts.map(({ node: post }) => (
												<ReactMarkdown key={post.id} renderers={{ paragraph: this.renderParagraph }} alt={ post.frontmatter.logos1.alt } source={ post.frontmatter.logos1 } />
										))}
									</div>
								</div>
							</div>
							<div className="columns is-centered">
								<div className="column is-12-mobile is-10-tablet is-10-widescreen">
									<div className="columns is-multiline is-mobile is-centered logos">
										{posts.map(({ node: post }) => (
												<ReactMarkdown key={post.id} renderers={{ paragraph: this.renderParagraph }} alt={ post.frontmatter.logos2.alt } source={ post.frontmatter.logos2 } />
										))}
									</div>
								</div>
							</div>
							<div className="columns is-centered">
								<div className="column is-12-mobile is-10-tablet is-10-widescreen">
									<div className="columns is-multiline is-mobile is-centered logos">
										{posts.map(({ node: post }) => (
												<ReactMarkdown key={post.id} renderers={{ paragraph: this.renderParagraph }} alt={ post.frontmatter.logos3.alt } source={ post.frontmatter.logos3 } />
										))}
									</div>
								</div>
							</div>
							<div className="columns is-centered">
								<div className="column is-12-mobile is-10-tablet is-10-widescreen">
									<div className="columns is-multiline is-mobile is-centered logos">
										{posts.map(({ node: post }) => (
												<ReactMarkdown key={post.id} renderers={{ paragraph: this.renderParagraph }} alt={ post.frontmatter.logos4.alt } source={ post.frontmatter.logos4 } />
										))}
									</div>
								</div>
							</div>
					</div>
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
						logos1
						logos2
						logos3
						logos4
            full_image
            templateKey
            date(formatString: "MMMM DD, YYYY")
            main {
							image1 {
								color
								image
								alt
								title
								subtitle
								description
							}
							image2 {
								color
								image
								alt
								title
								subtitle
								description
							}
							image3 {
								color
								image
								alt
								title
								subtitle
								description
							}
							image4 {
								color
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
