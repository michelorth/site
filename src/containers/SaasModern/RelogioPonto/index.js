import React from 'react';
import loadable from '@loadable/component';
import { Grid } from '@material-ui/core';
import CelularPontoEletronico from 'common/assets/image/celular-ponto-eletronico.webp';
import RegistroOnline from 'common/assets/image/registro-online.json';
import PropTypes from 'prop-types';
import { BannerWrapper } from './banner.style';


const Box = loadable(() => import('common/components/Box'));
const Heading = loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));


const Lottie = loadable(() => import("react-lottie"));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: RegistroOnline,
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
              content="Dispensa de Relógio de Ponto"
            />
            
            <Text
              {...description}
              content="No momento de registro do ponto são verificadas a localização via GPS, a identidade do colaborador a partir de reconhecimento facial, além de outras informações como IP do dispositivo utilizado."
            />
          
          </Box>
          <Box {...imageWrapper}>

          <Grid container> 
          <Grid item md={4} sm={12} xs={12}>
            <Image
                  src={CelularPontoEletronico}
                  width={'50%'}
                  height={'50%'}
                  alt={'Aplicativo Ponto Eletrônico'}
            />
            </Grid>
            <Grid item md={8} sm={12} xs={12}>
          <Text
              {...description}
              content="Relógios de pontos convencionais, geralmente são equipamentos caros e de difícil manutenção, o que torna a gestão do ponto complicada e burocrática."/>
            <Box my={3} />
            <Text
              {...description}
              content="Com a utilização do Icarus, sua empresa não precisa mais do relógio convencional de ponto, sendo possível utilizar-se de vários recursos de registros disponíveis como: "/>
              
              <Box my={3} />
            <Text
                {...description}
                content="✅  Registro de ponto através de aplicativo celular do próprio colaborador"/>
            <Box my={1} />
            <Text
                {...description}
                content="✅  Batida de ponto através de um de nossos totens que possuem tecnologia de reconhecimento facial ou caso opte pela aquisição do mesmo."/>
            <Box my={1} />
            <Text
                {...description}
                content="✅  Registro de ponto através do navegador de internet utilizando usuário e senha,"/>
            
              <Box my={10} />

              <Text
                {...description}
                content="Lembrando também ser possível dar continuidade a utilização o seu relógio de ponto convencional para efetuar o registro, já que nosso software pode ser integrado com o mesmo."/>
              <Box my={10} />
              <Text
                {...description}
                content="Utilizando a nossa  tecnologia de reconhecimento facial, ou optando pelo registro realizado com o dispositivo móvel do próprio colaborador, ajudamos a evitar a proliferação de patógenos entre colaboradores (COVID-19) tornando o ambiente e a realização do registro mais saudável e segura."/>
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