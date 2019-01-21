import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/'
import CareersPageTemplate from '../components/careers/'
import { HTMLContent } from '../components/content/'

const CareersPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CareersPageTemplate
        contentComponent={HTMLContent}
        full_image={ post.frontmatter.full_image }
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

CareersPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CareersPage

export const careersPageQuery = graphql`
  query CareersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        full_image
      }
    }
  }
`
