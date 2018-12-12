import React from 'react'
import PropTypes from 'prop-types'
//import box from '../../img/logo.png'
const ReactMarkdown = require('react-markdown')



class HowsPageTemplate extends React.Component {

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
    const { full_image, heading, main } = this.props;
    console.log(this.props.main)
    //const PageContent = contentComponent


    const Modules = Array(3).fill("").map((a, p) =>
      <div key={ p } className="columns is-centered how-modules"> 
        <div className="column is-10-tablet is-10-desktop">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image">
                    <img src={ main["image" + (p + 1)].image } alt="CIC logo" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                <h2>{ main["image" + (p + 1)].title }</h2>
                <ReactMarkdown renderers={{ paragraph: this.renderParagraph }} source={ main["image" + (p + 1)].subtitle } />
                <ReactMarkdown source={ main["image" + (p + 1)].description } />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
		);

    return (
      <div>
      <section className="hero" style={{ backgroundImage: `url(${ full_image })` }}>
         <div className="container">
            <div className="hero-body">
              <div className="columns is-centered">
                  <div className="column is-10-tablet is-9-desktop">
                    <div className="columns">
                        <div className="column">
                            <ReactMarkdown className="title has-text-centered" source={ heading } />
                        </div>
                    </div>
                  </div>
              </div>
              <div className="columns is-centered">
                <div className="column is-10-tablet is-9-desktop">
                  <div className="columns">
                      <div className="column has-text-centered arrow-wrapper">
                        <span className="arrow"></span>
                      </div> 
                      <div className="speech-bubble"><p>Let's Talk</p></div>
                  </div>
                </div>
                </div>
            </div>
         </div>
       </section>
       <section className="section">
        <div className="container">
          {Modules}
        </div>
      </section>
      </div>
    )
  }
}

HowsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  full_image: PropTypes.string,
  heading: PropTypes.string,
  main: PropTypes.object,
}

export default HowsPageTemplate;
