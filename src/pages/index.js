import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/'
import Modal from '../components/modal/'
import CN from 'classnames';
const ReactMarkdown = require('react-markdown')

export default class IndexPage extends React.Component {

	constructor(props) {
		super(props);
		this.handleSort = this.handleSort.bind(this);
		this.state = {
			childVisible: false,
			selectedIndex: ''
    }
	}

	handleSort(value) {
		this.setState(prevState => ({ childVisible: !prevState.childVisible, selectedIndex: value + 1 }));
		//console.log(this.state.childVisible)
	}

	handleToUpdate = () => {
		this.setState({
      childVisible: false
    });
	}
	
	renderParagraph(props) {
		const { children } = props;
		if (children && children[0]
			&& children.length === 1
			&& children[0].props
			&& children[0].props.src) { 

			return <div className="column has-text-centered">{children}</div>;
		}

		if (children[0].props.children.value !== "") { 
			return <h6>{children}</h6>;
		}

		return <p>{children}</p>;
	}

	render() {
    const { data } = this.props
		const { edges: posts } = data.allMarkdownRemark
		const newpost = posts[0].node.frontmatter

		const Logos = Array(4).fill("").map((a, p) =>
			<div key={ p } className="columns is-centered">
				<div className="column is-12-mobile is-10-tablet is-10-widescreen">
					<div className="columns is-multiline is-mobile is-centered logos">
						<ReactMarkdown key={p.id} renderers={{ paragraph: this.renderParagraph }} alt={ newpost["logos" + (p + 1)].alt } source={ newpost["logos" + (p + 1)] } />
					</div>
				</div>
		</div>
		);
		
		const Features = Array(4).fill("").map((a, p) => {
			return ( 
					<div key={ p } className="columns is-centered features">
						<div className="column is-12-mobile is-10-tablet is-9-desktop is-8-widescreen features--bg"></div>
						<div className="column is-10-mobile is-9-tablet is-10-desktop is-9-widescreen features--outer">
							{ p === 0 || p === 2 ? (
									<div className="columns features--inner">
										<div className="column cross left" onClick={ () => this.handleSort(p) }></div>  
										<div className="column is-6-desktop features--left" style={{ backgroundImage: `url( ${newpost.main["image" + (p + 1)].image })`, backgroundColor: newpost.main["image" + (p + 1)].color }}></div>
										<div className="column is-1-desktop arrow-left" style={{ borderBottomColor: newpost.main["image" + (p + 1)].color }}></div>
										<div className="column is-12-mobile is-5-tablet is-4-desktop has-text-centered features--right" style={{ backgroundColor: newpost.main["image" + (p + 1)].color }}>
											<h5>{ newpost.main["image" + (p + 1)].title }</h5>
											<ReactMarkdown renderers={{ paragraph: this.renderParagraph }} source={ newpost.main["image" + (p + 1)].subtitle } />
											<ReactMarkdown source={ newpost.main["image" + (p + 1)].description } />
										</div>
									</div>
								) : p === 3 ? (
									<div className="columns features--inner right">
											<div className="column cross right" onClick={ () => this.handleSort(p) }></div>  
											<div className="column is-1-desktop arrow-right" style={{ borderBottomColor: newpost.main["image" + (p + 1)].color }}></div>
											<div className="column is-12-mobile is-5-tablet is-4-desktop has-text-centered features--right left" style={{ backgroundColor: newpost.main["image" + (p + 1)].color }}>
												<h5>{ newpost.main["image" + (p + 1)].title }</h5>
												<ReactMarkdown renderers={{ paragraph: this.renderParagraph }} source={ newpost.main["image" + (p + 1)].subtitle } />
												<ReactMarkdown source={ newpost.main["image" + (p + 1)].description } />
											</div>
											<div className="column is-6-desktop features--left" style={{ backgroundImage: `url( ${newpost.main["image" + (p + 1)].image })`, backgroundColor: newpost.main["image" + (p + 1)].color }}>
												<div className="arrow-btn" style={{ borderBottomColor: newpost.main["image" + (p + 1)].color }}></div>
												<div className="features-btn" style={{ backgroundColor: newpost.main["image" + (p + 1)].color }}><p>New & Noteworthy</p></div>
											</div>
									</div>
								) : (
									<div className="columns features--inner right">
										<div className="column cross right" onClick={ () => this.handleSort(p) }></div>  
										<div className="column is-1-desktop arrow-right" style={{ borderBottomColor: newpost.main["image" + (p + 1)].color }}></div>
										<div className="column is-12-mobile is-5-tablet is-4-desktop has-text-centered features--right left" style={{ backgroundColor: newpost.main["image" + (p + 1)].color }}>
											<h5>{ newpost.main["image" + (p + 1)].title }</h5>
											<ReactMarkdown renderers={{ paragraph: this.renderParagraph }} source={ newpost.main["image" + (p + 1)].subtitle } />
											<ReactMarkdown source={ newpost.main["image" + (p + 1)].description } />
										</div>
										<div className="column is-6-desktop features--left" style={{ backgroundImage: `url( ${newpost.main["image" + (p + 1)].image })`, backgroundColor: newpost.main["image" + (p + 1)].color }}></div>
									</div>
								)}
						</div>
				</div>
			)
		});

    return (
      <Layout>
				<div className={CN('overlay', {'is-active': this.state.childVisible})}></div>
				{ posts.map(({ node: post }) => (
						this.state.childVisible ? <Modal key={ post.id } data={ post.frontmatter.main[`image${this.state.selectedIndex}`] } handleToUpdate = {this.handleToUpdate} /> : null
					))
        }
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
														<div className="column hero-copy">
															<ReactMarkdown className="subtitle has-text-centered" source={ post.frontmatter.description } />
														</div>
														<div className="speech-bubble"><p>Let's Talk</p></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </section> 
        ))}
        <section className="section">
					<div className="container">
						{posts.map(({ node: post }) => (
								<div key={post.id} className="columns is-centered" id="hero-mobile">
									<div className="column is-10-mobile has-text-centered hero-copy">
										<ReactMarkdown className="subtitle has-text-centered" source={ post.frontmatter.description } />
									</div>
								</div>
							))}
							{ Features }
					</div>
        </section>
				<section className="section">
					<div className="container">
						{ Logos }
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
								large_image
								large_image_client_title
								large_image_client_description
								large_image_team_members
								alt
								title
								subtitle
								description
							}
							image2 {
								color
								image
								large_image
								large_image_client_title
								large_image_client_description
								large_image_team_members
								alt
								title
								subtitle
								description
							}
							image3 {
								color
								image
								large_image
								large_image_client_title
								large_image_client_description
								large_image_team_members
								alt
								title
								subtitle
								description
							}
							image4 {
								color
								image
								large_image
								large_image_client_title
								large_image_client_description
								large_image_team_members
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
