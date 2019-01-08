import React from 'react'
import './SocialLinks.scss'
// font awesome svg icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const SocialLinks = () => (
  <div className="sociallinks">
    <a href="https://twitter.com/">
      <FontAwesomeIcon icon={['fab', 'twitter']} />
    </a>
    <a href="https://www.facebook.com/">
      <FontAwesomeIcon icon={['fab', 'facebook']} />
    </a>
    <a href="https://www.instagram.com/">
      <FontAwesomeIcon icon={['fab', 'instagram']} />
    </a>
    <a href="https://github.com/">
      <FontAwesomeIcon icon={['fab', 'github']} />
    </a>
    <a href="mailto:someone@example.com">
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
  </div>
)

export default SocialLinks
