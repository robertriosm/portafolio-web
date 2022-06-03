import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

function Projects({ projects }) {
  return (
    <div id="projects">
      <br />
      <br />
      <br />
      <h2>PROJECTS</h2>
      <Carousel>
        {projects.map((x) => (
          <Carousel.Item>
            <img
              src={x.image}
              alt="img"
              width="100%"
              className="rounded mx-auto d-block"
              data-testid={x.title}
            />
            <Carousel.Caption>
              <Container className="bg-black p-2 bg-opacity-50 rounded">
                <h3>{x.title}</h3>
                <a
                  href={x.link}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={x.link}
                  id={x.link}
                >
                  Click aqui para visitar
                </a>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <br />
      <br />
      <br />
    </div>
  )
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Projects
