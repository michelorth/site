import loadable from '@loadable/component';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { BannerWrapper } from 'containers/SaasModern/Icarus/banner.style';
import PropTypes from 'prop-types';
import SEO from 'components/seo';
import React, { Fragment, useState } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import MaskUtil from '../../../common/util/MaskUtil';
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



const INSS = (
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

const [salarioInput, setSalarioInput] = useState('2000,00');
const [valorInss, setValorInss] = useState();

const calcularSalarioLiquido = () => {

    const salarioBruto = parseFloat(salarioInput.replace('.', '').replace(',', '.'));

    if (!salarioBruto) {
        alert("Informe o salário bruto");
        return false;
    }

    const variavel = calcularSalarioDescontoINSS(salarioBruto);

    setValorInss(MaskUtil.money(variavel));
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
        <SEO canonical="/calculadora/inss" title="Calculadora de INSS" description="Calcular o valor do INSS" keywords="cálculo inss, calculadora inss, calcular inss, inss, valor de INSS"/>
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
              content="Calculadora de INSS"
            />
            <Text
              {...description}
              content="Calcule o valor líquido de pagamento de INSS"
            />
          
          </Box>
          <Box {...imageWrapper}>         

              <TextField onKeyUp={(e) => formatarMoeda(e.target.value) }  label="Salário Bruto" value={salarioInput}  fullWidth variant="standard"  onChange={(e) => { setSalarioInput(e.target.value) }} />

          </Box>

        <Box {...imageWrapper} style={{marginTop: 20}}>
        <Button title="Calcular" variant="contained"  onClick={() => calcularSalarioLiquido()} color="primary">
                Calcular
        </Button>

        <Box {...imageWrapper} style={{marginTop: 20}}>
          {valorInss && <Typography variant="h4">{`O valor do seu INSS é de: ${valorInss}`}</Typography> }
        </Box>

    


        
          </Box>
          </Box>
          </Paper>

          <Grid style={{marginTop: 50}}/>

          <Paper style={{padding: 25, textAlign: 'justify'}}>

          <p>Em geral, sabemos que é bastante comum a sigla <strong>INSS</strong> aparecer bastante nas folhas de pagamento dos colaboradores, ou até mesmo nas mídias de TV e rádio. </p>
<p>A questão, no entanto, é que por mais que esse assunto seja tão inserido na sociedade, ainda assim <strong>há dúvidas</strong> sobre a sua definição, seus benefícios e, principalmente, quem tem direito à previdência. </p>
<p>Quer saber mais sobre o assunto? Então, confira o nosso post até o final e tire todas as suas dúvidas sobre o <strong>INSS</strong>. </p>
<p>
<h2> Afinal, o que é o INSS? </h2>
</p>
<p>Primeiramente,  o <strong>INSS</strong> (sigla para Instituto Nacional do Seguro Social)  nada mais é do que o órgão público. Ele é o responsável não somente pelo pagamento da <strong>aposentadoria</strong>, mas também de <strong>outros benefícios</strong> relacionados aos segurados e trabalhadores. </p>
<p>Seguindo um contexto histórico, sabemos que o Instituto Nacional do Seguro Social foi criado no ano de 1990, quando houve a junção de dois órgãos importantes: o Instituto Nacional de Previdência Social (INPS) e o Instituto de Administração Financeira da Previdência e Assistência Social (IAPAS).</p>
<p>
<h2>INSS: como funciona? </h2>
</p>
<p>Em geral, o <strong>INSS</strong> basicamente visa ao cuidado com questões relacionadas aos direitos dos segurados que estão inseridos no Regime Geral de Previdência Social (RGPS). </p>
<p>Em resumo, trata-se do Regime Público em nosso país. Suas políticas são criadas a partir da Secretaria de Previdência e são executadas pelo <strong>INSS</strong> — cujos órgãos estão relacionados ao Ministério da Economia. </p>
<p>Portanto, passamos a entender que o principal objetivo da previdência social é justamente fazer com que o contribuinte <strong>tenha a sua renda garantida</strong>, bem como a de sua família, em alguns casos: morte, velhice, doença, acidente, gravidez, e entre outros relacionados. </p>
<p>De forma prática, para que o interessado tenha acesso a esse serviço, ele precisa estar inscrito no RGPS e deve realizar contribuições mensais ao <strong>INSS</strong>. </p>
<p>
<h2>Qual é o papel do INSS? </h2>
</p>
<p>Como se sabe, o papel é providenciar os benefícios da previdência, que estão previstos no Regime Geral de Previdência Social. Esses benefícios são a distribuição de valores para a aposentadoria, pensão por morte, auxílio-doença, entre outras situações parecidas, como por exemplo:</p>
<p>• Auxílio-reclusão;</p>
<p>• Aposentadoria por invalidez;</p>
<p>• Aposentadoria especial;</p>
<p>• Salário-família;</p>
<p>• Salário-maternidade;</p>
<p>• Pensão especial (Síndrome da Talidomida);</p>
<p>• Auxílio-acidente;</p>
<p>• Aposentadoria por tempo de contribuição;</p>
<p>
<h2>Quem pode ter acesso à previdência como contribuidor do INSS? </h2>
</p>
<p>Basicamente, os segurados da previdência social são os trabalhadores avulsos, empregados, empregados domésticos, contribuintes individuais, empregadores e trabalhadores rurais. Ou seja, quem trabalha com carteira assinada, automaticamente já está inserido à previdência, pois ao se tornar <a href="https://blog.pontoicarus.com.br/escalas-de-trabalho-clt/">CLT</a> , parte do seu salário mensal é destinado ao <strong>INSS</strong>. </p>
<p>Contudo, quem já trabalha por conta própria, deve se inscrever e realizar contribuições mensais para o <strong>INSS</strong>, a fim de ter os seus benefícios da previdência garantidos, quando for o caso. Agora, para quem é <strong>microempreendedor individual</strong>, ele passa a ter acesso à previdência quando realiza o pagamento da DAS MEI mensalmente. </p>
<p>Contudo, mesmo quem não possua renda própria — especialmente estudantes —  eles também podem se inscrever na previdência social, bastando apenas ter acima dos 16 anos.</p>
<p>
<h2>Os tipos de filiação para o INSS</h2>
</p>
<p>De acordo com o <strong>INSS</strong>, a filiação nada mais é do que um tipo de vínculo formal com a previdência social em relação aos contribuintes. Assim, quando nos afiliamos, as pessoas acabam ganhando o <strong>direito e acesso aos benefícios previdenciários</strong>, e assim, passam a ser obrigadas a realizar contribuições durante todos os meses. </p>
<p>De forma prática, esse tipo de filiação pode ser:</p>
<p>— Facultativa: para quem decide simplesmente realizar a inscrição no <strong>INSS</strong> e fazer suas contribuições;</p>
<p>— Obrigatória: para pessoas que estão exercendo atividades remuneradas e acabam se filiando automaticamente no <strong>INSS</strong>;</p>
<p>Contudo, em relação aos dois tipos de filiação citados acima, podem existir diferentes categorias de segurados. Confira abaixo quais são eles:</p>
<p>1. Segurados Obrigatórios</p>
<p>1.1 Empregado: trata-se da pessoa que esteja trabalhando de carteira assinada, ou que possui contrato temporário, que presta atividades profissionais ao setor público em cargos de nomeação livre e exoneração, diretores-empregados, aqueles que trabalham em empresas no exterior, missões diplomáticas que estão instaladas no país, multinacionais incididas no Brasil, e entre outros. </p>
<p>Lembrando que os servidores públicos que realizem contribuições à previdência, <strong>não estão na categoria de empregados</strong>. </p>
<p>1.2 Empregado doméstico: trata-se do indivíduo que presta serviços domésticos em residência de outra família ou pessoa, seja ele um assistente doméstico, caseiro, motorista ou até mesmo um jardineiro. </p>
<p>1.3 Trabalhador avulso: quem realiza a prestação de serviços em diversas empresas no mercado, mas é geralmente contratado por sindicatos  ou até mesmo por órgãos gestores de obra. Um exemplo a citar disso são os trabalhadores que prestam atividades em portos. </p>
<p>1.4 Contribuinte individual: quem realiza atividades profissionais por conta própria ou que presta serviços a outros negócios, não possuindo nenhum tipo de contrato empregatício. Podemos dar alguns exemplos, como pintores, eletricistas, ambulantes, diaristas, motoristas de táxi, freelancers e associados a cooperativas de trabalho.  </p>
<p>2. Segurado especial </p>
<p>Trata-se de uma pessoa física que, com a ajuda da família ou não, desenvolve atividades como:</p>
<p>• Pesca artesanal ou alguma outra atividade semelhante;</p>
<p>• Atividades rurais;</p>
<p>• Companheiro ou cônjuge, bem como o filho maior de 16 anos do seguro que realize atividades rurais familiar;</p>
<p>• Índio reconhecido pela FUNAI (Fundação Nacional do Índio).</p>
<p>3. Segurado facultativo </p>
<p>São basicamente aqueles que ainda não possuem renda própria e são maiores de 16 anos. Contudo, decidem contribuir para a previdência, tais como desempregados, estudantes bolsistas ou donos e donas de casa. </p>
<p>Gostou deste artigo? Agora que você já tirou todas as suas dúvidas sobre o <strong>INSS</strong>, que tal simular o valor do <strong>INSS</strong> que você está pagando na empresa e garantir que os valores estão corretos? Acesse agora mesmo a nossa calculadora e <a href="https://pontoicarus.com.br/calculadora/inss">faça sua simulação</a> . </p>


          </Paper>

          </Container>

          <Grid  style={{marginTop: 100}} container></Grid>
        <Footer></Footer>
          </BannerWrapper>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default INSS;



INSS.propTypes = {
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

INSS.defaultProps = {
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
