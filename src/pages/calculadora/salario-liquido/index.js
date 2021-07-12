import loadable from '@loadable/component';
import { Button, Grid, Paper, TextField } from '@material-ui/core';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { BannerWrapper } from 'containers/SaasModern/Icarus/banner.style';

import { ResetCSS } from 'common/assets/css/style';

import {
  ContentWrapper, GlobalStyle
} from 'containers/SaasModern/sassModern.style';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import Sticky from 'react-stickynode';
import SEO from 'components/seo';
import { ThemeProvider } from 'styled-components';

const Box = loadable(() => import('common/components/Box'));
const Heading = loadable(() => import('common/components/Heading'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));

const Navbar = loadable(() => import('containers/SaasModern/Navbar'));
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

    let salarioLiquido = salarioBruto - inss - irrf;

    if(irrf < 0) {
      salarioLiquido = salarioBruto - inss;
    }


    
    document.getElementById("aliquotaINSS").innerHTML = aliquotaINSSAux != null ? aliquotaINSSAux : '---';
    document.getElementById("aliquotaIRRF").innerHTML = aliquotaIRRFAux != null ? aliquotaIRRFAux : '---';
    document.getElementById("valorINSS").innerHTML = parseFloat(descontoINSSAux).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("valorIRRF").innerHTML = parseFloat(descontoIRRFAux).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("valorSalarioLiquido").innerHTML = parseFloat(salarioLiquido).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

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
        <SEO canonical="/calculadora/salario-liquido" title="Calculadora de Salário Líquido" description="Calcular o valor do salário líquido, removendo os impostos" keywords="calculo salário liquido, calculadora salário liquido, calculo de salário, como calcular o salário liquido, valor do salário liquido, remover impostos do salário liquido"/>

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
              content="Calculadora de Salário Líquido"
            />
            <Text
              {...description}
              content="Calcule o valor líquido de seu salário, removendo os impostos"
            />
          
          </Box>
          <Box {...imageWrapper}>         

              <TextField onKeyUp={(e) => formatarMoeda(e.target.value) } label="Salário Bruto" value={salarioInput}  fullWidth variant="standard"  onChange={(e) => { setSalarioInput(e.target.value) }} />
              
          </Box>

          <Box {...imageWrapper} style={{marginTop: 15}}>         

<TextField label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }} label="Dependentes" value={dependentesInput}  fullWidth variant="standard"  onChange={(e) => { setDependentesInput(e.target.value) }} />

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
                        <td >R$ {salarioInput}</td>
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
          <Grid style={{marginTop: 50}}/>

          <Paper style={{padding: 25, textAlign: 'justify'}}>
          <p>
