import React from 'react';
import loadable from '@loadable/component';
import Icon2 from 'common/assets/image/app/1.svg';
import Icon3 from 'common/assets/image/app/2.svg';
import Icon4 from 'common/assets/image/app/3.svg';
import Icon5 from 'common/assets/image/app/4.svg';
import Icon6 from 'common/assets/image/app/5.svg';
import Icon1 from 'common/assets/image/app/6.svg';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import FeatureSectionTwoWrapper from './featureSliderTwo.style';

const Box = loadable(() => import('common/components/Box'));
const FeatureBlock = loadable(() => import('common/components/FeatureBlock'));
const Heading = loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));

const features = [
  {
    id: 1,
    image: Icon1,
    title: 'Super Performance',
  },
  {
    id: 2,
    image: Icon2,
    title: 'Consulte os Pontos Registrados',
  },
  {
    id: 3,
    image: Icon3,
    title: 'Faça Ajustes e Abonos',
  },

  {
    id: 4,
    image: Icon4,
    title: 'Registre o Ponto Pelo Aplicativo',
  },

  {
    id: 5,
    image: Icon5,
    title: 'Controle e Solicite Férias',
  },

  {
    id: 6,
    image: Icon6,
    title: 'Upload e Gestão de Documentos',
  },
];

const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  return (
    <FeatureSectionTwoWrapper>
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} />
          <Heading {...sectionTitle} />
        </Box>
        <Box className="row" {...row}>
          {features.map((feature, index) => (
            <Box className="col" {...col} key={index}>
              <Fade bottom delay={index * 120}>
                <FeatureBlock
                  icon={<Image src={feature.image} alt="Demo Image" />}
                  wrapperStyle={blockWrapperStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={<Heading content={feature.title} {...featureTitle} />}
                />
              </Fade>
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureSectionTwoWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['56px', '56px'],
  },
  // sub section default style
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
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1 / 2, 1 / 2, 1 / 3, 1 / 3, 1 / 3],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['10px', '20px', '20px', '40px'],
  },
  // feature icon default style
  iconStyle: {
    width: '75px',
    height: '75px',
    m: '0 auto',
    borderRadius: '50%',
    bg: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    color: '#29cf8a',
    overflow: 'hidden',
    mb: '15px',
  },
  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['16px', '18px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '20px',
    letterSpacing: '-0.020em',
  },
};

export default FeatureSection;
