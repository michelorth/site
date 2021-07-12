import React from 'react';
import loadable from '@loadable/component';
import { Grid } from '@material-ui/core';
import Avisos from 'common/assets/image/avisos.webp';
import Notificacoes from 'common/assets/image/notificacoes.json';
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
  animationData: Notificacoes,
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
              content="Avisos Inteligentes de Controle de Ponto"
            />
            <Text
              {...description}
              content="É possível realizar avisos gerais ou particulares a colaboradores, com a garantia de leitura temos a certeza do recebimento da informação, gerando mais rapidez na comunicação e segurança jurídica para todas as situações."
            />
          
          </Box>
          <Box {...imageWrapper}>
         
            <Box my={5}></Box>
            <Grid container spacing={6}>
              <Grid item md={4} sm={12} xs={12}>

              <Image
                  src={Avisos}
                  width={'100%'}
                  height={'100%'}
                  alt={'Avisos Inteligentes de Controle de Ponto'}
                />
              </Grid>
              <Grid item md={8} sm={12} xs={12}>
              <Text
              {...description}
              content="Cansado de cobrar o colaborador para fazer ajustes e alterações, regularizar situações, ou até mesmo mandar aquela mensagem desejando um feliz aniversário?"/>
            
            <Text
              {...description}
              content="Deixe isso com o aplicativo!"/>
              
              <Text
              {...description}
              content="Com o ponto Icarus  isto é totalmente possível, podendo ser configurado avisos automáticos como avisos de esquecimento de registros de pontos, ajustes cotidianos do departamento pessoal, felicitações de aniversário, reprovação de ajustes e abonos de ponto, avisos de extrapolamento de horas extras feitas no dia, notificação de férias, ou outros avisos importantes." />
              <Box my={2}></Box>


              <Text
              {...description}
              content="Os avisos também possuem confirmação de entrega pelo sistema, o que garante a leitura de cada colaborador e a segurança jurídica da empresa em seus comunicados." />
              <Box my={2}></Box>





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