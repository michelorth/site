import React, { useState } from 'react';
import loadable from '@loadable/component';
import { Grid, Link } from '@material-ui/core';
import { VideoArea } from 'containers/SaasClassic/Banner/banner.style';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import { ic_play_arrow } from 'react-icons-kit/md/ic_play_arrow';
import BannerWrapper, {
  BannerContent, VideoWrapper
} from './banner.style';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import bannerImg from 'common/assets/image/saasModern/design-responsivo.webp';
import Dialog from '@material-ui/core/Dialog';

const Button = loadable(() => import('common/components/Button'));
const Heading = loadable(() => import('common/components/Heading'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));


const Modal = ({
  show, onRequestClose
}) => {

  const [exibe, setExibe] = useState(show);

  const fecha = () => {
    setExibe(false);
    onRequestClose();
  }

  return (
    
    <Dialog onClose={() => fecha()} aria-labelledby="simple-dialog-title" open={exibe}>
        <VideoWrapper>
            <iframe
              title="Video"
              src="https://www.youtube.com/embed/QLS8AOml4Lw?controls=2&fs=1&rel=0&showinfo=0&modestbranding=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              frameBorder="0"
            />
          </VideoWrapper>
    </Dialog>
  );
}

const Banner = () => {

  const [show, setShow] = useState(false);
 
  return (
    <BannerWrapper id="home">
      {show && <Modal show={show} onRequestClose={() => setShow(false)}/>}
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              style={{color: "#fff"}}
              as="h1"
              content="Aplicativo de Ponto Eletrônico Online"
            />
          </Fade>
          <Fade up delay={200}>
          <Text
              content="Aplicativo de Ponto Eletrônico Online: A Ferramenta de Controle de Jornada do Colaborador mais Completa do Mercado!"
            />
            <Text
              content="Faça a gestão de ponto em tempo real. O Registro de Ponto Online Icarus utiliza recursos de geolocalização e reconhecimento facial com a melhor tecnologia disponível."
            />
          </Fade>
          <Fade up delay={300}>
            <Grid container spacing={2}>
              
              <Grid item>
                  <Link href="#cadastroTrial">
                    <a>
                      <Button  title="TESTE GRÁTIS" aria-label="TESTE GRÁTIS" style={{color: '#000', backgroundColor: '#edcd37'}}/>
                    </a>
                </Link>
              </Grid>

              <Grid item>
                <Button
                  color="#fff"
                  className="text"
                  onClick={() => {setShow(true)}}
                  variant="textButton"
                  icon={<Icon icon={playCircle} size={30}/>}
                  iconPosition="left"
                  title="ASSISTIR VÍDEO"
                />
            </Grid>
            </Grid>
          </Fade>
        </BannerContent>
        


        <Fade bottom>
            <VideoArea >
              <img src={bannerImg} alt="Aplicativo de Ponto Eletrônico" style={{width: '100%', height: '100%', marginTop: 20}}/>
              
              <Button
                className="video__btn"
                onClick={() => setShow(true)}
                icon={<Icon className="plus" icon={ic_play_arrow} />}
              />
            </VideoArea>
        </Fade>


      </Container>
      
    </BannerWrapper>
  );
};

export default Banner;


Banner.propTypes = {
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

Banner.defaultProps = {
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
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
};