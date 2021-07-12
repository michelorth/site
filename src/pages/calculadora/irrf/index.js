import loadable from '@loadable/component';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import PropTypes from 'prop-types';
import SEO from 'components/seo';
import React, { Fragment, useState } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import MaskUtil from '../../../common/util/MaskUtil';
import { ResetCSS } from 'common/assets/css/style';
import { BannerWrapper } from 'containers/SaasModern/Icarus/banner.style';
import {
  ContentWrapper, GlobalStyle
} from 'containers/SaasModern/sassModern.style';

const Box = loadable(() => import('common/components/Box'));
const Heading = loadable(() => import('common/components/Heading'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));

const Navbar = loadable(() => import('containers/SaasModern/Navbar'));
const Footer = loadable(() => import('containers/SaasModern/Footer'));


const IRRF = (
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

const [salarioInput, setSalarioInput] = useState('3000,00');
const [dependentesInput, setDependentesInput] = useState('0');
const [irrf, setIrrf] = useState();

const calcularSalarioLiquido = () => {

    const salarioBruto = parseFloat(salarioInput.replace('.', '').replace(',', '.'));

    if (!salarioBruto) {
        alert("Informe o salário bruto");
        return false;
    }

    const inss = calcularSalarioDescontoINSS(salarioBruto);

    const resumo = calcularSalarioDescontoIRRF(salarioBruto - inss - (dependentesInput * 189.59))

    if(resumo === 0) {
      alert('Seu salário não está passível de cobrança de IRRF')
    }
    
    setIrrf(MaskUtil.money(resumo));

}




    const calcularSalarioDescontoINSS = (salarioBruto) => {
        const salario = parseFloat(salarioBruto);
        let descontoINSS = 0;
        if (salario <= 1045.00) {
            descontoINSS = salario * aliquota_1_INSS;
        } else if (salario >= 1045.01 && salario <= 2089.60) {
            descontoINSS = salario * aliquota_2_INSS;
        } else if (salario >= 2089.61 && salario <= 3134.40) {
            descontoINSS = salario * aliquota_3_INSS;
        } else if (salario >= 3134.41 && salario <= 6101.06) {
            descontoINSS = salario * aliquota_4_INSS;
        } else {
            descontoINSS = 642.34;
        }

        return descontoINSS;
    }

  const calcularSalarioDescontoIRRF = (salarioINSS) => {
      const salario = parseFloat(salarioINSS);
      let descontoIRRF = 0;
      if (salario <= 1903.98) {
          descontoIRRF = 0;
      } else if (salario >= 1903.99 && salario <= 2826.55) {
          descontoIRRF = salario * aliquota_1_IRRF - deducao_1_IRRF;
      } else if (salario >= 2826.56 && salario <= 3751.05) {
          descontoIRRF = salario * aliquota_2_IRRF - deducao_2_IRRF;
      } else if (salario >= 3751.06 && salario <= 4664.68) {
          descontoIRRF = salario * aliquota_3_IRRF - deducao_3_IRRF;
      } else if (salario > 4664.68) {
          descontoIRRF = salario * aliquota_4_IRRF - deducao_4_IRRF;
      }


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
        <SEO canonical="/calculadora/irrf" title="Calculadora de IRRF" keywords="irrf, imposto de renda, imposto retido na fonte, imposto de renda empregado, irrf funcionário" description="O Imposto de Renda Retido na fonte pode gerar muitas dúvidas, por isso neste artigo vamos explicar o que é, como funciona e ao que você deve se atentar quando falamos em IRRF." />
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
              content="Calculadora de IRRF"
            />
            <Text
              {...description}
              content="Calcule o valor líquido de seu IRRF"
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
          }}label="Dependentes" value={dependentesInput}  fullWidth variant="standard"  onChange={(e) => { setDependentesInput(e.target.value) }} />

</Box>


        <Box {...imageWrapper} style={{marginTop: 20}}>
        <Button title="Calcular" variant="contained"  onClick={() => calcularSalarioLiquido()} color="primary">
                Calcular
        </Button>
        <Box {...imageWrapper} style={{marginTop: 20}}>
          {irrf && <Typography variant="h4">{`O valor do seu IRRF é de ${irrf}`}</Typography> }
        </Box>

      </Box>



          </Box>
          </Paper>
          <Grid style={{marginTop: 50}}/>

<Paper style={{padding: 25, textAlign: 'justify'}}>

