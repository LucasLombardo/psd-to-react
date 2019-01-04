import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './Thumbnail.scss'

const Thumbnail = ({ imgSrc, imgAlt, head, subHead, children, btn }) => (
  <div className="Thumbnail">
    <img src={imgSrc} alt={imgAlt} title={imgAlt} />
    {head && <h3>{head}</h3>}
    {subHead && <p className="sub">{subHead}</p>}
    {children && <p>{children}</p>}
    {btn && <Button>{btn}</Button>}
  </div>
)

Thumbnail.defaultProps = {
  imgAlt: '',
  head: '',
  subHead: '',
  children: '',
  btn: '',
}

Thumbnail.propTypes = {
  imgAlt: PropTypes.string,
  head: PropTypes.string,
  subHead: PropTypes.string,
  children: PropTypes.any,
  btn: PropTypes.string,
}

export default Thumbnail
