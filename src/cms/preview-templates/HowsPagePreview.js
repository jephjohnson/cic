import React from 'react'
import PropTypes from 'prop-types'
import HowsPageTemplate from '../../components/hows/'

const HowsPagePreview = ({ entry, widgetFor }) => (
  <HowsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

HowsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HowsPagePreview
