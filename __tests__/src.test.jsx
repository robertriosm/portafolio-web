import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../src/components/App'

describe('tests para la calculadora', () => {
  // test para la suma
  it('introducir la operacion 10 + 10 =, depliga 20 en h3#result', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('+'))
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('='))
    expect(screen.getByTestId('result')).toHaveTextContent('20')
  })
  // test para la resta
  it('introducir la operacion 10 - 10 =, depliga 0 en h3#result', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('-'))
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('='))
    expect(screen.getByTestId('result')).toHaveTextContent('0')
  })
  // test para la multiplicacion
  it('introducir la operacion 10 x 10 =, depliga 100 en h3#result', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('x'))
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('='))
    expect(screen.getByTestId('result')).toHaveTextContent('100')
  })
  // test para la division
  it('introducir la operacion 10 / 0 =, depliga un error en h3#result', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('/'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('='))
    expect(screen.getByTestId('result')).toHaveTextContent('error')
  })
  // test para cambiar signo
  it('10 + 10 =, depliga 20 en h3#result, al clickear el boton +/-, depliga -20 en h3#result, al clickearlo de nuevo, depliga 20 en h3#result', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('+'))
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('='))
    fireEvent.click(document.getElementById('+/-'))
    expect(screen.getByTestId('result')).toHaveTextContent('-20')
    fireEvent.click(document.getElementById('+/-'))
    expect(screen.getByTestId('result')).toHaveTextContent('20')
  })
  // test para modulos
  it('introducir la operacion 10 % 1 =, depliga 0 en h3#result', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('%'))
    fireEvent.click(document.getElementById('1'))
    fireEvent.click(document.getElementById('='))
    expect(screen.getByTestId('result')).toHaveTextContent('0')
  })
  // test para la igualdad
  it('test para verificar igualdad ==', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('=='))
    fireEvent.click(document.getElementById('0'))
    fireEvent.click(document.getElementById('='))
    expect(screen.getByTestId('result')).toHaveTextContent('true')
  })
  // test para la concatenacion
  it('test del limite de la concatenacion (9 digitos)', () => {
    render(<App name="Roberto" />)
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('x'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('9'))
    fireEvent.click(document.getElementById('='))
    expect(screen.getByTestId('result')).toHaveTextContent('error')
  })
})
