import loadable from '@loadable/component';
import {
  Accordion, AccordionBody, AccordionItem,
  AccordionTitle, CloseIcon, IconWrapper,
  OpenIcon
} from 'common/components/Accordion';
import { FAQ_DATA } from 'common/data/SaasModern';
import { Icon } from 'react-icons-kit';
import { minus } from 'react-icons-kit/entypo/minus';
import { plus } from 'react-icons-kit/entypo/plus';
import FaqWrapper from './faq.style';
import React from 'react';
import PropTypes from 'prop-types';


const Box = loadable(() => import('common/components/Box'));
const Text = loadable(() => import('common/components/Text'));
const Heading = loadable(() => import('common/components/Heading'));
const Container = loadable(() => import('common/components/UI/Container'));


const FaqSection = React.memo(({
  sectionWrapper,
  row,
  col,
  secTitleWrapper,
  secHeading,
  secText,
  title,
  description,
  buttonWrapper,
  button,
}) => {
  return (
    <Box {...sectionWrapper} id="duvidas">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="PERGUNTAS FREQUENTES" />
          <Heading {...secHeading} content="Ficou com alguma dúvida?" />
        </Box>
        <Box {...row}>
          <Box {...col}>
            <FaqWrapper>
              <Accordion>
                <>
                  {FAQ_DATA.map((accordionItem, index) => (
                    <AccordionItem
                      className="accordion_item"
                      key={`accordion-${index}`}
                      expanded={accordionItem.expend}
                    >
                      <>
                        <AccordionTitle className="accordion_title">
                          <>
                            <Heading {...title} content={accordionItem.title} />
                            <IconWrapper>
                              <OpenIcon>
                                <Icon icon={minus} size={18} />
                              </OpenIcon>
                              <CloseIcon>
                                <Icon icon={plus} size={18} />
                              </CloseIcon>
                            </IconWrapper>
                          </>
                        </AccordionTitle>
                        <AccordionBody className="accordion_body">
                          {
                            accordionItem.description ?
                          <Text
                            {...description}
                            content={accordionItem.description}
                          />
                          :
                          <div dangerouslySetInnerHTML={accordionItem.descriptionGab} style={description}/>
                          }
                        </AccordionBody>
                      </>
                    </AccordionItem>
                  ))}
                </>
              </Accordion>
            </FaqWrapper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
});

FaqSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
};

FaqSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['20px', '30px', '50px', '50px'],
    pb: ['60px', '80px', '80px', '80px'],
  },
  secTitleWrapper: {
    mb: ['55px', '65px'],
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
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  col: {
    width: ['100%', '100%', '75%', '75%'],
  },
  title: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: 0,
  },
  description: {
    fontSize: '15px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: 0,
  },
  buttonWrapper: {
    mt: '50px',
    flexBox: true,
    justifyContent: 'center',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: ['22px'],
    pr: ['22px'],
    colors: 'secondaryWithBg',
    minWidth: '150px',
  },
};

export default FaqSection;