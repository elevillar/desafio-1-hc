import { Container } from 'react-bootstrap'
import { BsCake2Fill } from 'react-icons/bs'

const Home = () => {
  return (
    <Container className='text-center pt-4'>
      <h1>Bienvenido a <strong>Happy Cake</strong></h1>
      <h5>El lugar de los pasteles felices</h5>
      <h1><BsCake2Fill /></h1>
    </Container>
  )
}

export default Home
