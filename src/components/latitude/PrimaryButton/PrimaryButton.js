import React from 'react'
import PropTypes from 'prop-types'
import './PrimaryButton.scss'

const PrimaryButton = props => (
  <button className="primary-button" type={props.type} onClick={props.onClick}>
    {props.children}
  </button>
)

PrimaryButton.defaultProps = {
  type: 'button',
  onClick: () => {},
  children: 'button',
}

PrimaryButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
}

export default PrimaryButton
