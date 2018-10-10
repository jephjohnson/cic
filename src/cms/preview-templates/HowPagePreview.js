import React from 'react'
import PropTypes from 'prop-types'
import HowPageTemplate from '../../components/how/'

const HowPagePreview = ({ entry, widgetFor }) => (
  <HowPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

HowPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HowPagePreview
