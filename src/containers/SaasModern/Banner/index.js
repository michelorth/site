import loadable from '@loadable/component';
import { Dialog, Hidden } from '@material-ui/core';
import BannerImage from 'common/assets/image/saasModern/design-responsivo.webp';
import { VideoArea } from 'containers/SaasClassic/Banner/banner.style';
import Link from '@material-ui/core/Link';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Icon from 'react-icons-kit';
import { ic_play_arrow } from 'react-icons-kit/md/ic_play_arrow';
import { ic_play_circle_filled } from 'react-icons-kit/md/ic_play_circle_filled';
import Fade from 'react-reveal/Fade';
import TiltShape from '../TiltShape';
import { BannerWrapper } from './banner.style';

const Box = loadable(() => import('common/components/Box'));
const Button = loadable(() => import('common/components/Button'));
const Heading = loadable(() => import('common/components/Heading'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));

const DialogVideo = ({show, onRequestClose}) => {

  const [exibe, setExibe] = useState(show);

  const close = () => {
    onRequestClose();
    setExibe(false);
  }

  return (

    <Dialog
      onClose={() => close()}
      open={exibe}>
        <Hidden mdUp>
          <iframe 
              width="100%" 
              title="vídeo explicativo"
              height="315"              
              src="https://www.youtube.com/embed/QLS8AOml4Lw?autoplay=1&controls=2&fs=1&rel=0&showinfo=0&modestbranding=1"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen={false}>            
          </iframe>
        </Hidden>

        <Hidden mdDown>
          <iframe 
              width="560" 
              title="vídeo explicativo"
              height="315"              
              src="https://www.youtube.com/embed/QLS8AOml4Lw?autoplay=1&controls=2&fs=1&rel=0&showinfo=0&modestbranding=1"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen={false}>            
          </iframe>
        </Hidden>
          
    </Dialog>
  );
  
}
const BannerSection = React.memo(({
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
      {showVideo && <DialogVideo show={showVideo} onRequestClose={() => setShowVideo(false)} /> }
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>  
        
            <Heading
              as='h1'
              {...title}
              content="Aplicativo de Ponto Eletrônico Online. Uma Solução Completa Para Otimizar sua Rotina"
            />
            <Text
              {...description}
              content="O Aplicativo de Ponto Eletrônico, Ponto Icarus utiliza os recursos de geolocalização e reconhecimento facial mais avançados disponíveis no mercado para que a sua empresa acompanhe os registros do ponto de seus colaboradores, proporcionando maior controle e segurança, com dados transmitidos em tempo real e com garantia de imutabilidade a todos os envolvidos."
            />
            <Box {...buttonWrapper}>
              <Link href="#cadastroTrial">
                <a>
                  <Button {...fillButton} title="TESTE GRÁTIS" aria-label="TESTE GRÁTIS" />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <Button
                    {...button}
                    title="ASSISTIR VÍDEO"
                    aria-label="ASSISTIR VÍDEO"
                    title="ASSISTIR VÍDEO"
                    onClick={() => setShowVideo(true)}
                    icon={<Icon icon={ic_play_circle_filled} size={30} />}
                    iconPosition="left"
                  />
                </a>
              </Link>
            </Box>
          </Box>

          <Box {...imageWrapper}>

          <Fade bottom>
            <VideoArea onClick={() => setShowVideo(true)}>
              <img src={BannerImage} alt="Aplicativo de Ponto Eletrônico" style={{width: '100%', height: '100%'}}/>
              
              <Button
                className="video__btn"
                icon={<Icon className="plus" icon={ic_play_arrow} />}
              />
            </VideoArea>
          </Fade>


          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
});

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

export default BannerSection;