import React from 'react'
import SEO from '../components/Seo'
import Index from '../components/readonly/Index'
import Layout from '../components/Layout'

const ReadOnly = () => (
  <Layout>
    <SEO title="Read Only" keywords={['pixelarity', 'template', 'readonly']} />
    <Index />
  </Layout>
)

export default ReadOnly
