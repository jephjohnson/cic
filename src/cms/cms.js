import CMS from 'netlify-cms'
import * as NativeColorWidget from 'netlify-cms-widget-native-color'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import HowPagePreview from './preview-templates/HowPagePreview'
import HomePagePreview from './preview-templates/HomePagePreview'


CMS.registerPreviewStyle('/styles.css')
CMS.registerWidget('native-color', NativeColorWidget.Control)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('how', HowPagePreview)
CMS.registerPreviewTemplate('how', HomePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
