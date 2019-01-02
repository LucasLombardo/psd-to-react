import React from 'react'
import './IconList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faCog, faFile } from '@fortawesome/free-solid-svg-icons'

const IconList = () => (
  <div id="IconList">
    <h2>Amet veroeros feugiat et dolor?</h2>
    <p>
      Sem et vestibulum lorem sed blandit consequat et ultrices nullam nisl
      lorem feugiat lorem ipsum consequat:
    </p>
    <ul>
      <li>
        <FontAwesomeIcon icon={faChartArea} />
        Lorem ipsum dolor amet
      </li>
      <li>
        <FontAwesomeIcon icon={faCog} />
        Nulla vel nisl consequat
      </li>
      <li>
        <FontAwesomeIcon icon={faFile} />
        Feugiat veroeros lorem
      </li>
    </ul>
  </div>
)

export default IconList
