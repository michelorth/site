import React from 'react';
import loadable from '@loadable/component';
import PartnerSectionWrapper from './partner.style';
import NewsletterWrapper from '../Newsletter/newsletter.style';
import PropTypes from 'prop-types';

const Box = loadable(() => import('common/components/Box'));
const Container = loadable(() => import('common/components/UI/Container'));
const TrialSection = loadable(() => import('containers/SaasModern/Trial'));


const PartnerSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  sectionWrapper
}) => {
  return (
    <Box {...sectionWrapper} as="section">
      <Container>
        <NewsletterWrapper>

 
    <PartnerSectionWrapper>
      <Container>
        <Box {...row}>
          <TrialSection showLogomarca={false} informaNumeroColab={true}/>
        </Box>
      </Container>
    </PartnerSectionWrapper>
    </NewsletterWrapper>
    </Container>
    </Box>
  );
};

PartnerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
};

PartnerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%'],
    mb: ['40px', '40px', '0', '0', '0'],
  },
  title: {
    fontSize: ['26px', '30px', '30px', '48px', '48px'],
    fontWeight: '400',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '15px',
    lineHeight: '1.25',
  },
  description: {
    fontSize: '16px',
    color: '#ffe2e2',
    lineHeight: '1.75',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg',
    minWidth: '150px',
  },
};

export default PartnerSection;
