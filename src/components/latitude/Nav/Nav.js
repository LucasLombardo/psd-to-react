import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Nav.scss'

export default class Nav extends PureComponent {
  state = {
    fixed: false,
    isOpen: false,
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth })
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (
      document.querySelector(this.props.fixedBelowId).offsetTop <
      window.pageYOffset + 54
    ) {
      this.setState({ fixed: true })
    } else {
      this.setState({ fixed: false })
    }
  }

  toggleNav = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const fixedClass = this.state.fixed ? 'fixed' : 'absolute'
    const openClass = this.state.isOpen ? 'open' : 'closed'
    return (
      <nav id="Nav" className={fixedClass + ' ' + openClass}>
        <div className="links">
          <a href={this.props.homeLink} class="home-link">
            Latitude
          </a>
          {this.props.navLinks.map(({ text, href }) => (
            <a href={href} key={text + href}>
              {text}
            </a>
          ))}
        </div>
        <div className="hamburger">
          <button type="button" onClick={this.toggleNav}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>
    )
  }
}

Nav.propTypes = {
  navLinks: PropTypes.array.isRequired,
  homeLink: PropTypes.object.isRequired,
  fixedBelowId: PropTypes.string.isRequired,
}
