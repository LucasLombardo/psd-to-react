import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = props => (
  <button className="button" type={props.type} onClick={props.onClick}>
    {props.children}
  </button>
)

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  children: 'button',
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
}

export default Button
