import loadable from '@loadable/component';
import { Grid } from '@material-ui/core';
import HomeOffice from 'common/assets/image/home-office.json';
import Geolocalizacao from 'common/assets/image/saasModern/banner-image.webp';
import PropTypes from 'prop-types';
import React from 'react';
import Lottie from "react-lottie";
import { BannerWrapper } from './banner.style';

const Box = loadable(() => import('common/components/Box'));
const Heading = loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: HomeOffice,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Icarus = ({
  row,
  contentWrapper,
  discountAmount,
  discountText,
  title,
  description,
  imageWrapper,
  buttonWrapper,
  button,
  fillButton,
}) => {

  return (
    <BannerWrapper id="inicio">
      <Lottie options={defaultOptions}
        height={'25%'}
        width={'25%'} />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            
            <Heading
              as='h1'
              {...title}
              content="Gestão de Equipes em Home Office"
            />
            <Text
              {...description}
              content="Controle totalmente a jornada de trabalho de sua equipe, emita relatórios de frequência com exibição gráfica, tenha a localização dos colaboradores, duração de intervalos e assiduidade em tempo real."
            />
          
          </Box>
          <Box {...imageWrapper}>

          <Grid container spacing={6}>
              <Grid item md={4} sm={12} xs={12}>

              <Image
                  src={Geolocalizacao}
                  alt={'Dashboard'}
                  width={'100%'}
                  height={'100%'}
            />
              </Grid>
              <Grid item md={8} sm={12} xs={12}>

              <Text
              {...description}
              content="No Brasil, a instabilidade econômica e a necessidade de empresas reinventarem seus métodos de gestão torna o caráter deste desafio mais dinâmico e acelerado em um mercado cada vez mais competitivo."/>
            <Box my={1} />
            <Text
              {...description}
              content="Administrar equipes remotamente com acesso a informações organizadas e mensuráveis torna-se fácil para o aplicativo, emitir relatórios e tomar decisões ganham rapidez e transformam ações pontuais em estratégias efetivas."/>
              
              <Box my={3} />
            <Text
                {...description}
                content="O maior desafio para setores com a responsabilidade sobre gestão de colaboradores normalmente é diminuir a margem de erros administrativos, identificar falhas e acompanhar a jornada de trabalho de todos, isso poderá ocorrer se as ferramentas certas forem apresentadas e incorporadas cotidianamente."/>
            <Box my={3} />

            <Text
                {...description}
                content="Para tomar decisões assertivas é indispensável transformar dados em informação, e isto sem dúvida torna-se rotina quando a ferramenta propõe valorizar o tempo e economizar dinheiro." />

            
              </Grid>


          </Grid>            

          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

Icarus.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object,
};

Icarus.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '50%'],
    mb: '40px',
  },
  title: {
    fontSize: ['24px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: 'center',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#00865b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'secondaryWithBg',
    minWidth: ['auto', '150px'],
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px',
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
};

export default Icarus;