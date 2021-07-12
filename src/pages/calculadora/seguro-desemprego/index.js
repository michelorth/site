import loadable from '@loadable/component';
import { Button, FormControl, Grid, InputLabel, Paper, Select, TextField, Typography } from '@material-ui/core';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { BannerWrapper } from 'containers/SaasModern/Icarus/banner.style';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import MaskUtil from '../../../common/util/MaskUtil';
import SEO from 'components/seo';
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


const SeguroDesemprego = (
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

  const [valorAntepenultimoFormat, setValorAntepenultimoFormat] = useState();
  const [valorPenultimoFormat, setValorPenultimoFormat] = useState();
  const [valorUltimoFormat, setValorUltimoFormat] = useState();
  const [valorMeses, setValorMeses] = useState();
  const [vezesSeguroSacado, setVezesSeguroSacado] = useState('0');
  const [valor, setValor] = useState();
  const [parcelas, setParcelas] = useState();

  const [semDireito, setSemDireito] = useState(false);

  const formatarMoeda = (i) => {
    let v = i.replace(/\D/g,'');
    v = (v/100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    
    return v;
  }

  function calcularPromedio(ultimoSalario, penultimoSalario, antepenultimoSalario) {

    var somaDeSalarios = (parseFloat(ultimoSalario) + parseFloat(antepenultimoSalario) + parseFloat(penultimoSalario));
    var divisaodeSalarios = (somaDeSalarios / 3);
    
    return divisaodeSalarios;
  } 


  function compararPromedio (promedioDeSalario){

    var salarioMinimo = 1045;

    if (promedioDeSalario < 1599.61) {
      
      var valorAbaixo = promedioDeSalario * 0.8;

      if (valorAbaixo <= salarioMinimo) {
        valorAbaixo = salarioMinimo;
      }
      return valorAbaixo;    
    }

    if (promedioDeSalario > 1599.62 && promedioDeSalario < 2666.29){
      var excesso = 1599.62 - promedioDeSalario;
      var valorMedio = Math.abs(excesso * 0.5) + 1279.69;
      return valorMedio;
    }

    if (promedioDeSalario > 2666.29){
      var valorAlto = 1813.03;
      return valorAlto;
    }

    if (promedioDeSalario >= 0) {
        return 0;
    }
  
  }

  function primeiraSolicitacao(mesesDeTrabalho){
      var resultado;
      
      setSemDireito(false);

      if (mesesDeTrabalho <= 22 && mesesDeTrabalho >= 12) {
          resultado = "Você tem direito a 4 parcelas";
      }

      if (mesesDeTrabalho >= 23) {
          resultado = "Você tem direito a 5 parcelas";
      }

      if (mesesDeTrabalho < 12) {
          setSemDireito(true);
          resultado = "Infelizmente, você não tem direito ao seguro desemprego.";
      }

      return resultado;
  }

  function segundaSolicitacao(mesesDeTrabalho){
      var resultado;

      setSemDireito(false);
    
      if (mesesDeTrabalho >= 9 && mesesDeTrabalho <= 11) {
          resultado = "Você tem direito a 3 parcelas";        
      }
      if (mesesDeTrabalho >= 12 && mesesDeTrabalho <= 23)  {
          resultado = "Você tem direito a 4 parcelas";        
      }
      if (mesesDeTrabalho >= 24){
          resultado = "Você tem direito a 5 parcelas";
      }
      if (mesesDeTrabalho < 9){
          setSemDireito(true);
          resultado = "Infelizmente, você não tem direito ao seguro desemprego.";
      }
      return resultado;
  }

 function terceiraSolicitacao(mesesDeTrabalho){
    var resultado;
    
      setSemDireito(false);

     if (mesesDeTrabalho >= 6 && mesesDeTrabalho <= 11) {
         resultado = "Você tem direito a 3 parcelas";
     }
     if (mesesDeTrabalho >= 12 && mesesDeTrabalho <= 23)  {
         resultado = "Você tem direito a 4 parcelas";
     }
     if (mesesDeTrabalho >= 24)  {
        resultado = "Você tem direito a 5 parcelas";
     }
     if (mesesDeTrabalho < 6) {
        setSemDireito(true);
        resultado = "Infelizmente, você não tem direito ao seguro desemprego.";
     }
     
     return resultado;
 }

  function calcular () {

    let valorAntepenultimo = parseFloat(valorAntepenultimoFormat.replace('.', '').replace(',', '.'));
    let valorPenultimo = parseFloat(valorPenultimoFormat.replace('.', '').replace(',', '.'));
    let valorUltimo = parseFloat(valorUltimoFormat.replace('.', '').replace(',', '.'));    
    var promedio = calcularPromedio(valorAntepenultimo,valorPenultimo,valorUltimo);
    var resultado = compararPromedio(promedio);

    var mesesDeTrabalho = valorMeses;

    switch (vezesSeguroSacado) {
        case '0': 
            setParcelas(primeiraSolicitacao(mesesDeTrabalho));
            break;
        case '1': 
            setParcelas(segundaSolicitacao(mesesDeTrabalho));
            break;
        case '2': 
            setParcelas(terceiraSolicitacao(mesesDeTrabalho));
            break;
    }

    setValor(resultado);

    }

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <SEO 
        canonical="/calculadora/seguro-desemprego" 
        title="Calculadora de Seguro Desemprego" 
        description="Calcule o valor e a quantidade de parcelas do seu seguro desemprego" 
        keywords="seguro desemprego, calculadora de seguro desemprego, parcelas seguro desemprego, valor seguro desemprego, calculadora seguro desemprego, calculo seguro desemprego, como calcular seguro desemprego, como calcular o valor de seguro desemprego, calculo seguro, calculando o seguro desemprego"
        />
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
              content="Calculadora de Seguro Desemprego"
            />
            <Text
              {...description}
              content="Calcule o valor mensal e a quantidade de parcelas, a serem recebidas do Seguro Desemprego"
            />
          
          </Box>

          <Box {...contentWrapper} style={{marginTop: 20}}>
          
            <FormControl variant="filled" style={{width: '100%'}}>
              <InputLabel  htmlFor="age-native-simple">Quantas vezes você recebeu seguro desemprego?</InputLabel>
              <Select
                native
                value={vezesSeguroSacado}
                onChange={(e) => {
                  setVezesSeguroSacado(e.target.value)
                }}
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple',
                }}
              >
                <option value={0}>Nenhuma vez</option>
                <option value={1}>Uma vez</option>
                <option value={2}>Duas vezes ou mais</option>
              </Select>
            </FormControl>

            <Box {...imageWrapper} style={{marginTop: 20}}>
          
          <TextField onKeyUp={(e) => setValorAntepenultimoFormat(formatarMoeda(e.target.value)) } 
              label="Qual seu antepenúltimo salário?"
              value={valorAntepenultimoFormat}  
              fullWidth variant="standard"  
              onChange={(e) => { setValorAntepenultimoFormat(e.target.value) }} />
              
              </Box>


              <Box {...imageWrapper} style={{marginTop: 20}}>

          <TextField onKeyUp={(e) => setValorPenultimoFormat(formatarMoeda(e.target.value)) } 
              label="Qual seu penúltimo salário?"
              value={valorPenultimoFormat}  
              fullWidth variant="standard"  
              onChange={(e) => { setValorPenultimoFormat(e.target.value) }} />

