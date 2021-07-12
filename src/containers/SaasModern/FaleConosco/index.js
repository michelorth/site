import loadable from '@loadable/component';
import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BannerWrapper } from './banner.style';
import PropTypes from 'prop-types';

const Box = loadable(() => import('common/components/Box'));
const Container = loadable(() => import('common/components/UI/Container'));
const TiltShape = loadable(() => import('../TiltShape'));
const Heading = loadable(() => import('common/components/Heading'));

const Icarus = ({
  row,
  contentWrapper
}) => {

  const [state, setstate] = useState();

  useEffect(() => {

  const rd = document.createElement("script");
  rd.id = 'rdContato';
  rd.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
  rd.async=true;

  document.body.appendChild(rd);

  if(window.RDStationForms) {

    const rd1 = document.createElement("script");
    rd1.id = 'rdContato';
    rd1.text = "new RDStationForms('fale-conosco-7b66b72c75afda7c166a', 'UA-108347306-5').createForm();";
    rd1.async=true;

    document.body.appendChild(rd1);
  }
    
  }, [state])

  setTimeout(() => {
      setstate(true);
  }, 1000);

 


  return (
    <BannerWrapper id="inicio">
      <TiltShape />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>          
            <Grid container style={{width: '100%', backgroundColor: '#fff'}} justify="center">
            <Heading
              style={{justify: 'center', color: 'rgb(183, 183, 203)', fontSize: '30pt', alignItems: 'center', borderWidth: 1}}
              as='h1'
              content="Contato"
            />
            </Grid>
            <div role="main" id="fale-conosco-7b66b72c75afda7c166a"></div>
          </Box>
        </Box>
        <Box my={15} />
      </Container>
    </BannerWrapper>
  );
};

Icarus.propTypes = {
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

Icarus.defaultProps = {
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

export default Icarus;