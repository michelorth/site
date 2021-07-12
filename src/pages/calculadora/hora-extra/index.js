import loadable from '@loadable/component';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { BannerWrapper } from 'containers/SaasModern/Icarus/banner.style';
import SEO from 'components/seo';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { ResetCSS } from 'common/assets/css/style';
import {
  ContentWrapper, GlobalStyle
} from 'containers/SaasModern/sassModern.style';

const Box = loadable(() => import('common/components/Box'));
const Heading = loadable(() => import('common/components/Heading'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));
const Navbar = loadable(() => import('containers/SaasModern/Navbar'));
const Footer = loadable(() => import('containers/SaasModern/Footer'));

const CalculadoraHoraExtra = (
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

  const [salarioInput, setSalarioInput] = useState();
  const [diasUteis, setDiasUteis] = useState(0);
  const [diasDSR, setDiasDSR] = useState(0);
  const [hrExtra1H, setHrExtra1H] = useState(0);
  const [hrExtra1M, setHrExtra1M] = useState(0);
  const [hrExtra2H, setHrExtra2H] = useState(0);
  const [hrExtra2M, setHrExtra2M] = useState(0);


  useEffect(() => {

    const style = document.createElement('style');
    style.textContent = "#tabelaResultados td, #tabelaResultados th {    border: 1px solid #000;    padding: 8px;  }   #tabelaResultados th { padding-top: 12px; padding-bottom: 12px; background-color: #5b5b5b; color: white;} #trSalarioLiquido { font-weight: bold; }";

    document.body.appendChild(style);

  }, [])

  const formatarMoeda = (i) => {
    let v = i.replace(/\D/g, '');
    v = (v / 100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");

    setSalarioInput(v);
  }

  const limpar = () => {
    document.getElementById("divTabelaResultados").style.display = 'none';
    setSalarioInput(0);
    setDiasUteis(0);
    setDiasDSR(0);
    setHrExtra1H(0);
    setHrExtra1M(0);
    setHrExtra2H(0);
    setHrExtra2M(0);
  }


  const calcular = () => {
    // SALÁRIO

    if (!salarioInput) return;

    var salario = parseFloat(salarioInput.replace('.', '').replace(',', '.')); // Conversão do salário em float

    // DSR
    var domFer = parseInt(diasDSR); // Conversão em inteiro
    var uteis = parseInt(diasUteis); // Conversão em inteiro

    // CALCULO DE 60%
    var hora60 = parseInt(hrExtra1H); // Conversão da hora em inteiro
    var minuto60 = parseFloat(hrExtra1M); // Conversão dos minutos em float        
    var min60 = minuto60 / 60; // Conversão dos minutos em decimal
    var resultado60 = hora60 + min60; // Calculo para saber a quantidade de hora extra, hora/minutos em valor decimal        

    // CALCULO DE 100%
    var hora100 = parseInt(hrExtra2H); // Conversão da hora em inteiro
    var minuto100 = parseFloat(hrExtra2H); // Conversão dos minutos em float       
    var min100 = minuto100 / 60; // Conversão dos minutos em decimal
    var resultado100 = hora100 + min100; // Calculo para saber a quantidade de hora extra, hora/minutos em valor decimal

    // CALCULO DE R$ EM HE 60%
    var valorHE50 = ((salario / 220) * 1.6) * resultado60;

    // CALCULO DE R$ EM HE 100%
    var valorHE100 = ((salario / 220) * 2) * resultado100;

    // TOTAL DE R$ EM HE

    var total = valorHE100 + valorHE50;

    // CALCULO DE DSR
    var dsr = ((valorHE50 + valorHE100) / uteis) * domFer;

    if (!dsr) {
      dsr = 0;
    }



    document.getElementById("valorHE50").innerHTML = parseFloat(valorHE50).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("valorHE100").innerHTML = parseFloat(valorHE100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("vlrTotalHrExtra").innerHTML = parseFloat(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("vlrDSR").innerHTML = parseFloat(dsr).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById("divTabelaResultados").style.display = 'block';

  }


  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <SEO canonical="/calculadora/hora-extra" title="Calculadora de Hora Extra" keywords="horas extras, calcular horas extras, valor horas extras, como calcular horas extras, calculando horas extras" description="Utilize a calculadora de valor de horas extras"/>
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
              <Paper elevation="2" style={{ padding: 20 }}>
                <Box {...row} style={{ textAlign: 'center' }}>
                  <Box {...contentWrapper} style={{ marginTop: 20 }}>

                    <Heading
                      as='h1'
                      {...title}
                      content="Calculadora de Hora Extra"
                    />
                    <Text
                      {...description}
                      content="Calcule o valor da(s) hora(s) extra(s) do mês"
                    />

                  </Box>
                  <Box {...imageWrapper}>
                    <TextField onKeyUp={(e) => formatarMoeda(e.target.value)} style={{ width: '70%' }} label="Salário Bruto" value={salarioInput} fullWidth variant="standard" onChange={(e) => { setSalarioInput(e.target.value) }} />
                  </Box>

                  <Box {...imageWrapper} style={{ marginTop: 15, alignItems: 'center' }}>

                    <Typography variant={'h7'} align='justify' style={{ alignSelf: 'center', width: '20%' }}> Para o cálculo de DSR, digite os dias úteis no mês e quantidade de feriados e domingos trabalhados (considerando sábado).</Typography>

                    <TextField label="Dias Úteis"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      style={{ width: '70%', marginTop: 20 }} label="Dias Úteis" value={diasUteis} fullWidth variant="standard" onChange={(e) => { setDiasUteis(e.target.value) }} />
                    <TextField label="Domingos e Feriados"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      style={{ width: '70%', marginTop: 20 }} label="Domingos e Feriados" value={diasDSR} fullWidth variant="standard" onChange={(e) => { setDiasDSR(e.target.value) }} />
                  </Box>

                  <Box {...imageWrapper} style={{ marginTop: 15 }}>
                    <Typography>Digite as horas extras práticadas no mês.</Typography>
                    <Typography style={{ marginTop: 10 }}>Hora Extra 50%</Typography>
                    <div style={{ flexDirection: 'row' }} >
                      <TextField label="Hora(s)"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ width: '25%', marginRight: 10 }} label="Hora(s)" value={hrExtra1H} fullWidth variant="standard" onChange={(e) => { setHrExtra1H(e.target.value) }} />
                      <TextField label="Minuto(s)"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ width: '25%' }} label="Minuto(s)" value={hrExtra1M} fullWidth variant="standard" onChange={(e) => { setHrExtra1M(e.target.value) }} />
                    </div>
                    <Typography style={{ marginTop: 10 }}>Hora Extra 100%</Typography>
                    <div style={{ flexDirection: 'row' }} >
                      <TextField label="Hora(s)"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ width: '25%', marginRight: 10 }} label="Hora(s)" value={hrExtra2H} fullWidth variant="standard" onChange={(e) => { setHrExtra2H(e.target.value) }} />
                      <TextField label="Minuto(s)"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ width: '25%' }} label="Minuto(s)" value={hrExtra2M} fullWidth variant="standard" onChange={(e) => { setHrExtra2M(e.target.value) }} />
                    </div>
                  </Box>


                  <Box {...imageWrapper} style={{ marginTop: 20 }}>
                    <Button title="Calcular" variant="contained" onClick={() => calcular()} color="primary" style={{ marginRight: 50 }}>
                      Calcular
                  </Button>
                    <Button title="Limpar" variant="contained" onClick={() => limpar()} color="primary">
                      Limpar
                  </Button>

                    <div style={{ marginTop: 15 }}>

                      <div id="divTabelaResultados" style={{ display: 'none' }}>
                        <table id="tabelaResultados" style={{
                          borderCollapse: 'collapse',
                          width: '100%',
                          textAlign: 'center'
                        }}>
                          <thead>
                            <tr>
                              <th>Hora Extra</th>
                              <th>Valor</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{`Hr. Extra 50% ${hrExtra1H}:${hrExtra1M}`}</td>
                              <td id="valorHE50"></td>
                            </tr>
                            <tr>
                              <td>{`Hr. Extra 100% ${hrExtra2H}:${hrExtra2M}`}</td>
                              <td id="valorHE100"></td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr id="trVlrTotalHrExtra">
                              <td>Valor à Receber Hora Extra</td>
                              <td id="vlrTotalHrExtra"></td>
                            </tr>
                            <tr id="trVlrDSR">
                              <td>Valor à Receber DSR</td>
                              <td id="vlrDSR"></td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>



                  </Box>
                </Box>
              </Paper>
              <Grid style={{ marginTop: 100 }} />
            </Container>
            <Footer></Footer>
          </BannerWrapper>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default CalculadoraHoraExtra;



CalculadoraHoraExtra.propTypes = {
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

CalculadoraHoraExtra.defaultProps = {
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