</Box>
<Box {...imageWrapper} style={{marginTop: 20}}>

          <TextField onKeyUp={(e) => setValorUltimoFormat(formatarMoeda(e.target.value)) } 
              label="Qual seu último salário?"
              value={valorUltimoFormat}  
              fullWidth variant="standard"  
              onChange={(e) => { setValorUltimoFormat(e.target.value) }} />
</Box>
<Box {...imageWrapper} style={{marginTop: 20}}>
          <TextField label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              label="Quantos meses você trabalhou nessa empresa?" 
              value={valorMeses}  
              fullWidth variant="standard"  
              onChange={(e) => { setValorMeses(e.target.value) }} />
</Box>
          <Box {...imageWrapper} style={{marginTop: 20}}>
              <Button title="Calcular" variant="contained"  onClick={() => calcular()} color="primary">
                      Calcular
              </Button>
          </Box>
         
        </Box>


      {parcelas && valor &&

        <div class="divresultado" style={{marginTop: 20}}>

            <div class="divparcelasflex">
                <Typography variant="h6">{parcelas}</Typography>
                
                {!semDireito && <Typography variant="h6">Valor das parcelas: {MaskUtil.money(valor)}</Typography>}
                
            </div>

            <Typography style={{marginTop: 40}} variant="caption">*Os valores podem variar dependendo do cálculo realizado pelo Ministério do Trabalho.</Typography>

            
        </div>
   
      }

      </Box>

      
      
      </Paper>
      <Grid style={{marginTop: 50}}/>

      <Paper style={{padding: 25, textAlign: 'justify'}}>

      <p>Quando um funcionário acaba sendo demitido sem justa causa por uma empresa, ele tem todo o potencial para conseguir o seguro-desemprego. Contudo, muitos colaboradores não sabem como esse benefício funciona e muito menos quando solicitá-lo após a demissão. Quer saber mais sobre o assunto? Então, confira o nosso post até o final e tire todas as suas dúvidas sobre o <strong>seguro-desemprego</strong>. </p>
