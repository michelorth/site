import React from 'react';
import loadable from '@loadable/component';
import { Grid, Link, Button } from '@material-ui/core';
import { SERVICE_ITEMS } from 'common/data/SaasClassic';
import PropTypes from 'prop-types';
import SectionWrapper from './service.style';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Box = loadable(() => import('common/components/Box'));
const Heading = loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));


const ServiceSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  Row,
  Col,
  serviceTitleStyle,
  secDes,
}) => {

  return (
    <SectionWrapper>
      <Container>


        <Box {...secTitleWrapper} style={{textAlign: 'center'}}>
                    
          <Text {...secText} content="TRABALHE DE FORMA INTELIGENTE" style={{marginTop: 30}} />
          <Heading
            {...secHeading}
            content="Escolha a plataforma mais completa para gestão de ponto eletrônico"
          /> 
          <Text
            {...secDes}
            content="Tenha acesso a funcionalidades que irão lhe ajudar em seu dia a dia, descomplique o fechamento de folha, distribua holerites rapidamente, encaminhe notificações, tenha controle da sua empresa através de dashboards e alertas inteligentes."
          />
          
        </Box>

       
        <Box my={10} />

        <Box {...Row}>
          <Grid container>
          {SERVICE_ITEMS.map((item, index) => (
            <Grid item md={2} sm={2} xs={6}>
              <Box
                {...Col}
                key={`service-item-${index}`}
                className="service_item_col"
              >
                <Box className="service_item">
                  <Box className="service_icon">
                  <Image
                    width={'70%'}
                    height={'70%'}
                    src={item.icon}
                    alt='Sistema de Ponto Eletrônico'
                  />
                  </Box>
                  <Heading as="h3" content={item.title} {...serviceTitleStyle} />
                </Box>
              </Box>
            </Grid>
          ))}
          </Grid>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

ServiceSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
  Row: PropTypes.object,
  Col: PropTypes.object,
  serviceTitleStyle: PropTypes.object,
  secDes: PropTypes.object,
};

ServiceSection.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '12px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '540px',
    maxWidth: '100%',
  },
  Row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    ml: ['0', '-15px', '-20px', '-35px', '-35px'],
    mr: ['0', '-15px', '-20px', '-35px', '-35px'],
  },
  Col: {
    pl: ['15px', '15px', '25x', '35px', '35px'],
    pr: ['15px', '15px', '25px', '35px', '35px'],
    mb: '40px',
  },
  serviceTitleStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '17px'],
    fontWeight: '500',
    color: '#2aa275',
    mb: 0,
  },
  secDes: {
    fontSize: ['14px', '15px', '16px'],
    color: '#5d646d',
    lineHeight: '1.875',
    mt: '30px',
    ml: 'auto',
    mr: 'auto',
    width: '470px',
    maxWidth: '100%',
    textAlign: 'center',
  },
};

export default ServiceSection;
