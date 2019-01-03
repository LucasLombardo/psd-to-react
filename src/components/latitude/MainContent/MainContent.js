import React from 'react'
import IconList from '../IconList/IconList'
import Thumbnail from '../Thumbnail/Thumbnail'
import Container from '../Container/Container'
import './MainContent.scss'
import {
  pic01,
  pic02,
  pic03,
  pic04,
  pic05,
  pic06,
  pic07,
  pic08,
  pic09,
} from '../_assets/index.js'

const MainContent = () => (
  <div id="MainContent">
    <Container>
      <section id="section-one">
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
      </section>
      <hr />
      <section id="section-two">
        <Thumbnail
          imgSrc={pic04}
          head="Feugiat phasellus sed consequat"
          subHead="Lorem ipsum dolor sit amet veroeros"
          btn="Learn More"
        >
          Phasellus dapibus convallis scelerisque. Donec tempus augue id tortor
          ultricies eget pellentesque turpis ultrices. Vestibulum ut nulla sem,
          vel iaculis arcu. Nulla vel lorem nisl, quis ultricies tellus. Nunc
          imperdiet elit sed dolore lacus venenatis rutrum. Vivamus vulputate
          urna dolor est sagittis purus, in laoreet.
        </Thumbnail>
        <Thumbnail
          imgSrc={pic05}
          head="Dapibus lorem luctus volutpat rutrum"
          subHead="Lorem ipsum dolor sit amet veroeros"
          btn="Learn More"
        >
          Phasellus dapibus convallis scelerisque. Donec tempus augue id tortor
          ultricies eget pellentesque turpis ultrices. Vestibulum ut nulla sem,
          vel iaculis arcu. Nulla vel lorem nisl, quis ultricies tellus. Nunc
          imperdiet elit sed dolore lacus venenatis rutrum. Vivamus vulputate
          urna dolor est sagittis purus, in laoreet.
        </Thumbnail>
      </section>
      <section id="section-three">
        <div>3</div>
      </section>
    </Container>
  </div>
)

export default MainContent
