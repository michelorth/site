import { Box, Grid, Link, Paper, Typography } from '@material-ui/core';
import Container from 'common/components/UI/Container';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { ResetCSS } from 'common/assets/css/style';

import {
  ContentWrapper, GlobalStyle
} from 'containers/SaasModern/sassModern.style';
import Footer from 'containers/SaasModern/Footer';
import { BannerWrapper } from 'containers/SaasModern/Icarus/banner.style';
import Navbar from 'containers/SaasModern/Navbar';

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import SEO from 'components/seo';

const Calculadora = (
  row,
  contentWrapper,
  discountAmount,
  discountText,
  title,
  description,
  imageWrapper,
  buttonWrapper,
  button,
  fillButton,
) => {


  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <SEO canonical="/calculadora" title="Calculadoras"/>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerWrapper id="inicio">
            <Container>
       
                <Grid container style={{marginTop: 60, marginBottom: 60}} spacing="6">
                    <Grid item md={4} sm={12} xs={12}>
                        <Link href="/calculadora/salario-liquido">
                            <a>
                                <Paper elevation="5" style={{padding: 20, textAlign: 'center'}}>
                                        <Typography variant="h6">Calcular Salário Liquído</Typography>
                                        <Box my={2} />
                                        <Typography variant="subtitle1">Utilize esta calculadora para fazer o cálculo de seu salário líquido</Typography>
                                </Paper>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <Link href="/calculadora/fgts">
                            <a>
                                <Paper elevation="5" style={{padding: 20, textAlign: 'center'}}>
                                        <Typography variant="h6">Calcular FGTS</Typography>
                                        <Box my={2} />
                                        <Typography variant="subtitle1">Utilize esta calculadora para fazer o cálculo de FGTS</Typography>
                                </Paper>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <Link href="/calculadora/inss">
                            <a>
                                <Paper elevation="5" style={{padding: 20, textAlign: 'center'}}>
                                        <Typography variant="h6">Calcular INSS</Typography>
                                        <Box my={2} />
                                        <Typography variant="subtitle1">Utilize esta calculadora para fazer o cálculo de seu INSS</Typography>
                                </Paper>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <Link href="/calculadora/irrf">
                            <a>
                                <Paper elevation="5" style={{padding: 20, textAlign: 'center'}}>
                                        <Typography variant="h6">Calcular IRRF</Typography>
                                        <Box my={2} />
                                        <Typography variant="subtitle1">Utilize esta calculadora para fazer o cálculo de seu IRRF (Imposto sobre a renda retido na fonte)</Typography>
                                </Paper>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <Link href="/calculadora/seguro-desemprego">
                            <a>
                                <Paper elevation="5" style={{padding: 20, textAlign: 'center'}}>
                                        <Typography variant="h6">Calcular Seguro Desemprego</Typography>
                                        <Box my={2} />
                                        <Typography variant="subtitle1">Utilize esta calculadora para fazer o cálculo do valor de seu seguro desemprego</Typography>
                                </Paper>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <Link href="/calculadora/salario-anual">
                            <a>
                                <Paper elevation="5" style={{padding: 20, textAlign: 'center'}}>
                                        <Typography variant="h6">Calcular Salário Anual</Typography>
                                        <Box my={2} />
                                        <Typography variant="subtitle1">Utilize esta calculadora para fazer o cálculo do salário anual</Typography>
                                </Paper>
                            </a>
                        </Link>
                    </Grid>

                    <Grid item md={4} sm={12} xs={12}>
                        <Link href="/calculadora/hora-extra">
                            <a>
                                <Paper elevation="5" style={{padding: 20, textAlign: 'center'}}>
                                        <Typography variant="h6">Calcular Hora Extra</Typography>
                                        <Box my={2} />
                                        <Typography variant="subtitle1">Utilize esta calculadora para fazer o cálculo do valor da hora extra realizada no mês</Typography>
                                </Paper>
                            </a>
                        </Link>
                    </Grid>

                </Grid>




          </Container>
        <Footer></Footer>
          </BannerWrapper>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Calculadora;



Calculadora.propTypes = {
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

Calculadora.defaultProps = {
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
