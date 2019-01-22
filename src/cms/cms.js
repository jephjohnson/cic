import CMS from 'netlify-cms'
import * as NativeColorWidget from 'netlify-cms-widget-native-color'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import HowsPagePreview from './preview-templates/HowsPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import HomePagePreview from './preview-templates/HomePagePreview'
import CareersPagePreview from './preview-templates/CareersPagePreview'
import IdeasPagePreview from './preview-templates/IdeasPagePreview'
import PrivacyPagePreview from './preview-templates/PrivacyPagePreview'



CMS.registerPreviewStyle('/styles.css')
CMS.registerWidget('native-color', NativeColorWidget.Control)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('careers', CareersPagePreview)
CMS.registerPreviewTemplate('ideas', IdeasPagePreview)
CMS.registerPreviewTemplate('privacy', PrivacyPagePreview)
CMS.registerPreviewTemplate('hows', HowsPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
