import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import magnificos_screen1 from '../public/images/works/magnificos1.jpg'
import magnificos_screen2 from '../public/images/works/magnificos2.jpg'
import luz_screen1 from '../public/images/works/luz1.png'
import luz_screen2 from '../public/images/works/luz2.png'
import GameDisplayer from '../components/game-displayer'

const Works = () => (
  <Layout title="Portafolio">

    <Heading as="h2" fontSize={20} align="center" textColor="teal">
        Juegos Unity3D
    </Heading>
    <Heading as="h4" fontSize={15} align="center" mt={1} mb={2}>
        ¡Pincha en el icono del juego para probarlo!
    </Heading>
    <GameDisplayer></GameDisplayer>

    <Container>
      <Heading as="h3" fontSize={20} align="center" textColor="teal" mt={10} mb={6}>
          Aplicaciones Flutter
      </Heading>

      <Heading as="h3" fontSize={20} align="center" my={6}>
          Fantasy Football
      </Heading>
      
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem title="Pantalla principal" thumbnail={magnificos_screen1}>
            Aquí puedes modificar tu equipo de forma dinámica y ver las estadísiticas actualizadas de los jugadores en la tabla.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem title="Estadisticas" thumbnail={magnificos_screen2}>
            Puedes consultar las estadísiticas de un jugador concreto y observar su rendimiento en gráficas animadas.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Heading as="h3" fontSize={20} align="center" my={6}>
          Precio Luz Básico
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem title="Gráfico simple" thumbnail={luz_screen1}>
            Consulta la variación de precios actualizada al día, representación del máximo y mínimo.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem title="Día y Noche" thumbnail={luz_screen2}>
            Gráfico circular alternativo para facilitar la visualización del precio de la luz por el día y por la noche.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
