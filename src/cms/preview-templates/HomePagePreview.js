import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/home/'

const HomePagePreview = ({ entry, getAsset }) => {
  
    return (
    <HomePageTemplate
      image={entry.getIn(['data', 'image'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      main={{
        image1: {
          heading: entry.getIn(['data', 'main', 'heading']),
          description: entry.getIn(['data', 'main', 'description']),
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
        },
        image2: {
          heading: entry.getIn(['data', 'main', 'heading']),
          description: entry.getIn(['data', 'main', 'description']),
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main', 'image2', 'alt']),
        },
        image3: {
          heading: entry.getIn(['data', 'main', 'heading']),
          description: entry.getIn(['data', 'main', 'description']),
          image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
          alt: entry.getIn(['data', 'main', 'image3', 'alt']),
        },
      }}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
