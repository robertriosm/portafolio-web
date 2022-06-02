import React from 'react'
import { Carousel } from 'react-bootstrap'
import PropTypes from 'prop-types'

function Techs({ technologies }) {
  return (
    <div className="technologies">
      <h2>Technologies</h2>
      <Carousel variant="dark">
        {technologies.map((x) => (
          <Carousel.Item>
            <img
              src={x.image}
              alt="Ye"
              height="400px"
              className="mx-auto d-block"
            />
            <Carousel.Caption>
              <h3>{x.title}</h3>
              <p>{x.parag}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

Techs.propTypes = {
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      parag: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Techs
