import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../src/components/App'
import Presentation from '../src/components/Presentation'
import ContactMe from '../src/components/ContactMe'
import Header from '../src/components/Header'
// import Projects from '../src/components/Projects'

describe('tests para el portafolio web', () => {
  // test para el componente de presentacion
  it('deberia de aparecer correctamente el componente principal y un welcome', () => {
    render(<Presentation />)
    expect(screen.getByTestId('welcome-title')).toHaveTextContent('WELCOME')
  })
  // test para el formulario de contacto
  it('deberian renderizarse correctamente las partes del formulario', () => {
    render(<ContactMe />)
    expect(screen.getByTestId('message')).toHaveAttribute('required')
    expect(screen.getByTestId('name')).toHaveAttribute('required')
    expect(screen.getByTestId('email')).toHaveAttribute('required')
  })
  // test para el header
  it('deberia renderizarse correctamente los links del header', () => {
    render(<Header />)
    expect(screen.getByTestId('contact_me')).toHaveAttribute('href')
    expect(screen.getByTestId('technologies')).toHaveAttribute('href')
    expect(screen.getByTestId('projects')).toHaveAttribute('href')
  })
  // test para una card de tecnologia
  it('deberian renderizarse todas las cards al llamar a su parent component, se prueba la de npm', () => {
    render(<App />) // se llama a app ya que app contiene los arrays con la data para crear las cards de forma dinamica
    expect(screen.getByTestId('npm')).toBeTruthy()
  })
  // test para el estado de la alerta
  it('deberia renderizarse el form, pero su alerta debe estar en false y no aparecer', () => {
    render(<ContactMe />)
    expect(screen.queryByText(/Mensaje enviado/i)).not.toBeInTheDocument()
  })
  //
  // test para los campos del formulario
  it('deberia renderizarse el form, y si se da click en enviar, no se envia, debe llenarlo antes', () => {
    render(<ContactMe />)
    const required = screen.getByTestId('message')
    fireEvent.click(document.getElementById('enviar'))
    expect(required).toBeInvalid()
  })
  // test para el componente de proyectos
  it('al renderizar el carousel, deberian estar los links asociados a los proyectos', () => {
    render(<App />)
    fireEvent.click(document.getElementById('http://35.169.93.164:1000/'))
    expect(screen.getByTestId('http://35.169.93.164:1000/')).toHaveAttribute(
      'href'
    )
    expect(screen.getByTestId('http://35.169.93.164:1000/')).toHaveAttribute(
      'target'
    )
  })
  // test para los iconos de redes
  it('al renderizar el componente de presentacion, deberian estar los links asociados a las redes', () => {
    render(<Presentation />)
    fireEvent.click(document.getElementById('github'))
    expect(screen.getByTestId('github')).toHaveAttribute('href')
    fireEvent.click(document.getElementById('stackoverflow'))
    expect(screen.getByTestId('stackoverflow')).toHaveAttribute('href')
    fireEvent.click(document.getElementById('discord'))
    expect(screen.getByTestId('discord')).toHaveAttribute('href')
  })
  // test para el carousel de los proyectos
  it('al renderizar el carousel, deberian estar los links asociados a los proyectos', () => {
    render(<App />)
    fireEvent.click(document.getElementById('http://35.169.93.164:1000/'))
    expect(screen.getByTestId('http://35.169.93.164:1000/')).toHaveAttribute(
      'href'
    )
    expect(screen.getByTestId('http://35.169.93.164:1000/')).toHaveAttribute(
      'target'
    )
  })
  // test para ver si las imagenes tienen bien la ruta
  it('al renderizar la app, deberia salir la imagen de la calculadora', () => {
    render(<App />)
    expect(
      screen.getByTestId('Calculadora hecha en React + testing en Jest')
    ).toHaveAttribute('src')
  })
})
