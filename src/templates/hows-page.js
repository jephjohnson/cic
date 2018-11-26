import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/'
import HowsPageTemplate from '../components/hows/'
import { HTMLContent } from '../components/content/'

const HowsPage = ({ data }) => {
const { markdownRemark: post } = data

  return (
    <Layout>
      <HowsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        full_image={post.frontmatter.full_image}
        heading={post.frontmatter.heading}
        description={post.frontmatter.description}
        // content={post.html}
      />
    </Layout>
  )
}

HowsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HowsPage

export const howsPageQuery = graphql`
  query HowsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        full_image
        heading
        description
      }
    }
  }
`
