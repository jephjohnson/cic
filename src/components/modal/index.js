import React from 'react'
const ReactMarkdown = require('react-markdown')

class Modal extends React.Component {
  
  renderParagraph(props) {
		const { children } = props;
    
    if (children && children[0]
			&& children.length === 1
			&& children[0].props
			&& children[0].props.src) { 

      return <p>{children}</p>;
		}

		if (children[0].props.children.value !== "") { 
			return <h5>{children}</h5>;
		}

	}
  
  render() {
      const { data } = this.props
      const handleToUpdate  = this.props.handleToUpdate;
      return (
        <section className="section">
          <div className="container">
              <div className="columns modal-wrapper">
                <div className="column is-12-mobile is-11-tablet is-10-desktop modal-inner">
                  <div className="columns is-centered">
                    <div className="column cross right modal-cross" onClick={() => handleToUpdate()} ></div>  
                    <div className="column is-1-desktop arrow-right right-modal-arrow" style={{ borderBottomColor: data.color }}></div>
                    <div className="column is-12-mobile is-12-tablet is-11-desktop features--left features--left-modal" style={{ backgroundImage: `url( ${ data.large_image })` }}>
                      <div className="arrow-btn modal-arrow" style={{ borderBottomColor: data.color }}></div>
                      <div className="features-btn modal-btn" style={{ backgroundColor: data.color }}><p>New & Noteworthy</p></div>
                    </div>
                  </div>
                  <div className="columns is-centered">
                    <div className="column is-12-mobile is-12-tablet is-11-desktop has-text-centered features--right" style={{ backgroundColor: data.color }}>
                      <ReactMarkdown renderers={{ paragraph: this.renderParagraph }} source={ data.large_image_client_title } />
                      <ReactMarkdown source={ data.large_image_client_description } />
                      <h5>Project Team</h5>
                      <ReactMarkdown source={ data.large_image_team_members } />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      )
  }
}

export default Modal
