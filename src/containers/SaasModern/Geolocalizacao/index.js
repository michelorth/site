import React from 'react';
import loadable from '@loadable/component';
import { Grid } from '@material-ui/core';
import geolocalizacao from 'common/assets/image/geolocalizacao.json';
import Geolocalizacao from 'common/assets/image/geolocalizacao.webp';
import Geolocalizacao1 from 'common/assets/image/geolocalizacao1.webp';
import PropTypes from 'prop-types';
import Lottie from "react-lottie";
import { BannerWrapper } from './banner.style';

const Box = loadable(() => import('common/components/Box'));
const Heading =loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));



const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: geolocalizacao,
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
              content="Saiba de Onde os Colaboradores Bateram o Ponto"
            />
            <Text
              {...description}
              content="Com a geolocalização o gestor poderá ter a certeza de que o colaborador está no local determinado e dentro do perímetro configurado pela empresa, o funcionamento é simples e depende apenas da ativação do GPS do próprio celular."
            />
          
          </Box>
          <Box {...imageWrapper}>

          <Grid container spacing={6}>
              <Grid item md={4} sm={12} xs={12}>

              <Image
                  width={'100%'}
                  height={'100%'}
                  src={Geolocalizacao}
                  alt={'Localização'}
            />
              </Grid>
              <Grid item md={8} sm={12} xs={12}>

              <Text
              {...description}
              content="Você tem total controle em tempo real de aonde os seus colaboradores estão registrando o ponto?"/>
            <Box my={1} />
            <Text
              {...description}
              content="Agora sim!"/>
              
              <Box my={3} />
            <Text
                {...description}
                content="Com o Icarus, você consegue visualizar de maneira fácil e descomplicada aonde seus colaboradores estão realizando o registro do ponto."/>
            <Box my={3} />

            <Text
                {...description}
                content="O aplicativo realiza o registro do ponto e a sua localização exata, armazenando as coordenadas geográficas de sua localidade. " />

            <Box my={3} />
            <Text
                {...description}
                content="Após isso o gestor poderá facilmente visualizar em um mapa  a localização dos registros efetuados." />
            
            <Box my={3} />

            <Text
                {...description}
                content="Além disso é possível limitar para que seus colaboradores só registrem o ponto de uma determinada localização através da nossa funcionalidade de limitação geográfica." />
            <Box my={10} />

            <Image
                  src={Geolocalizacao1}
                  alt={'Localização'}
                  width={'100%'}
                  height={'100%'}
            />

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