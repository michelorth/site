import React, { useState } from 'react';
import { Grid, Link } from '@material-ui/core';
import { closeModal, openModal } from '@redq/reuse-modal';
import loadable from '@loadable/component'
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import BannerWrapper, {
  BannerContent,
  BannerImage, ButtonGroup,
  VideoWrapper
} from './banner.style';
import bannerImg from 'common/assets/image/appCreative/bannerImg.webp';
import Fade from 'react-reveal/Fade';
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
      <Container>
      {show && <Modal show={show} onRequestClose={() => setShow(false)}/>}
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="A transformação da Indústria começa na palma da sua mão"
            />
          </Fade>
          <Fade up delay={200}>
            <Text content="Conheça a Ponto Icarus:" style={{fontWeight: 'bold'}} />
            <Text content="Aplicativo de Ponto Eletrônico Inteligente que otimiza em até 80% o trabalho do RH e Contabilidade em fechamento de ponto." />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Grid container>
                
                <Grid item md={6} sm={6} xs={6}>
                <Link href="#cadastroTrial" style={{textDecoration:'none'}}>
                    <a >
                      <Button className="primary" title="14 Dias de Teste Grátis" />
                    </a>
                </Link>
                </Grid>

                <Grid item md={6} sm={6} xs={6}>
                  <div onClick={() => setShow(true)}>
                    <Button
                      className="text"
                      variant="textButton"
                      icon={<Icon icon={playCircle} />}
                      iconPosition="left"
                      title="ASSISTIR VÍDEO"
                    />
                  </div>
                </Grid>
              </Grid>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <img src={bannerImg} alt="Banner" />
        </BannerImage>
       
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
