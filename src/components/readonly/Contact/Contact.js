import React, { Component } from 'react'

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <section className="contact">
        <form>
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={this.state.subject}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            value={this.state.message}
            onChange={this.handleChange}
            required
          />
          <div>
            <button type="submit">Submit</button>
            <button type="button">Reset Form</button>
          </div>
        </form>
      </section>
    )
  }
}
