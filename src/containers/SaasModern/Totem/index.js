import React from 'react';
import loadable from '@loadable/component';
import { Grid } from '@material-ui/core';
import Tablet from 'common/assets/image/tablet.json';
import Totem2 from 'common/assets/image/totem2.webp';
import Totem3 from 'common/assets/image/totem3.webp';
import Totem4 from 'common/assets/image/totem4.webp';
import PropTypes from 'prop-types';
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
  animationData: Tablet,
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
              content="Utilize o Tablet Para Registro de Ponto"
            />
            <Text
              {...description}
              content="Dispomos também de estruturas modernas para fixação do ponto, converse com os nossos consultores."
            />
          
          </Box>
          <Box {...imageWrapper}>

         
          <Text
              {...description}
              content="É possível adquirir um totem personalizado para empresas que decidam realizar a sustentação do tablet para uso do sistema de registro facial dos colaboradores."/>
            <Box my={3} />
            <Text
              {...description}
              content="O aplicativo dispõe do totem como item adicional de compra visando empresas que necessitam de um visual mais amigável, moderno e arrojado."/>
              <Box my={10} />

            <Grid container 
                    direction="row"
                    justify="center"
                    alignItems="center">

            <iframe width="350" height="315" src="https://www.youtube.com/embed/QLS8AOml4Lw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Grid>
              <Box my={10} />
            <Text
                {...description}
                content="Havendo interesse, confira mais informações ao conversar com um de nossos consultores."/>

         <Box my={10} /> 
          <Grid container spacing={6}>
         
        <Grid  md={4} sm={12} xs={12}  container
  direction="row"
  justify="center"
  alignItems="center">
          <Image
                  src={Totem2}
                  alt={'Totem'}
                  width={'50%'}
                  height={'50%'}
              />
        </Grid>
        <Grid  container
  direction="row"
  justify="center"
  alignItems="center" md={4} sm={12} xs={12}>
          <Image
                  src={Totem3}
                  alt={'Totem'}
                  width={'50%'}
                  height={'50%'}
            />
        </Grid>
        <Grid  container
  direction="row"
  justify="center"
  alignItems="center" md={4} sm={12} xs={12}>
          <Image
                  src={Totem4}
                  alt={'Totem'}
                  width={'50%'}
                  height={'50%'}
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