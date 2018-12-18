import React from 'react'
import './Aside.scss'
import Container from '../Container/Container'
import Button from '../Button/Button'

const Aside = () => (
  <div id="Aside">
    <Container>
      <p className="main-text">
        <span className="bold">Etiam sed feugiat</span> consequat amet lorem
        phasellus sed ultrices
        <br />
        imperdiet dolore lacus feugiat adipiscing magna consequat.
      </p>
      <hr />
      <div className="sub-text">
        <p>
          Vestibulum viverra quam tortor ultricies convallis eros condimentum.
          Vestibulum vulputate sagittis
          <br />
          sem tincidunt sustincidunt vestibulum congue lorem natoque penatibus
          et magnis dis parturient.
        </p>

        <Button>Continue Reading</Button>
      </div>
    </Container>
  </div>
)

export default Aside
