import loadable from '@loadable/component';
import { Grid, Typography } from '@material-ui/core';
import Anab from 'common/assets/image/saasModern/anab.webp';
import ISO9001 from 'common/assets/image/saasModern/iso9001.webp';
import BannerImage from 'common/assets/image/saasModern/partner.webp';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { BannerWrapper } from './banner.style';

const Box = loadable(() => import('common/components/Box'));
const Heading = loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));
const TiltShape = loadable(() => import('../TiltShape'));

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

  const [showVideo, setShowVideo] = useState(false);

  return (
    <BannerWrapper id="inicio">
      <TiltShape />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            
            <Heading
              as='h1'
              {...title}
              content="“Ícarus meu filho, voaremos como pássaros, aconselho que voes em uma altura moderada, conserva-te perto de mim e estarás a salvo…”"
            />
            <Text
              {...description}
              content="A antiga lenda de Ícarus reflete aspectos sobre a nossa vida atual, a mensagem da história grega enfatiza grandes pontos decisivos para que a humanidade encontre o sucesso."
            />
            <Box {...buttonWrapper}>
              
            
             <Text style={{backgroundColor: '#0a627c', padding: 15}}
              {...description}
              content="Nosso Aplicativo compartilha destes valores com o mesmo objetivo"
            />

            </Box>
          </Box>
          <Box {...imageWrapper}>
            <Fade bottom>
            <Grid container>
                <Grid item md={4} sm={12} xs={12}>
                
                    <Typography variant="h6" style={description}>Liberdade</Typography>
                    <Typography variant="body2" style={description}>Trabalhe aonde estiver, progrida e avance sem complicações, informações precisas em tempo real.</Typography>
                
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                
                    <Typography variant="h6" style={description}>Responsabilidade</Typography>
                    <Typography variant="body2" style={description}>Mantenha o equilíbrio das informações, compartilhando e registrando dados importantes sobre toda a jornada.</Typography>
                    
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                
                    <Typography variant="h6" style={description}>Segurança</Typography>
                    <Typography variant="body2" style={description}>Acompanhe de perto os detalhes da operação remotamente com informações gráficas e assertivas.</Typography>
                
                </Grid>


              </Grid>

              <Box my={15} />

              <Grid container>
                <Grid item md={8} sm={12} xs={12}>
                  <Typography variant="h6" style={description} >Empresa certificada ISO 9001:2015</Typography>
                  <Box my={5} />
                  <Typography variant="body2" style={description}>A ISO 9001:2015 é a norma de Sistema de Gestão da Qualidade (SGQ) reconhecida internacionalmente, cujo objetivo é comprovar a capacidade da empresa em fornecer produtos e serviços que atendam às necessidades de seus clientes e requisitos legais e regulatórios aplicáveis, aumentando assim a satisfação do cliente por meio de melhorias de processo e avaliação da conformidade.</Typography>
                </Grid>

                <Grid item md={4} sm={12} xs={12} style={{alignSelf: 'center'}}  container direction="row" justify="center">
                  <Image src={Anab} alt="Anab" 
                   width={150}
                   height={100}/>
                </Grid>
              </Grid>

              <Box my={15} />

              <Grid container  container direction="row" justify="center">
                <Grid item md={8} sm={12} xs={12}>
                  <Typography variant="h6" style={description}>Política do Sistema de Gestão da Qualidade</Typography>
                  <Box my={5} />
                  <Typography variant="body2" style={description}>Encantar o cliente, agregando valor, atendendo e superando as expectativas das partes interessadas, expandindo nossa área de atuação, focando na melhoria contínua de nossos serviços e do Sistema de Gestão da Qualidade.</Typography>
                  <Typography variant="body2" style={description}>INFO-001 – Política da Qualidade – Revisão 01 de 04/11/2019</Typography>
                </Grid>

            
                <Grid item md={4} sm={12} xs={12} container justify="center">
                    
                    <Image src={ISO9001} alt="ISO9001"
                     width={150}
                     height={150}/>
                </Grid>
              </Grid>
              

              <Box my={15} />

              <Grid item md={12} sm={12} xs={12} container justify="center">
                <Image src={BannerImage} alt="dashboard ponto icarus"
                 width={'100%'}
                 height={'100%'}/>
              </Grid>



            </Fade>
          </Box>
        </Box>
        <Box my={15} />
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