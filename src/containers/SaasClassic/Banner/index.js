import React from 'react';
import loadable from '@loadable/component';
import { Grid, Hidden } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import {
  BannerWrapper
} from './banner.style';


const Box = loadable(() => import('common/components/Box'));
const Button = loadable(() => import('common/components/Button'));
const Heading = loadable(() => import('common/components/Heading'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));
const TiltShape = loadable(() => import('../TiltShape'));


const BannerSection = ({
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
    <BannerWrapper id="banner_section">
      <TiltShape className="banner-shape" />
      <Container>
        <Box {...row}>

        <Grid container spacing={6}>
          <Grid item md={6} sm={6} xs={12}>
          <Box {...contentWrapper}>
           
            <br/><br/>
            <Heading
              as='h1'
              {...title}
              content="Sistema de Ponto Eletrônico Online"
            />

            <Text
              {...description}
             content="Otimize sua gestão com nosso sistema de ponto eletrônico, uma plataforma completa, que permite a batida de ponto de seus colaboradores através celular, tablet, navegador, ou até mesmo através de integração do seu atual relógio de ponto tradicional."
            />
            <br/>
            <Text
              {...description}             
             content="Nossa solução tem otimizado em até 80% do tempo de nossos clientes com a gestão de Ponto Eletrônico."
            />
<br/>
            <Text
              {...description}
             content="Avalie gratuitamente por 14 dias!"
            />

            <Box {...buttonWrapper}>
              <Link href="#cadastroTrial">
                <a>
                <Button {...fillButton} title="TESTE GRÁTIS" style={{fontSize: '16pt', padding: '28px 122px'}} />
                </a>
              </Link>
            </Box>
          </Box>
          </Grid>
          <Grid item md={6} sm={6} xs={12} style={{alignSelf:'center'}}>
          <Box {...imageWrapper}>
          <Hidden mdDown>
            <iframe
              title="vídeo explicativo"
              src="https://www.youtube.com/embed/QLS8AOml4Lw?controls=2&fs=1&rel=0&showinfo=0&modestbranding=1"
              style={{borderRadius: '20px', width:'100%', height: '299px', margin:'0 auto',overflow:'hidden'}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              frameBorder="0"
            />
          </Hidden>
          <Hidden mdUp>
            <iframe
                title="vídeo explicativo"
                src="https://www.youtube.com/embed/QLS8AOml4Lw?controls=2&fs=1&rel=0&showinfo=0&modestbranding=1"
                style={{borderRadius: '20px', width:'100%', height: '180px', margin:'0 auto',overflow:'hidden'}}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                frameBorder="0"
              />
          </Hidden>
          </Box>
          </Grid>
        </Grid>          
        </Box>
        <br/><br/><br/><br/><br/><br/>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
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

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '100%', '100%', '100%'],
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
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '400',
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
    height: '46px',
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

export default BannerSection;

