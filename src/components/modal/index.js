import React from 'react'

class Modal extends React.Component {
  render() {
      const { data } = this.props
      const handleToUpdate  = this.props.handleToUpdate;
      console.log(data)
      return (
        <section className="section">
          <div className="container">
              <div className="columns modal-wrapper">
                <div className="column is-12-mobile is-11-tablet is-10-desktop modal-inner">
                  <div className="columns is-centered">
                    <div className="column cross right modal-cross" onClick={() => handleToUpdate()} ></div>  
                    <div className="column is-1-desktop arrow-right right-modal-arrow" style={{ borderBottomColor: data.color }}></div>
                    <div className="column is-12-mobile is-12-tablet is-11-desktop features--left" style={{ backgroundImage: `url( ${ data.image })`, backgroundColor: data.color }}>
                      <div className="arrow-btn modal-arrow" style={{ borderBottomColor: data.color }}></div>
                      <div className="features-btn modal-btn" style={{ backgroundColor: data.color }}><p>New & Noteworthy</p></div>
                    </div>
                  </div>
                  <div className="columns is-centered">
                    <div className="column is-12-mobile is-12-tablet is-11-desktop has-text-centered features--right" style={{ backgroundColor: data.color }}>
                      <h5>{ data.title }</h5>
                      {/* <ReactMarkdown renderers={{ paragraph: this.renderParagraph }} source={ data.subtitle } />
                      <ReactMarkdown source={ data.description } /> */}
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
