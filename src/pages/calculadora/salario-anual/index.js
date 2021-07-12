import loadable from '@loadable/component';
import { Button, Grid, Paper, TextField } from '@material-ui/core';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { BannerWrapper } from 'containers/SaasModern/Icarus/banner.style';
import PropTypes from 'prop-types';
import SEO from 'components/seo';
import React, { Fragment, useEffect, useState } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { ResetCSS } from 'common/assets/css/style';

import {
  ContentWrapper, GlobalStyle
} from 'containers/SaasModern/sassModern.style';

const Navbar = loadable(() => import('containers/SaasModern/Navbar'));
const Box = loadable(() => import('common/components/Box'));
const Heading = loadable(() => import('common/components/Heading'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));
const Footer = loadable(() => import('containers/SaasModern/Footer'));


const CalculadoraSalarioLiquido = (
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


useEffect(() => {
  
  const style = document.createElement('style');
  style.textContent = "#tabelaResultados td, #tabelaResultados th {    border: 1px solid #000;    padding: 8px;  }   #tabelaResultados th { padding-top: 12px; padding-bottom: 12px; background-color: #5b5b5b; color: white;} #trSalarioLiquido { font-weight: bold; }";

  document.body.appendChild(style);

}, [])

//Alíquotas atuais para desconto de INSS
const aliquota_1_INSS = 0.075;
const aliquota_2_INSS = 0.09;
const aliquota_3_INSS = 0.12;
const aliquota_4_INSS = 0.14;

//Alíquotas atuais para desconto de IRRF
const aliquota_1_IRRF = 0.075;
const aliquota_2_IRRF = 0.15;
const aliquota_3_IRRF = 0.225;
const aliquota_4_IRRF = 0.275;

//Deducao atuais para desconto de IRRF
const deducao_1_IRRF = 142.80;
const deducao_2_IRRF = 354.80;
const deducao_3_IRRF = 636.13;
const deducao_4_IRRF = 869.36;

//Variáveis auxiliares utilizadas no cálculo para serem exibidas na tabela de resultados
let aliquotaINSSAux = null;
let aliquotaIRRFAux = null;
let descontoINSSAux = null;
let descontoIRRFAux = null;

const [salarioInput, setSalarioInput] = useState('2000,00');
const [dependentesInput, setDependentesInput] = useState('0');

const calcularSalarioLiquido = () => {

    document.getElementById("divTabelaResultados").style.display = 'none';

    const salarioBruto = parseFloat(salarioInput.replace('.', '').replace(',', '.'));

    if (!salarioBruto) {
        alert("Informe o salário bruto");
        return false;
    }

    //Resetando aliquotas auxiliares para novo cálculo
    aliquotaINSSAux = null;
    aliquotaIRRFAux = null;
    descontoINSSAux = null;
    descontoIRRFAux = null;

    const inss = calcularSalarioDescontoINSS(salarioBruto);

    let irrf = calcularSalarioDescontoIRRF(salarioBruto - inss - (dependentesInput * 189.59));

    let salarioLiquido = (salarioBruto *12) - (inss*12) - (irrf*12);

    if(irrf < 0) {
      salarioLiquido = salarioBruto - inss;
    }


    
    document.getElementById("aliquotaINSS").innerHTML = aliquotaINSSAux != null ? aliquotaINSSAux : '---';
    document.getElementById("aliquotaIRRF").innerHTML = aliquotaIRRFAux != null ? aliquotaIRRFAux : '---';
    document.getElementById("valorINSS").innerHTML = parseFloat(descontoINSSAux*12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("valorIRRF").innerHTML = parseFloat(descontoIRRFAux*12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("valorSalarioLiquido").innerHTML = parseFloat(salarioLiquido).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("salarioBase").innerHTML = parseFloat(salarioBruto*12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    

    document.getElementById("divTabelaResultados").style.display = 'block';
}




    const calcularSalarioDescontoINSS = (salarioBruto) => {
        const salario = parseFloat(salarioBruto);
        let descontoINSS = 0;
        if (salario <= 1045.00) {
            descontoINSS = salario * aliquota_1_INSS;
            aliquotaINSSAux = parseFloat((aliquota_1_INSS * 100).toFixed(1)) + '%';
        } else if (salario >= 1045.01 && salario <= 2089.60) {
            descontoINSS = salario * aliquota_2_INSS;
            aliquotaINSSAux = parseFloat((aliquota_2_INSS * 100).toFixed(1)) + '%';
        } else if (salario >= 2089.61 && salario <= 3134.40) {
            descontoINSS = salario * aliquota_3_INSS;
            aliquotaINSSAux = parseFloat((aliquota_3_INSS * 100).toFixed(1)) + '%';
        } else if (salario >= 3134.41 && salario <= 6101.06) {
            descontoINSS = salario * aliquota_4_INSS;
            aliquotaINSSAux = parseFloat((aliquota_4_INSS * 100).toFixed(1)) + '%';
        } else {

            //Desconto para salários superiores a R$ 6.101,06
            descontoINSS = 642.34;
        }

        descontoINSSAux = descontoINSS;

        return descontoINSS;
    }

  const calcularSalarioDescontoIRRF = (salarioINSS) => {
      const salario = parseFloat(salarioINSS);
      let descontoIRRF = 0;
      if (salario <= 1903.98) {
          descontoIRRF = 0;
      } else if (salario >= 1903.99 && salario <= 2826.55) {
          descontoIRRF = salario * aliquota_1_IRRF - deducao_1_IRRF;
          aliquotaIRRFAux = parseFloat((aliquota_1_IRRF * 100).toFixed(1)) + '%';
      } else if (salario >= 2826.56 && salario <= 3751.05) {
          descontoIRRF = salario * aliquota_2_IRRF - deducao_2_IRRF;
          aliquotaIRRFAux = parseFloat((aliquota_2_IRRF * 100).toFixed(1)) + '%';
      } else if (salario >= 3751.06 && salario <= 4664.68) {
          descontoIRRF = salario * aliquota_3_IRRF - deducao_3_IRRF;
          aliquotaIRRFAux = parseFloat((aliquota_3_IRRF * 100).toFixed(1)) + '%';
      } else if (salario > 4664.68) {
          descontoIRRF = salario * aliquota_4_IRRF - deducao_4_IRRF;
          aliquotaIRRFAux = parseFloat((aliquota_4_IRRF * 100).toFixed(1)) + '%';
      }

      descontoIRRFAux = descontoIRRF;

      return descontoIRRF;
  }

    const formatarMoeda = (i) => {
      let v = i.replace(/\D/g,'');
      v = (v/100).toFixed(2) + '';
      v = v.replace(".", ",");
      v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
      v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
      
      setSalarioInput(v);
    }



  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <SEO canonical="/calculadora/salario-anual" title="Calculadora de Salário Líquido Anual" description="Calcular o salário líquido anual" keywords="calculo salário liquido anual, calculadora salário liquido anual, calculo de salário anual, como calcular o salário liquido anual, valor do salário liquido anual, remover impostos do salário liquido anual"/>
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
            <Paper elevation="2" style={{padding: 20}}>
        <Box {...row} style={{textAlign:'center'}}>
          <Box {...contentWrapper} style={{marginTop: 20}}>
            
            <Heading
              as='h1'
              {...title}
              content="Calculadora de Salário Líquido Anual"
            />
            <Text
              {...description}
              content="Calcule o valor líquido anual de seu salário, removendo os impostos"
            />
          
          </Box>
          <Box {...imageWrapper}>         

              <TextField onKeyUp={(e) => formatarMoeda(e.target.value) } style={{width: '70%'}} label="Salário Bruto" value={salarioInput}  fullWidth variant="standard"  onChange={(e) => { setSalarioInput(e.target.value) }} />

          </Box>

          <Box {...imageWrapper} style={{marginTop: 15}}>         

<TextField label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
 style={{width: '70%'}} label="Dependentes" value={dependentesInput}  fullWidth variant="standard"  onChange={(e) => { setDependentesInput(e.target.value) }} />

</Box>


        <Box {...imageWrapper} style={{marginTop: 20}}>
        <Button title="Calcular" variant="contained"  onClick={() => calcularSalarioLiquido()} color="primary">
                Calcular
        </Button>

        <div style={{marginTop: 15}}>
          
        <div id="divTabelaResultados" style={{display: 'none'}}>
            <table id="tabelaResultados" style={{ borderCollapse: 'collapse',
                                                  width: '100%',
                                                  textAlign: 'center'}}>
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Alíquota</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>SALÁRIO BASE</td>
                        <td >---</td>
                        <td id="salarioBase"></td>
                    </tr>
                    <tr>
                        <td>INSS</td>
                        <td id="aliquotaINSS"></td>
                        <td id="valorINSS"></td>
                    </tr>
                    <tr>
                        <td>IRRF</td>
                        <td id="aliquotaIRRF"></td>
                        <td id="valorIRRF"></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr id="trSalarioLiquido">
                        <td colspan="2">Salário Líquido</td>
                        <td id="valorSalarioLiquido"></td>
                    </tr>
                </tfoot>
            </table>
        </div>
        </div>
    

          </Box>
          </Box>
          
        </Paper>
          </Container>
          <Grid  style={{marginTop: 200}} container></Grid>

        <Footer></Footer>
          </BannerWrapper>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default CalculadoraSalarioLiquido;



CalculadoraSalarioLiquido.propTypes = {
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

CalculadoraSalarioLiquido.defaultProps = {
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
