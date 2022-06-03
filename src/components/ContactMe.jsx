import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Form, Button, Alert } from 'react-bootstrap'

function ContactMe() {
  const [visible, setVisible] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'service_2hbc6va',
      'template_chbx5mm',
      e.target,
      'jgqdq5eaVSVAE9Uzb'
    )
    setVisible(true)
  }

  return (
    <Form id="contact_me" onSubmit={sendEmail} data-testid="contact_form">
      <br />
      <br />
      <br />
      <h2>CONTACT ME</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Su nombre"
          name="user_name"
          required
          data-testid="name"
        />
        <Form.Text className="text-muted">
          No se compartirá su informacion con nadie.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label data>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="user_email"
          required
          data-testid="email"
        />
        <Form.Text className="text-muted">
          No se compartirá su correo con nadie, solo se requiere responderle lo
          antes posible.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control
          placeholder="Cuenteme, ¿en qué puedo servirle?"
          as="textarea"
          rows={3}
          name="message"
          required
          data-testid="message"
        />
      </Form.Group>

      <Button variant="primary" type="submit" id="enviar">
        Enviar
      </Button>
      {visible ? (
        <Alert
          variant="success"
          onClose={() => setVisible(false)}
          dismissible
          data-testid="alertid"
        >
          Mensaje enviado, se le contestara lo antes posible.
        </Alert>
      ) : null}
    </Form>
  )
}

export default ContactMe
