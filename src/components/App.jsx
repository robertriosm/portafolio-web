import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Techs from './Techs'
import babelpng from '../../public/images/babel.png'
import eslintpng from '../../public/images/eslint.png'
import bootstrappng from '../../public/images/Bootstrap.png'
import Firebasepng from '../../public/images/Firebase.png'
import nginxpng from '../../public/images/nginx.png'
import reactpng from '../../public/images/react.png'
import sasspng from '../../public/images/sass.png'
import webpackpng from '../../public/images/webpack.png'
import storybookpng from '../../public/images/storybook.png'
import MyWork from './MyWork'
import reactEslintImg from '../../public/images/proyecto react eslint.jpg'
import epic from '../../public/images/epic.jpg'
import chat from '../../public/images/chat.jpg'
import calculadora from '../../public/images/calc.jpg'
import npmpng from '../../public/images/npm.png'
import Presentation from './Presentation'
import ContactMe from './ContactMe'

const tecs = [
  {
    image: reactpng,
    title: 'React',
    parag:
      'El framework mas popular de frontend es ley para hacer una buena interfaz de usuario.',
  },
  {
    image: webpackpng,
    title: 'Webpack',
    parag:
      'Loaders y plugins listos para compactar y empaquetar los archivos de JS y optimizar el trabajo.',
  },
  {
    image: nginxpng,
    title: 'Nginx',
    parag:
      'Una instancia en AWS con Nginx se encuentra lista para publicar increibles paginas web.',
  },
  {
    image: npmpng,
    title: 'npm',
    parag:
      'Los paquetes para los proyectos de Node estan siendo gestionados de la mejor forma con npm.',
  },
  {
    image: storybookpng,
    title: 'Storybook',
    parag:
      'Hacer testing visual de los componentes es posible incluso si no se han terminado otras partes.',
  },
  {
    image: sasspng,
    title: 'Sass',
    parag:
      'Se escoge la mejor y mas moderna sintaxis y se le dice adios al CSS clasico.',
  },
  {
    image: babelpng,
    title: 'Babel',
    parag: 'Programar con ES6, ejecutar JS amigable a todo navegador.',
  },
  {
    image: eslintpng,
    title: 'Eslint (con reglas AirBnB)',
    parag: 'La calidad del codigo importa, seguir las reglas tambien.',
  },
  {
    image: bootstrappng,
    title: 'Bootstrap',
    parag:
      'Todo sitio deberia ser responsivo, con Bootstrap esto es mas facil.',
  },
  {
    image: Firebasepng,
    title: 'FireBase',
    parag: 'El backend esta asegurado, optimizado y listo para trabajar.',
  },
]

const projs = [
  {
    image: calculadora,
    title: 'Calculadora hecha en React + testing en Jest',
    link: 'http://35.169.93.164:1010/',
  },
  {
    image: reactEslintImg,
    title: 'Laboratorio: React + Linting con Eslint',
    link: 'http://35.169.93.164:800/',
  },
  {
    image: epic,
    title: 'Proyecto: Replicar la pagina de Epic Games',
    link: 'http://35.169.93.164:1000/',
  },
  {
    image: chat,
    title: 'Laboratorio: Chat hecho en vanilla JS',
    link: 'http://35.169.93.164:520/',
  },
]

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/get_in_contact"
          element={
            <>
              <Header />
              <Container>
                <ContactMe />
              </Container>
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Header />
              <Container>
                <Techs technologies={tecs} />
              </Container>
            </>
          }
        />
        <Route
          path="/works"
          element={
            <>
              <Header />
              <Container>
                <MyWork projects={projs} />
              </Container>
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Container>
                <Presentation />
              </Container>
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
