import { Container, Form, Button } from 'react-bootstrap'

const Contacto = () => {
  return (
    <Container className='text-center pt-4'>
      <h2>Cuéntanos, ¿en qué te podemos ayudar?</h2>
      <Form className='pt-4'>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Correo:</Form.Label>
          <Form.Control type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Descripción:</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>
      </Form>
      <Button variant='danger'>Enviar</Button>
    </Container>
  )
}

export default Contacto
