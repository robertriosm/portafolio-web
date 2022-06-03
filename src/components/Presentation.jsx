import React from 'react'
import { Card } from 'react-bootstrap'
import bg from '../../public/images/mybg.jpg'
import discord from '../../public/images/discord-v2.svg'
import stackoverflow from '../../public/images/stack-overflow.svg'
import github from '../../public/images/github.png'

function Presentation() {
  return (
    <Card className="bg-dark text-white" id="home">
      <Card.Img src={bg} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="text-center">
          <br />
          <br />
          <br />
          <h1 className="my-fix" data-testid="welcome-title">
            WELCOME
          </h1>
        </Card.Title>
        <Card.Text className="text-center">
          <div className="my-icons">
            <a
              href="https://github.com/robertriosm"
              target="_blank"
              rel="noreferrer"
              id="github"
              data-testid="github"
            >
              <img
                src={github}
                alt="github"
                height="40px"
                className="my-white"
              />
            </a>
            <a
              href="https://stackoverflow.com/users/16421253/roberto-rios"
              target="_blank"
              rel="noreferrer"
              id="stackoverflow"
              data-testid="stackoverflow"
            >
              <img src={stackoverflow} alt="github" height="40px" />
            </a>
            <a
              href="https://discord.gg/h8HNxSHU"
              target="_blank"
              rel="noreferrer"
              id="discord"
              data-testid="discord"
            >
              <img src={discord} alt="github" height="40px" />
            </a>
          </div>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Presentation
