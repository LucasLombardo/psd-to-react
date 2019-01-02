import React from 'react'
import IconList from '../IconList/IconList'
import Thumbnail from '../Thumbnail/Thumbnail'
import Container from '../Container/Container'
import './MainContent.scss'
import pic01 from '../_assets/pic01.jpg'
import pic02 from '../_assets/pic02.jpg'
import pic03 from '../_assets/pic03.jpg'

const MainContent = () => (
  <div id="MainContent">
    <section id="section-one">
      <Container>
        <IconList />
        <Thumbnail imgSrc={pic01} head="Nullam arcu consequat" btn="Learn More">
          Phasellus dapibus sed convallis feugiat ipsum. Donec tesque turpis sed
          amet ultrices vestibulum nulla.
        </Thumbnail>
        <Thumbnail imgSrc={pic02} head="Nullam arcu consequat" btn="Learn More">
          Phasellus dapibus sed convallis feugiat ipsum. Donec tesque turpis sed
          amet ultrices vestibulum nulla.
        </Thumbnail>
        <Thumbnail imgSrc={pic03} head="Nullam arcu consequat" btn="Learn More">
          Phasellus dapibus sed convallis feugiat ipsum. Donec tesque turpis sed
          amet ultrices vestibulum nulla.
        </Thumbnail>
      </Container>
    </section>
    <section id="section-two">
      <div>2</div>
    </section>
    <section id="section-three">
      <div>3</div>
    </section>
  </div>
)

export default MainContent