<p>Todos os anos, os brasileiros precisam ser organizar para fazerem a sua declaração de imposto de renda, o que pode gerar muitas dúvidas, sobretudo quando falamos do Imposto de Renda Retido na Fonte.</p>
<p>Entender melhor o que é e como funciona o Imposto de Renda Retido na Fonte é essencial, pois é preciso ficar atento às suas obrigações com o Leão, mas também prestar atenção nos seus benefícios e evitar que você ou seu funcionário não esteja perdendo dinheiro por alguma negligência.</p>
<p>Então, neste artigo falaremos sobre como funciona este imposto e como você pode lidar melhor com esta situação para evitar prejuízos e garantir seus benefícios fiscais.</p>
<p>
<h2>Entendendo o que é o imposto de renda</h2>
</p>
<p>Para que não haja nenhuma dúvida, precisamos entender o que é o imposto de renda (IR), que é um tributo que incide sobre os ganhos de pessoas ou de empresas.</p>
<p>Ou seja, o IR vai ser calculado de acordo com o valores que você declara ter recebido durante o ano. Assim, toda pessoa ou empresa que tem renda deve pagar um valor anual baseado nesta resta arrecadação, que é cobrado pelo Governo Federal.</p>
<p>É claro que existem casos de isenção, em que você não paga o imposto de renda, mas boa parte dos rendimentos mais comuns são tributáveis pelo IR, como salários, vencimentos, aluguéis, investimentos e mesmo premiações. Essas são conhecidas como rendas tributáveis.</p>
<p>
<h2>E o que é o imposto de renda retido na fonte?</h2>
</p>
<p>Como já dissemos, o IR é calculado de acordo com o seus rendimentos, inclusive sobre o salário dos trabalhadores.</p>
<p>O Imposto de Renda Retido na Fonte (IRRF) funciona assim: todo mês, a Receita Federal realiza um desconto na folha de pagamento dos trabalhadores, para cobrir o IRRF. Ou seja, são retenções do IR que são feitas mensalmente ao longo de um ano fiscal.</p>
<p>Vale lembrar que esse desconto – na folha de pagamento - só acontece quando o trabalhador tem um salário que ultrapassa o teto estabelecido pela lei. Assim, se você recebe até 2 salários, não terá o IR descontado da sua folha.</p>
<p>
<h2>Como calcular o IRRF</h2>
</p>
<p>A porcentagem – ou alíquota - do seu imposto de renda é calculado de acordo com o quanto você recebe em rendas. Dessa forma, a Receita Federal determinar uma tabela progressiva de alíquotas.</p>
<p>Então, vamos considerar a questão do holerite de pagamento mensal de um funcionário para ilustrar como calcular o seu IRRF.</p>
<p>
<h3> Nem toda renda é tributável pelo IRRF, e nem toda alíquota é igual </h3>
</p>
<p>Para não ter nenhuma dúvida: a <strong>base de cálculo</strong> é o valor sobre o qual vai incidir o tributo, e a <strong>alíquota</strong> é a porcentagem que será aplicada sobre essa base de cálculo para se chegar valor do tributo. Em poucas palavras, a alíquota é a porcentagem a ser deduzida da sua renda pra pagar o imposto.</p>
<p>Já te contamos que existem situações consideradas benefícios ao trabalhador, assim como existem situações que podem prejudicar. </p>
<p><strong>A primeira coisa a se considerar é que o imposto de renda não incide sobre todos os valores do holerite. </strong> Veja bem, o IR não incide sobre o valor da contribuição do INSS, que também é descontada da folha de pagamento.</p>
<p>Ou seja, antes de chegar a um valor base para o cálculo do IRRF, é preciso deduzir o desconto referente à contribuição do INSS, que varia de 8% a 11% do salário bruto. </p>
<p>Então, esta porcentagem do INSS não entra no cálculo do seu IRRF. Ou seja, (salário) – (contribuição do INSS) = base de cálculo do IRRF.</p>
<p>Já sabemos que o IRRF não incide sobre a sua contribuição do INSS. Isso é o que chamamos de “renda deduzida”. </p>
<p>Da mesma forma, pode haver outras deduções, como gastos com saúde, educação, a existência de previdência privada, pagamento de pensões, dentre outras situações que podem reduzir o seu IRRF. </p>
<p>
<h3> As alíquotas</h3>
</p>
<p>Noutro lado, o sistema de alíquotas do imposto de renda é baseado na progressividade. Assim, quanto maior a sua renda, maior será a alíquota a ser usada no cálculo do seu IR, que será retido na fonte. Ou seja, quanto mais ganha, mais paga em imposto de renda. </p>
<p>Então, como funciona essa progressividade na alíquota do IRRF? Basta considerar a alíquota a ser aplicada, de acordo com o valor da sua renda:</p>
<p>•	para rendimentos de até R$ 1.903,98, o contribuinte está isento de IRRF;</p>
<p>•	de R$ 1.903,99 a R$ 2.826,65, a alíquota é de 7,5%, correspondendo a R$ 142,80;</p>
<p>•	de R$ 2.286,66 a R$ 3.751,05, a alíquota é de 15%, correspondendo a R$ 354,80;</p>
<p>•	de R$ 3.751,06 a R$ 4.664,68, a alíquota é de 22,5%, correspondendo a R$ 636,13;</p>
<p>•	acima de R$ 4.664,69, a alíquota é de 27,5%, correspondendo ao valor de R$ 869,36;</p>
<p>
<h2>Situações em que o Imposto de Renda é Retido na Fonte</h2>
</p>
<p>Já mencionamos algumas situações em que o imposto de renda pode não ser aplicado ou mesmo ter a sua alíquota reduzida, mas quais são os casos em que o imposto é de fato retido na fonte?</p>
<p>Bom, já sabemos que vai ser recolhido pelo empregador, tendo este valor abatido da folha de pagamento do funcionário.</p>
<p>Acontece que o IR também incide sobre o pagamento do 13º e das férias. Afinal, o funcionário também recebe renda em função desses dois institutos. DA mesma forma, outros benefícios podem ser tributados, com auxílio-doença, seguro-desemprego, licença maternidade, gratificações, participação no lucro, aposentadoria e até mesmo indenizações por acidentes e investimentos.</p>
<p>Esperamos que tenham gostado deste artigo. Não deixe de conhecer o nosso site e saber mais sobre as nossas soluções de ponto para a sua empresa e ter acesso à mais artigos sobre como cuidar bem da sua empresa! </p>


</Paper>
  
          </Container>


         


          <Grid  style={{marginTop: 50}} container></Grid>

        <Footer></Footer>
          </BannerWrapper>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default IRRF;



IRRF.propTypes = {
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

IRRF.defaultProps = {
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
