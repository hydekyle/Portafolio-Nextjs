import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Desarrollador Freelancer ubicado en Canarias.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ayoze Manuel
          </Heading>
          <p>Full-Stack Developer ( Videojuegos, Web y Aplicaciones multiplataforma )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/my-photo.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Sobre mí
        </Heading>
        <Paragraph>
          Me apasiona el desarrollo de software desde que me propuse crear mi primer videojuego con 13 años.
          Desde entonces he estado probando distintas tecnologías y afrontando proyectos personales a modo de reto
          y pasatiempos.<br/><br/>
          Me especializo en <b>Unity3D</b> y <b>Flutter</b>.
          En cuanto a desarrollo web, me manejo con soltura con <b>Wordpress</b> y <b>React</b>.<br/>
          Trabajo principalmente como <b>Freelancer</b> y en mi tiempo libre estoy desarrollando un videojuego
          para Realidad Virtual.<br/>
          También tengo capacidades para la creación y post-producción de contenido audiovisual con herramientas <b>Adobe</b>.
        </Paragraph>
      </Section>

      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          Portafolio
        </Heading>
        <Paragraph>
          ¡Puedes ver y probar mis creaciones en mi portafolio digital!
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/portafolio" legacyBehavior>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mi portafolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.9}>
        <Heading as="h3" variant="section-title">
          Experiencia Laboral
        </Heading>
        <BioSection>
          <BioYear>2024</BioYear>
          <b>Devest Solutions (3 meses)</b><br/>
          <b>Flutter Developer</b><br/>
          <Paragraph>
          Desarrollo e integración de nuevas características para una aplicación multiplataforma en Flutter (iOS/Android & Web).
          Arquitectura Bloc.
          Test de integración y E2E.
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          <b>Velocitech (1 año y 4 meses)</b><br/>
          <b>Unity Senior Developer & Flutter Developer</b><br/>
          <Paragraph>
          Gestión y creación de múltiples proyectos en Unity creando entornos 3D interactivos para museos y tiendas virtuales en WebGL.
          También participé en el desarrollo de una app en Flutter como Front-end.
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          <b>Proyecto personal (1 semana)</b><br/>
          <b>Flutter Mobile APP Precio Luz Básico</b><br/>
          <Paragraph>
          Aplicación para IOS y Android nativa, consulta el precio de la luz en un vistazo con un diseño simple y responsivo.
          Utiliza arquitectura MVC+s, reactividad con GetX y gráficos de FLChart.
          Es un proyecto personal de una semana para practicar buenas prácticas de código.
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          <b>Triple-O Games (3 meses)</b><br/>
          <b>Unity Junior Developer</b><br/>
          <Paragraph>
          Estuve presente 3 meses como junior en Tripe-O Games en el final del desarrollo, 
          principalmente integrando y configurando servicios externos en Unity como Photon Quantum, 
          PlayFab y servicios de AWS (lambda functions y cognito).
          También hice varias aportaciones en el juego como la animación de la moneda al recogerla,
          parte del tutorial y la serialización y generación de objetos en el mapa con Photon Quantum.
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          <b>Freelancer (4 meses)</b><br/>
          <b>APP Fantasy Football</b><br/>
          <Paragraph>
          Aplicación/Juego de tipo Fantasy Football de apuestas deportivas, consiste en formar un equipo de 5 jugadores de
          un equipo de fútbol y consigues puntos según su puntuación en los partidos de La Liga.
          El proyecto utiliza Firebase Functions para consumir datos de la API cada minuto y actualiza los resultados en vivo.
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          <b>Freelancer (1 mes)</b><br/>
          <b>LEÓNSEPIA APP</b><br/>
          <Paragraph>
          Aplicación para IOS y Android, es un simple port de una web de wordpress a dispositivos móviles.
          También utiliza push notifications para avisar a los usuarios de nuevo contenido.
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          <b>Freelancer (2 meses)</b><br/>
          <b>CYBER DEFENSE</b><br/>
          <Paragraph>
          Videojuego estilo retro para jugar en WEBGL y compatible con móviles mediante touch.
          Consume datos por medio de PHP de una base de datos MySQL para obtener y guardar puntuaciones.
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          <b>Freelancer (4 meses)</b><br/>
          <b>EVOLUTION</b><br/>
          <Paragraph>
          Videojuego de combate por turnos en el que consigues piezas aleatorias con las que construyes a tu monstruo.
          Cada pieza tiene estadísticas y habilidades aleatorias.
          Se puede jugar contra la IA y online.
          </Paragraph>
        </BioSection>
      </Section>

      <Section delay={0.9}>
        <Heading as="h3" variant="section-title">
          Formación
        </Heading>
        <BioSection>
          <BioYear>2022</BioYear>
          <b>Microsoft Certified: Azure Developer Associate (AZ-204)</b><br/>
          Certificación oficial de Microsoft que cubre Azure API Management, Azure App Security, Azure App Service, Azure Authentication, Azure Containers, Azure Cosmos DB, Azure Functions, Azure Key Vault, Azure IaaS,  Messaging, Storage.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          <b>Microsoft Certified: Azure Fundamentals</b><br/>
          Certificación oficial de Microsoft que cubre Azure, Cloud Data, Cloud Networking, Cloud Security, Cloud Services, Cloud Storage y Virtualización.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          <b>CURSO FULL-STACK DEVELOPER (EOI)</b><br/>
          Linux, Git, HTML5, CSS3, Javascript/Typescript, React y Vue, Docker, Cloud Services, DevOps, PHP, NodeJS, bases de datos SQL y NoSQL.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          <b>CURSO MICROSOFT SOLUTION DEVELOPER (FOCAN)</b><br/>
          ASP.NET, C#, Javascript, jQuery, MySQL, arquitectura MVC y hosting en Microsoft Azure.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          <b>BACHILLERATO TECNOLÓGICO</b><br/>
          IES Tacoronte Óscar Dominguez
        </BioSection>
      </Section>

      <Section delay={0.9}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Videojuegos retro, música y arte.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
