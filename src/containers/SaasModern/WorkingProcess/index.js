import loadable from '@loadable/component';
import React from 'react';
import { PROCESS_ITEMS } from 'common/data/SaasModern';
import ProcessItem, { ProcessIndex } from './workingProcess.style';
import PropTypes from 'prop-types';


const Box = loadable(() => import('common/components/Box'));
const Text = loadable(() => import('common/components/Text'));
const Heading =loadable(() => import( 'common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Container = loadable(() => import('common/components/UI/Container'));

const htmlDescriptionStyle = {
  fontSize: '15px',
  color: '#343d48',
  lineHeight: 1.87,
}
const WorkingProcessSection = React.memo(({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  processRow,
  processCol,
  processImageStyle,
  processTitleStyle,
  processDescriptionStyle,
}) => {
  return (
    <Box {...sectionWrapper} as="section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="CONTROLE DE PONTO ONLINE - EXPERIMENTE GRÁTIS" />
          <Heading
            {...secHeading}
            content="Como faço para começar a usar?"
          />
        </Box>

        <Box {...processRow}>
          {PROCESS_ITEMS.map((item, index) => (
            <Box
              {...processCol}
              key={`process-item-${index}`}
              className="process_item_col"
            >
              <ProcessItem className="process_item">
                <ProcessIndex>{item.index || index + 1}</ProcessIndex>
                <Image
                  src={item.image}
                  alt={`process-image-${index + 1}`}
                  width={'100%'}
                  height={'100%'}
                  {...processImageStyle}
                />
                <Heading as="h3" content={item.title} {...processTitleStyle} />
                {
                  item.description ? 
                <Text content={item.description} {...processDescriptionStyle} />

                  :                  
                <div dangerouslySetInnerHTML={item.descriptionHtml} style={htmlDescriptionStyle}/>

                }
              </ProcessItem>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
});

WorkingProcessSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  processRow: PropTypes.object,
  processCol: PropTypes.object,
  processImageStyle: PropTypes.object,
  processTitleStyle: PropTypes.object,
  processDescriptionStyle: PropTypes.object,
};

WorkingProcessSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '15px', '15px', '15px', '15px'],
    pb: 0,
  },
  secTitleWrapper: {
    mb: ['60px', '100px'],
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
  processRow: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['0', '-15px', '-20px', '-35px', '-45px'],
    mr: ['0', '-15px', '-20px', '-35px', '-45px'],
  },
  processCol: {
    width: [1, 1 / 3],
    pl: ['0', '15px', '20px', '35px', '45px'],
    pr: ['0', '15px', '20px', '35px', '45px'],
    mb: '40px',
  },
  processImageStyle: {
    width: ['60px', '60px', '70px', 'auto'],
  },
  processTitleStyle: {
    fontSize: ['20px', '18px', '20px', '20px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.02em',
    mb: ['20px', '20px', '22px', '22px', '22px'],
    mt: '35px',
  },
  processDescriptionStyle: {
    fontSize: ['15px', '15px', '15px', '15px'],
    fontWeight: '400',
    color: '#343d48',
    lineHeight: '1.87',
  },
};

export default WorkingProcessSection;