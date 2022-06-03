import React from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

function TechCard({ image, title, parag }) {
  return (
    <div className="technologies" data-testid={title}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{parag}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

TechCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  parag: PropTypes.string.isRequired,
}

export default TechCard
