import loadable from '@loadable/component';
import Thumb2 from 'common/assets/image/app/1.svg';
import Thumb3 from 'common/assets/image/app/2.svg';
import Thumb4 from 'common/assets/image/app/3.svg';
import Thumb5 from 'common/assets/image/app/4.svg';
import Thumb6 from 'common/assets/image/app/5.svg';
import Thumb1 from 'common/assets/image/app/6.svg';
import Image2 from 'common/assets/image/app/slide-1.webp';
import Image1 from 'common/assets/image/app/slide-2.webp';
import Image3 from 'common/assets/image/app/slide-3.webp';
import Image4 from 'common/assets/image/app/slide-4.webp';
import Image5 from 'common/assets/image/app/slide-5.webp';
import Image6 from 'common/assets/image/app/slide-6.webp';
import PropTypes from 'prop-types';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import FeatureSliderWrapper from './featureSlider.style';

const Box = loadable(() => import('common/components/Box'));
const Text = loadable(() => import('common/components/Text'));
const Heading = loadable(() => import('common/components/Heading'));
const Container = loadable(() => import('common/components/UI/Container'));


const images = [
 
  {
    original: `${Image2}`,
    thumbnail: `${Thumb1}`,
    thumbnailLabel: 'Super Performance',
    originalAlt: 'performance',
    thumbnailAlt: 'performance',
  },
  { 
    original: `${Image4}`,
    thumbnail: `${Thumb4}`,
    thumbnailLabel: 'Registre o Ponto Pelo Aplicativo',
    originalAlt: 'Registre o Ponto Pelo Aplicativo',
    thumbnailAlt: 'Registre o Ponto Pelo Aplicativo',
  },
  {
    original: `${Image1}`,
    thumbnail: `${Thumb2}`,
    thumbnailLabel: 'Consulte os Pontos Registrados',
    originalAlt: 'Consulte os Pontos Registrados',
    thumbnailAlt: 'Consulte os Pontos Registrados',
  },
  {
    original: `${Image3}`,
    thumbnail: `${Thumb3}`,
    thumbnailLabel: 'Faça Ajustes e Abonos',
    originalAlt: 'Faça Ajustes e Abonos',
    thumbnailAlt: 'Faça Ajustes e Abonos',
  },
  
  {
    original: `${Image5}`,
    thumbnail: `${Thumb5}`,
    thumbnailLabel: 'Controle e Solicite Férias',
    originalAlt: 'Controle e Solicite Férias',
    thumbnailAlt: 'Controle e Solicite Férias',
  },
  {
    original: `${Image6}`,
    thumbnail: `${Thumb6}`,
    thumbnailLabel: 'Upload e Gestão de Documentos',
    originalAlt: 'Upload e Gestão de Documentos',
    thumbnailAlt: 'Upload e Gestão de Documentos'
  },
];

const FeatureSlider = ({ sectionSubTitle, sectionTitle, sectionHeader }) => {
  return (
    <FeatureSliderWrapper>
      <div className="FeatureSliderInner">
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} />
          <Heading {...sectionTitle} />
        </Box>
        <Box className="FeatureSlider">
          <ImageGallery
            items={images}
            className="Slider-img"
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            showBullets={true}
            autoPlay={true}
          />
        </Box>
      </Container>
    </FeatureSliderWrapper>
  );
};

// FeatureSlider style props
FeatureSlider.propTypes = {
  sectionSubTitle: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionHeader: PropTypes.object,
};

// FeatureSlider default style
FeatureSlider.defaultProps = {
  sectionHeader: {},
  sectionSubTitle: {
    content: 'PORQUE ESCOLHER-NOS',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#1a73e8',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    content: 'Principais recursos do nosso aplicativo',
    textAlign: 'center',
    fontSize: ['20px', '24px', '24px', '24px', '30px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
};

export default FeatureSlider;
