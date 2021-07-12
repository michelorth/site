import loadable from '@loadable/component';
import { Avatar, Link, Button, Grid } from '@material-ui/core';
import UESLEI from 'common/assets/image/uesley.webp';
import ALINE from 'common/assets/image/aline.webp';
import {
  AuthorInfo, TestimonialItem,
  TestimonialMeta, TestimonialSlideWrapper
} from './testimonial.style';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React from 'react';
import PropTypes from 'prop-types';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';

const GlideCarousel = loadable(() => import('common/components/GlideCarousel'));
const Box = loadable(() => import('common/components/Box'));
const Heading = loadable(() => import('common/components/Heading'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));

const TESTIMONIALS = [
 
  {
    title: 'O Registro Ficou Muito Mais Fácil',
    review:
      'O sistema PONTO ICARUS nos pode proporcionar uma evolução no método de registro o PONTO dos nossos colaboradores. O registro ficou muito mais fácil através do aplicativo e seguro ao usar o reconhecimento facial. O suporte fornecido pela ICARUS está sendo fundamental para a utilização do sistema, em que sempre somos prontamente atendidos quando necessário.',
    name: 'Aline Marques Da Silva',
    designation: 'Assistente de RH - SEMENTES SOESP',
    avatar: ALINE
  },
  {
    title: 'Rápido, Interativo e de Fácil Utilização',
    review:
      'O sistema (Web e APP) por si só é ótimo! Rápido, interativo e de fácil utilização. Sempre foram muito solícitos e pontuais com nossas dúvidas e solicitações.',
    name: 'Uéslei Delfino Loyola',
    designation: 'Gerente - FAZZY INTERNET',
    avatar: UESLEI
  },
  {
    title: 'Fácil e Intuitivo',
    review:
      'Uma ótima ferramenta para gestão do ponto dos colaboradores, muito simples de usar tanto para gestores como para os colaboradores.',
    name: 'Carlos Eduardo Borges Pereira',
    designation: 'Gerente Administrativo - INOVA CONDOMÍNIOS'
  },
  {
    title: 'Dedicação e Eficiência',
    review:
      'Plataforma moderna e completa que está aliada a uma equipe atenciosa, preocupada com o cliente e prestativa para proporcionar a melhor experiência.',
    name: 'Rafaela Silva',
    designation: 'Assistente Administrativo - QUALIX TECNOLOGIA'
  }
];



const TestimonialSection = React.memo(({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  reviewTitle,
  review,
  name,
  designation,
}) => {
  const carouselOptions = {
    type: 'carousel',
    autoplay: 6000,
    perView: 2,
    gap: 30,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 1,
      },
    },
  };

  return (
    <Box {...sectionWrapper} as="section" id="testimonial_section">
      <Container>
      <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          
        </Grid>
        <Box my={10} />
        <Box {...secTitleWrapper}>
          <Text {...secText} content="DEPOIMENTOS" />
          <Heading {...secHeading} content="O que dizem nossos clientes sobre nós?" />
        </Box>
        <TestimonialSlideWrapper>
          <GlideCarousel
            options={carouselOptions}
            carouselSelector="testimonial__slider"
            controls={false}
            bullets={true}
            numberOfBullets={3}
          >
            <>
              {TESTIMONIALS.map((item, index) => (
                <GlideSlide key={`testimonial-slide-${index}`} id={`testimonial-slide-${index}`}>
                  <TestimonialItem key={`testimonial-slide1-${index}`}>
                    <Heading as="h3" content={item.title} {...reviewTitle} key={`testimonial-slide2-${index}`} />
                    <Text content={item.review} {...review} key={`testimonial-slide3-${index}`}/>
                    <TestimonialMeta key={`testimonial-slide3-${index}`}>
                      <AuthorInfo key={`testimonial-slide4-${index}`}>
                       
                         
                        <Avatar alt="avatar" src={item.avatar} style={{width:50, height: 50}} key={`testimonial-slide5-${index}`}/>

                        <Box style={{marginLeft: 10}}>
                          <Heading as="h3" content={item.name} {...name} />
                          <Text content={item.designation} {...designation} />
                        </Box>
                      </AuthorInfo>
                    </TestimonialMeta>
                  </TestimonialItem>
                </GlideSlide>
              ))}
            </>
          </GlideCarousel>
        </TestimonialSlideWrapper>
      </Container>
    </Box>
  );
});

TestimonialSection.propTypes = {
  sectionHeader: PropTypes.object,
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '90px', '100px', '100px'],
    pb: ['60px', '80px', '90px', '100px', '100px'],
  },
  secTitleWrapper: {
    mb: ['40px', '60px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
  reviewTitle: {
    fontSize: ['15px', '16px'],
    fontWeight: '500',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '13px',
  },
  review: {
    fontSize: ['16px', '19px'],
    fontWeight: '300',
    color: '#343d48',
    lineHeight: '1.7',
    mb: 0,
  },
  name: {
    fontSize: ['14px', '16px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '8px',
  },
  designation: {
    fontSize: ['12px', '14px'],
    color: '#6f7a87',
    mb: 0,
  },
};

export default TestimonialSection;