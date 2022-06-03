import React from 'react'
import { Row, Container, CardGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'
import TechCard from './TechCard'

function Techs({ technologies }) {
  return (
    <div id="technologies">
      <br />
      <br />
      <br />
      <h2>TECHNOLOGIES</h2>
      <Container>
        <Row md={3} className="g-3">
          {technologies.map((x) => (
            <CardGroup>
              <TechCard image={x.image} title={x.title} parag={x.parag} />
            </CardGroup>
          ))}
        </Row>
      </Container>
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
