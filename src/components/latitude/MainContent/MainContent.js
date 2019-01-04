import React from 'react'
import IconList from '../IconList/IconList'
import Thumbnail from '../Thumbnail/Thumbnail'
import Container from '../Container/Container'
import './MainContent.scss'

const MainContent = () => (
  <div id="MainContent">
    <Container>
      <section id="section-one">
        <IconList />
        <div className="thumbnail-grid">
          <Thumbnail
            imgSrc="https://imagizer.imageshack.com/a/img923/8674/otdV0o.jpg"
            head="Nullam arcu consequat"
            btn="Learn More"
          >
            Phasellus dapibus sed convallis feugiat ipsum. Donec tesque turpis
            sed amet ultrices vestibulum nulla.
          </Thumbnail>
          <Thumbnail
            imgSrc="https://imagizer.imageshack.com/a/img921/7577/8zMnyO.jpg"
            head="Nullam arcu consequat"
            btn="Learn More"
          >
            Phasellus dapibus sed convallis feugiat ipsum. Donec tesque turpis
            sed amet ultrices vestibulum nulla.
          </Thumbnail>
          <Thumbnail
            imgSrc="https://imagizer.imageshack.com/a/img921/238/wLVW9C.jpg"
            head="Nullam arcu consequat"
            btn="Learn More"
          >
            Phasellus dapibus sed convallis feugiat ipsum. Donec tesque turpis
            sed amet ultrices vestibulum nulla.
          </Thumbnail>
        </div>
      </section>
      <hr />
      <section id="section-two">
        <Thumbnail
          imgSrc="https://imagizer.imageshack.com/a/img922/4859/GAmsHp.jpg"
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
          imgSrc="https://imagizer.imageshack.com/a/img922/8122/m45ivC.jpg"
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
      <hr />
      <section id="section-three">
        <h2>Dolore rutrum arcu nullam ultricies</h2>
        <p className="sub">Lorem ipsum dolor sit amet veroeros</p>
        <p>
          Phasellus dapibus convallis scelerisque. Donec tempus augue id tortor
          ultricies eget pellentesque turpis ultrices. Vestibulum ut nulla sem,
          vel iaculis arcu. Nulla vel lorem nisl, quis ultricies tellus. Nunc
          imperdiet elit sed dolore lacus venenatis rutrum. Vivamus vulputate
          urna dolor est sagittis purus, in laoreet.
        </p>
        <div className="img-grid">
          <Thumbnail imgSrc="https://imagizer.imageshack.com/a/img923/7903/tzQQcG.jpg">
            <strong>Phasellus convallis</strong> scelerisque et amet donec
            tellus lorem ipsum.
          </Thumbnail>
          <Thumbnail imgSrc="https://imagizer.imageshack.com/a/img922/6107/kqfJwe.jpg">
            <strong>Phasellus convallis</strong> scelerisque et amet donec
            tellus lorem ipsum.
          </Thumbnail>
          <Thumbnail imgSrc="https://imagizer.imageshack.com/a/img922/7870/v62MDc.jpg">
            <strong>Phasellus convallis</strong> scelerisque et amet donec
            tellus lorem ipsum.
          </Thumbnail>
          <Thumbnail imgSrc="https://imagizer.imageshack.com/a/img922/615/jMIIPn.jpg">
            <strong>Phasellus convallis</strong> scelerisque et amet donec
            tellus lorem ipsum.
          </Thumbnail>
        </div>
      </section>
    </Container>
  </div>
)

export default MainContent
