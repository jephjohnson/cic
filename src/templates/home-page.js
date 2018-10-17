import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/'
import HomePageTemplate from '../components/home/'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        heading={frontmatter.heading}
        description={frontmatter.description}
        fullImage={frontmatter.full_image}
        main={frontmatter.main}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const HomePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        description
        full_image
        main {
          image1 {
            title
            description
            alt
            image
          }
          image2 {
            title
            description
            alt
            image
          }
          image3 {
            title
            description
            alt
            image
          }
        }
      }
    }
  }
`
