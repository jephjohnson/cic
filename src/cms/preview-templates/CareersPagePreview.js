import React from 'react'
import PropTypes from 'prop-types'
import CareersPageTemplate from '../../components/careers/'

const CareersPagePreview = ({ entry, widgetFor }) => (
  <CareersPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CareersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CareersPagePreview
