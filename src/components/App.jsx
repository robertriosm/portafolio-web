import React from 'react'
import { Container } from 'react-bootstrap'
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
      'Compactar y empaquetar los archivos de JS para optimizar el trabajo.',
  },
  {
    image: sasspng,
    title: 'Sass',
    parag:
      'Se escoge la mejor y mas moderna sintaxis y se le dice adios al CSS clasico.',
  },
  {
    image: storybookpng,
    title: 'Storybook',
    parag:
      'Hacer testing visual de los componentes es posible incluso si no se han terminado otras partes.',
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
  {
    image: nginxpng,
    title: 'Nginx',
    parag:
      'Una instancia en AWS con Nginx se encuentra lista para publicar paginas web.',
  },
]

function App() {
  return (
    <div className="myBg">
      <Container>
        <Header />
        <Techs technologies={tecs} />
      </Container>
    </div>
  )
}

export default App
