import React from 'react'
import PropTypes from 'prop-types'
//import Content from '../content/'
import box from '../../img/logo.png'
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
    const { full_image, heading, description } = this.props;
    //const PageContent = contentComponent

    const Modules = Array(4).fill("").map((a, p) =>
    <div className="columns is-centered">
      <div className="column is-10-tablet is-9-desktop">
        <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                    <img src={ box } alt="CIC logo" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    lklkjlkjlkj
                  </p>
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
                     <div className="columns intro">
                         <div className="column">
                             <ReactMarkdown className="title has-text-centered" source={ heading } />
                         </div>
                         <div className="column is-2 has-text-centered arrow-wrapper">
                           <span className="arrow"></span>
                         </div> 
                           <div className="column hero-copy">
                             <div className="speech-bubble"><p>Let's Talk</p></div>
                               <ReactMarkdown className="subtitle has-text-centered" source={ description } />
                           </div>
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
  //content: PropTypes.string,
  full_image: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  //contentComponent: PropTypes.func,
}

export default HowsPageTemplate;
