import React from 'react';
import loadable from '@loadable/component';
import { Grid } from '@material-ui/core';
import ReconhecimentoFacialJson from 'common/assets/image/reconhecimento-facial.json';
import ReconhecimentoFacial from 'common/assets/image/reconhecimento_facial.webp';
import PropTypes from 'prop-types';
import Lottie from "react-lottie";
import { BannerWrapper } from './banner.style';

const Box = loadable(() => import('common/components/Box'));
const Heading =loadable(() => import( 'common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ReconhecimentoFacialJson,
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
              content="Registro de Ponto com Reconhecimento Facial"
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
             width={'100%'}
             height={'100%'}
                  src={ReconhecimentoFacial}
                  alt={'Aplicativo de Ponto com Reconhecimento Facial'}
            />
            </Grid>
            <Grid item md={8} sm={12} xs={12}>
          <Text
              {...description}
              content="Reconhecimento facial é um sistema desenvolvido para identificar uma pessoa por meio de imagem ou vídeo. Essa tecnologia já existe há décadas, mas seu uso se tornou mais perceptível e acessível nos últimos anos, pois agora ela é usada em soluções inovadoras, como aplicativos pessoais de foto e autenticação secundária para dispositivos móveis."/>
            <Box my={3} />
            <Text
              {...description}
              content="Os recursos de análise facial, como os disponibilizados no Icarus, permitem que os usuários identifiquem a presença de rostos em uma imagem ou vídeo, indicando também quais atributos esses rostos têm."/>
              
              <Box my={3} />
            <Text
                {...description}
                content="Os rostos são comparados com base na geometria visual, incluindo as proporções entre os olhos, o nariz, as sobrancelhas, a boca e outras características faciais. Quando as imagens são analisadas, é criado um contorno ao redor do rosto chamado de caixa delimitadora. Ela define a única parte da imagem que o software analisa. Depois disso, a análise cria números de notação de objeto para a imagem, indicando a “localização” dos principais elementos do rosto."/>
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