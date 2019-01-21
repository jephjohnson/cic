import React from 'react'
import PropTypes from 'prop-types'
import Content from '../content/'

const CareersPageTemplate = ({ full_image, title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className="hero" style={{ backgroundImage: `url(${ full_image })` }}>
        <div className="container">
            <div className="hero-body">
              <div className="columns is-centered">
                  <div className="column is-10-tablet is-9-desktop">
                    <div className="columns">
                        <div className="column">
                          <div class="title has-text-centered">
                            <h1>{title}</h1>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
            <PageContent className="content" content={content} />
        </div>
      </section>
    </div>
  )
}

CareersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  full_image: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default CareersPageTemplate
