import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/Seo'

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Link to="/latitude/">Latitude</Link>
    <Link to="/readonly/">Read Only</Link>
  </div>
)

export default IndexPage
