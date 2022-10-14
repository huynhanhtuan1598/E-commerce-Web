import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Campus from '../../Asset/img/EQ21.png';
import Stan_smith from '../../Asset/img/Stan_smith.png';
import Adios_pro from '../../Asset/img/QT_RACER.png';

function Carousel_slide() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-10   0"
          src={Campus}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>EQ21</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Stan_smith}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Stan_smith</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Adios_pro}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>QT_RACER</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_slide;