<h2>Salário líquido: o que é? </h2>
</p>
<p>Antes de tudo, para que possamos entender de fato o que é o <strong>salário líquido</strong>, também precisamos entender o que significa o <strong>salário bruto</strong>. Sendo assim, o salário bruto é aquele que você recebe mensalmente, mas não é considerado os descontos, como INSS, Imposto de Renda, Planos de saúde, entre outros relacionados.</p>
<p>Assim, quando alguém acaba fechando um contrato de trabalho, por exemplo, o salário que é estabelecido é o bruto, ou seja, o valor que não tem os descontos.  Agora, quando falamos a respeito de <strong>salário líquido</strong>, estamos apenas enxergando o <strong>valor final da remuneração</strong>, ou seja, com os descontos. É o que você de fato vai receber na sua conta. </p>
<p>
<h2>Quais são os descontos que geralmente ocorrem na remuneração? </h2>
</p>
<p>Geralmente, os descontos que são aplicados no salário bruto — para que assim possamos identificar o nosso <strong>salário líquido</strong> — são o INSS e o Imposto de Renda retido na fonte. Essas são os principais descontos que são incididos no seu salário bruto, mas empresas também podem realizar descontos referentes a vale-transporte, plano de saúde, vale-refeição, entre outros relacionados. </p>
<p>Contudo, é crucial lembrar que tanto a parcela do Imposto de Renda quanto o valor do INSS <strong>são progressivos</strong>. Em outras palavras, quanto maior for o seu salário, mais imposto vai ser retido na fonte, e logo, maior será a contribuição que você deverá enviar ao INSS. </p>
<p>Sendo assim, podemos perceber que o Imposto de Renda que é retido na fonte, pode variar entre <strong>5% e 27,5%</strong> e o que vai diferenciar essa porcentagem é o salário bruto que o colaborador ganha. Contudo, também pode não ser incidido sobre o valor, caso o funcionário em questão seja isento. </p>
<p>Por esse motivo, devemos considerar que os valores descontados serão determinados de acordo com o salário bruto que o trabalhador irá receber. Assim, sabendo dessas informações, fica ainda mais fácil realizar o cálculo do seu <strong>salário líquido</strong> (aquele que realmente cai na sua conta) e os respectivos descontos foram aplicados. </p>
<p>
<h2>Como calcular o salário líquido? </h2>
</p>
<p>Para que você consiga ver o quanto de fato vai receber, é necessário que esteja com o seu salário bruto em mãos, bem como os respectivos benefícios que recebe. Com isso, ficará ainda mais fácil de interpretar o seu holerite. Portanto, confira o passo a passo abaixo para realizar esse <a href="https://blog.pontoicarus.com.br/rescisao-4-coisas-para-estar-atenta/">cálculo</a>  de maneira eficiente:</p>
<p>1. Já comece realizando o desconto do INSS </p>
<p>Antes de tudo, é essencial que você já faça o desconto do INSS em seu salário bruto, pois o restante dos descontos será baseado no valor restante. Confira abaixo a tabela de contribuição do INSS em 2021:</p>
<p>— Até R$ 1045:  7,5% de desconto</p>
<p>— De R$ 1045 para R$ 2089,60: 9% de desconto;</p>
<p>— De R$ 2089,61 a R$ 3134,40: 12% de desconto;</p>
<p>— De R$ 3.134,41 a R$ 6101,06: 14% de desconto.</p>
<p>2. Desconte o Imposto de Renda</p>
<p>Depois do INSS, o próximo passo será calcular o Imposto de Renda sobre o salário bruto (que já está descontado o INSS). Assim, confira abaixo a incidência mensal do IR:</p>
<p>— Até R$ 1903,98: Isento de desconto;</p>
<p>— De R$ 1903,99 até R$ 2826,65: 7,5% de desconto;</p>
<p>— De R$ 2826,66 até R$ 3751,05: 15% de desconto;</p>
<p>— De R$ 3751,06 até R$ 4664,68: 22,5% de desconto;</p>
<p>— Acima de R$ 4664,68: 27,5%.</p>
<p>3. Aplique outros descontos extras </p>
<p>Depois de cumprir as etapas acima, está na hora de realizar os <strong>descontos extras</strong>, caso eles estejam dentro da política da empresa para a qual você trabalha. Assim, digamos que a sua empresa faça o desconto de 6% em relação ao vale transporte. </p>
<p>Nesse caso, basta apenas saber essa porcentagem no salário bruto, onde: no caso de um salário de 3mil, vai ser descontado R$ 180 todos os meses. Contudo, se você ainda tiver outros descontos incididos no seu pagamento, basta apenas aplicar as porcentagens contempladas sobre o valor bruto. </p>
<p>4. Está na hora de subtrair todos os descontos </p>
<p>Depois de realizar todos os descontos citados acima, está na hora de subtrairmos os valores encontrados para chegar ao valor do seu <strong>salário líquido</strong>. Se novamente pegarmos o salário de R$ 3mil com um desconto de 6% sobre o vale-transporte, podemos deduzir os valores:</p>
<p>• R$ 360 de INSS;</p>
<p>• R$ 180 de vale-transporte;</p>
<p>• R$ 55,20 de IRRF.</p>
<p>Portanto, nesse caso, o salário líquido será de R$ 2404,80.</p>
<p>
<h2>Acompanhe o seu holerite </h2>
</p>
<p>Agora que você já sabe como calcular o seu <strong>salário líquido</strong>, é de extrema importância <strong>continuar acompanhando</strong> o seu contracheque (ou holerite) todos os meses, a fim de acompanhar os descontos e ter certeza de que os valores descontados estão de acordo com as tabelas acima. </p>
<p>Entretanto, caso você tenha tido faltas no mês de trabalho, <strong>haverá novos descontos</strong>. Ou quando você recebe um aumento de salário e os valores mudam, os valores de desconto serão atualizados, então é necessário que essa vistoria seja sempre ativa. </p>
<p>Para isso, você pode utilizar uma  <a href="https://pontoicarus.com.br/calculadora/salario-liquido">calculadora</a> ou simulador online para ter uma melhor gestão do seu salário líquido. Assim, você consegue organizar suas contas e ainda por cima consegue questionar algum valor descontado a mais pela empresa, indicando que você está acompanhando de forma eficiente sua remuneração. </p>
<p>Gostou deste artigo? Portanto, agora que você já sabe o que é o <strong>salário líquido</strong>, os principais descontos e como calculá-lo, que tal conhecer os nossos serviços? Acesse agora mesmo o nosso site e utilize a nossa <a href="https://pontoicarus.com.br/calculadora/salario-liquido">calculadora</a>  para buscar o valor do seu salário líquido, mediante aos descontos que existem em seu holerite ou contracheque que a sua empresa lhe oferece.</p>


          </Paper>


          </Container>

          <Grid style={{marginTop: 100}}/>

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
