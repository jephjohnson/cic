import React from 'react'
import PropTypes from 'prop-types'
import IdeasPageTemplate from '../../components/ideas/'

const IdeasPagePreview = ({ entry, widgetFor }) => (
  <IdeasPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

IdeasPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default IdeasPagePreview
