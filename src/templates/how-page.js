import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/'
import HowPageTemplate from '../components/how/'
import { HTMLContent } from '../components/content/'

const HowPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <HowPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

HowPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HowPage

export const howPageQuery = graphql`
  query HowPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