<p>
<h2>Afinal, o que é o seguro-desemprego? </h2>
</p>
<p>O seguro-desemprego  é um direito garantido por <a target="_blank" href="https://blog.pontoicarus.com.br/5-leis-trabalhistas/">lei a todos os trabalhadores</a>  brasileiros que realizam suas atividades profissionais de carteira assinada e, sobretudo, quando estes são demitidos sem justa causa. </p>
<p>Esse direito foi criado com sua base no Fundo de Amparo ao Trabalhador (FAT), sendo considerado um dos benefícios oferecidos pela Previdência Social. Sendo assim, ele pode ser retirado pelo beneficiário em uma agência da Caixa Econômica Federal. </p>
<p>A questão, no entanto, é que o <strong>seguro-desemprego</strong> <strong>não é destinado a qualquer trabalhador</strong>, pois existem alguns pré-requisitos importantes que devem ser levados em consideração, e sendo estes já previstos na própria legislação. </p>
<p>
<h2>Como funciona o seguro-desemprego? </h2>
</p>
<p>Como podemos entender, o <strong>seguro-desemprego</strong> tem como principal objetivo oferecer um amparo financeiro ao colaborador que é demitido de sua antiga empresa sem justa causa. </p>
<p>Em outras palavras, no ato do desligamento de contrato entre o funcionário e a sua empresa em questão, ele receberá parcelas mensais que serão pagas <strong>de acordo com o seu tempo de permanência</strong> na organização, por exemplo. Contudo, ainda há diversos fatores que devem ser considerados para esse benefício, e vamos vê-los no decorrer do texto.</p>
<p>Com a aquisição do <strong>seguro-desemprego</strong>, o ex-funcionário poderá obter uma quantia financeira que o ajudará durante o período em que estiver <strong>desempregado</strong>. No ano de 2020, o nosso país registrou um número histórico de desempregos no mercado, sobretudo por influência da pandemia do novo coronavírus (Covid-19), que fez empresas fecharem suas portas devido à instabilidade econômica. </p>
<p>Por esse motivo, de acordo com os dados levantados pelo Ministério da Economia, foi verificado que somente em maio de 2020 foram registrados mais de <a target="_blank" href="https://g1.globo.com/economia/noticia/2020/06/09/brasil-registra-960-mil-pedidos-de-seguro-desemprego-em-maio-com-alta-de-53percent.ghtml">960,2 mil solicitações de seguro-desemprego</a> , cuja quantidade é muito maior se formos comparar ao mês de maio em 2019.  </p>
<p>
<h2>O que a lei diz sobre o seguro-desemprego e quais são as regras? </h2>
</p>
<p>Antes de tudo, a Lei Nº 7.998, em 11 de janeiro de 1990, acabou sendo a primeira lei criada para fazer a regulamentação do <strong>seguro-desemprego</strong>. Contudo, sabe-se que suas regras convencionais foram alteradas, conforme diz a Lei n.º 13.134/2015. </p>
<p>Caso você não saiba, essa lei ressalta os seguintes pontos:</p>
<p>• Quem são os trabalhadores que têm direito ao benefício;</p>
<p>• Prazos para o pagamento;</p>
<p>• Quantidade de parcelas;</p>
<p>Mesmo que seja um direito destinado a trabalhadores demitidos sem justa causa, ainda assim existem alguns critérios que precisam ser enquadrados para que o benefício seja concedido ao funcionário. </p>
<p>Na visão do colaborador, as normas principais são: o tipo de categoria profissional que pode solicitar esse benefício, visando também o tempo mínimo que ele trabalhou na empresa em questão. Agora, na visão da empresa, ela deve procurar saber a quantidade de parcelas que podem ser usadas e qual o valor exato a ser repassado ao colaborador. </p>
<p>
<h2>Quem tem direito a receber este benefício?</h2>
</p>
<p>Mesmo que o <strong>seguro-desemprego</strong> seja um direito garantido a todos os profissionais de carteira assinada, ainda assim podemos incluir a rescisão “indireta”, que acontece quando o empregado acaba “dispensando” o patrão. </p>
<p>Porém, ainda existem outros tipos de profissionais que podem receber o serviço, como por exemplo:</p>
<p>• Empregados domésticos;</p>
<p>• Profissional que não possua renda própria para conseguir sustentar a si e a sua família;</p>
<p>• Funcionários que tiveram o seu contrato de trabalho suspenso em decorrência de participação de cursos profissionais e qualificação profissional em benefício da própria empresa;</p>
<p>• Trabalhador que foi resgatado na condição de escravo;</p>
<p>• Entre outros.</p>
<p>Além disso, os profissionais que tiveram salários como pessoa física ou jurídica também conseguem obter esse direito, desde que o pagamento tenha sido advindo de <strong>três situações</strong>:</p>
<p>1. Pelo menos 12 meses dos últimos 18 meses anterior à data de dispensa;</p>
<p>2. A menos 9 meses nos últimos 12 meses imediatamente anteriores à data da dispensa;</p>
<p>3. A menos 6 meses imediatamente anteriores à data da dispensa;</p>
<p>
<h2>Como fazer a solicitação do seguro-desemprego? </h2>
</p>
<p>Caso você queira dar início a concessão do seguro-desemprego, ele poderá ser realizado por meio de três formas distintas. Confira abaixo quais são elas:</p>
<p>• Por meio do portal do Governo Federal;</p>
<p>• Pelo aplicativo da Carteira de Trabalho Digital;</p>
<p>• Por meio do envio de e-mail para a Superintendência do Trabalho da sua região;</p>
<p>Seja para qualquer um desses critérios de solicitação, é necessário ter em mãos documentos cruciais, como por exemplo:</p>
<p>• Requerimento do seguro-desemprego;</p>
<p>• Carteira de Trabalho;</p>
<p>• Números de RG e CPF;</p>
<p>• Comprovante de residência;</p>
<p>• Número do PIS;</p>
<p>• Extrato do FGTS;</p>
<p>
<h2>Como funciona o prazo para pagamento?</h2>
</p>
<p>Após seguir todas as etapas para a solicitação do <strong>seguro-desemprego</strong>, a empresa no qual você prestou serviços terá <strong>até 30 dias para começar a realizar o pagamento</strong>. Esse tempo é totalmente fixo e também vale para todas as parcelas que você vai receber. </p>
<p>Ou em outras palavras, se um determinado funcionário for receber três parcelas do seguro-desemprego, a empresa terá até 30 dias para enviar a primeira parcela, mais 30 dias para enviar a segunda, e o mesmo ocorrerá com a terceira. Será como se você estivesse <strong>recebendo um valor todos os meses</strong>. </p>
<p>Gostou deste artigo? Agora que já sabe o que é o seguro-desemprego, como funciona e como solicitá-lo, que tal conhecer os nossos serviços? Acesse agora mesmo o nosso site e <a target="_blank" href="https://pontoicarus.com.br/calculadora/seguro-desemprego">faça uma simulação do valor do seguro-desemprego</a>  que você irá receber. </p>




      </Paper>
      <Grid style={{marginTop: 100}}/>
      </Container>
        <Footer></Footer>
          </BannerWrapper>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SeguroDesemprego;



SeguroDesemprego.propTypes = {
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

SeguroDesemprego.defaultProps = {
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
