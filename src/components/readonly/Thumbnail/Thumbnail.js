import React from 'react'
import PropTypes from 'prop-types'

const Thumbnail = ({ title, src, children }) => (
  <div className="thumbnail">
    <img src={src} alt={title} />
    <div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  </div>
)

Thumbnail.defaultProps = {
  children: '',
}

Thumbnail.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
}

export default Thumbnail
