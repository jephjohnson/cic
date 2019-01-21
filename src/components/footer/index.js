import React from 'react'

const FooterPageTemplate = () => {
  return (
    <footer className="footer">
        <div className="columns is-centered footer-content">
            <div className="column is-9-mobile is-11-tablet is-9-widescreen">
                <div className="columns">
                  <div className="column">
                    <h5>Corporate Imaging Concepts, LLC</h5>
                    <p>
                      308 Wainwright Drive Northbrook IL 60062<br/>
                      847 412 6600<br/>
                      cicrequest@corp-imaging.com
                    </p>
                  </div>
                  <div className="column">
                    <div className="columns icons-wrapper">
                      <div className="column is-3-widescreen has-text-centered">
                        <h6>Careers</h6>
                        <ul className="icons">
                          <li className="fb"></li>
                          <li className="linkedin"></li>
                        </ul>
                      </div>
                      <div className="column is-3-widescreen has-text-centered">
                        <h6>Your Privacy</h6>
                        <ul className="icons">
                          <li className="twitter"></li>
                          <li className="instagram"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
export default FooterPageTemplate
