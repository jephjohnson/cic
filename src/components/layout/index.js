import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../navbar/'
import Footer from '../footer/'
import '../../sass/all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Corporate Imaging Concepts" />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
