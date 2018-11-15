import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/'
import IdeasPageTemplate from '../components/ideas/'
import { HTMLContent } from '../components/content/'

const IdeasPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IdeasPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

IdeasPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IdeasPage

export const ideasPageQuery = graphql`
  query IdeasPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
