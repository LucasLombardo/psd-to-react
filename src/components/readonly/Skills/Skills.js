import React from 'react'
import Container from '../Container/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faCubes,
  faBook,
  faCoffee,
  faBolt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import './Skills.scss'

const Skills = () => (
  <section className="skills">
    <Container>
      <h2>Things I Can Do</h2>
      <p>
        Integer eu ante ornare amet commetus vestibulum blandit integer in curae
        ac faucibus integer non. Adipiscing cubilia elementum integer lorem
        ipsum dolor sit amet.
      </p>
      <ul>
        <li>
          <FontAwesomeIcon icon={faCode} />
          Neque sit cep ante
        </li>
        <li>
          <FontAwesomeIcon icon={faCubes} />
          Cras augue cep vitae
        </li>
        <li>
          <FontAwesomeIcon icon={faBook} />
          Porttitor ante
        </li>
        <li>
          <FontAwesomeIcon icon={faCoffee} />
          Augue fusce morbi
        </li>
        <li>
          <FontAwesomeIcon icon={faBolt} />
          Augue enim dictum
        </li>
        <li>
          <FontAwesomeIcon icon={faUsers} />
          Tempus risus consequat
        </li>
      </ul>
    </Container>
  </section>
)

export default Skills
