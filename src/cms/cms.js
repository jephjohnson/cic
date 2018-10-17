import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import HowPagePreview from './preview-templates/HowPagePreview'
import HomePagePreview from './preview-templates/HomePagePreview'


CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('how', HowPagePreview)
CMS.registerPreviewTemplate('how', HomePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
