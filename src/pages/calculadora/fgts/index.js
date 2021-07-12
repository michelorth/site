import loadable from '@loadable/component';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
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



const FGTS = (
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

const [salarioInput, setSalarioInput] = useState('2000,00');
const [valorFGTS, setValorFGTS] = useState();

    const calcularFGTS = () => {

      if (!salarioInput) {
        alert("Informe o salário bruto");
        return false;
      }

      const salarioBruto = parseFloat(salarioInput.replace('.', '').replace(',', '.'));

      setValorFGTS(MaskUtil.money(parseFloat(salarioBruto * 0.08)));
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
        <SEO canonical="/calculadora/fgts" title="Calculadora de FGTS Mensal" description="Calculadora do valor do FGTS mensal a ser depositado pelo empregador" keywords="fgts, valor fgts, cálculo do fgts, como calcular o fgts"/>
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
              content="Calculadora de FGTS Mensal"
            />
            <Text
              {...description}
              content="Calcule o valor líquido mensal, a ser depositado pela empresa de seu FGTS"
            />
          
          </Box>
          
          <Box {...imageWrapper} >         

              <TextField onKeyUp={(e) => formatarMoeda(e.target.value) }  label="Salário Bruto" value={salarioInput}  fullWidth variant="standard"  onChange={(e) => { setSalarioInput(e.target.value) }} />

          </Box>
     

          
                    <Box {...imageWrapper} style={{marginTop: 20}}>
                      <Button title="Calcular" variant="contained"  onClick={() => calcularFGTS()} color="primary">
                              Calcular
                      </Button>
                    </Box>
                
                    <Box {...imageWrapper} style={{marginTop: 20}}>
                      {valorFGTS && <Typography variant="h4">{`O valor do seu FGTS é de ${valorFGTS} mensais`}</Typography> }
                    </Box>


                    </Box>
      
        </Paper>


        <Grid  style={{marginTop: 40}} container></Grid>

    <Paper style={{padding: 25, textAlign: 'justify'}}>

    <p>
<h2>O que é o FGTS?</h2>
</p>
<p>O Fundo de Garantia do Tempo de Serviço (FGTS) foi instituído em 1966 por meio da Lei nº 5107 e, com a promulgação da atual Constituição Federal, passou a ser obrigatório. </p>
<p>O fundo faz parte de uma iniciativa do Governo Federal, com o objetivo de proteger o trabalhador desligado de seu posto de trabalho. </p>
<p>Essa obrigação trabalhista não pode ser negligenciada, já que é extremamente importante, tanto para o trabalhador quanto para a empresa.</p>
<p>Para o trabalhador, o FGTS dá  a oportunidade de formar um patrimônio, que pode ser sacado em momentos especiais, como o da aquisição da casa própria ou da aposentadoria e em situações de dificuldades, que podem ocorrer com a demissão sem justa causa ou em caso de algumas doenças graves.</p>
<p>Por isso, o FGTS tornou-se uma das mais importantes fontes de financiamento habitacional, beneficiando o cidadão brasileiro, principalmente o de menor renda. Além disso, os recursos do Fundo têm sido a maior fonte de recursos para a Habitação Popular e o Saneamento Básico.</p>
<p>Já para a empresa, é necessário se atentar ao pagamento do Fundo, já que o descumprimento da obrigação traz consequências negativas. Mesmo um simples erro no cálculo pode gerar uma multa pesada.</p>
<p>Quer tirar suas dúvidas sobre o FGTS e aprender a calcular o valor? Confira as informações abaixo.</p>
<p>
<h2>Quem pode receber o FGTS?</h2>
</p>
<p>Todos os trabalhadores regidos pela CLT que firmaram contrato de trabalho a partir de 05/10/1988 têm o direito de receber o benefício. Antes dessa data, a opção pelo FGTS era facultativa.</p>
<p>Também têm direito ao FGTS os trabalhadores rurais, os temporários, os intermitentes, os avulsos, os safreiros (operários rurais, que trabalham somente no período de colheita) e os atletas profissionais. O diretor que não consta como empregado pode ser equiparado aos demais trabalhadores sujeitos ao regime do FGTS.</p>
<p>Para empregadores domésticos, era facultativo recolher ou não o FGTS referente ao seu empregado até 30/09/2015, mas a partir de 01/10/2015 o recolhimento passou a ser obrigatório. A opção pelo recolhimento, quando facultado (antes de 01/10/2015), mantém a sua obrigatoriedade enquanto durar o vínculo empregatício. </p>
<p>Outros modelos de trabalho, como MEI e estágio, não dão direito ao recebimento do fundo.</p>
<p>
<h2>Em quais situações o benefício pode ser sacado?</h2>
</p>
<p>A lei prevê que o trabalhador pode sacar o FGTS nas seguintes situações:</p>
<p>• Funcionário demitido sem justa causa;</p>
<p>• Término do contrato por prazo determinado;</p>
<p>• Rescisão do contrato, seja por extinção total da empresa, supressão de atividades, falecimento do empregador ou decretação de nulidade do contrato;</p>
<p>• Falecimento do empregado (nesse caso, o valor deve ser recebido pelos dependentes ou sucessores legais do falecido);</p>
<p>• Aposentadoria pelo INSS;</p>
<p>• Pagamento total ou parcial do preço de aquisição de casa própria;</p>
<p>• Na amortização, liquidação de saldo devedor e pagamento de parte das prestações adquiridas em sistemas imobiliários de consórcio;</p>
<p>• Suspensão do trabalho por 90 dias ou mais;</p>
<p>• Trabalhador com idade igual ou superior a 70 anos;</p>
<p>• Necessidade urgente e grave, decorrente de desastre natural que tenha atingido a residência do trabalhador, se a situação de emergência ou o estado de calamidade pública for reconhecido por meio de portaria do Governo Federal;</p>
<p>• Deficiência de longo prazo, de natureza física ou sensorial e que necessita adquirir órtese ou prótese para promoção de sua acessibilidade e inclusão social;</p>
<p>• Estado terminal em decorrência de uma doença grave;</p>
<p>• Trabalhador (ou seu dependente) portador de HIV;</p>
<p>• Trabalhador (ou dependente) portador de neoplasia maligna;</p>
<p>
  <h2>
  Quais valores pagos estão sujeitos à incidência do FGTS?
  </h2>
</p>
<p>Nem toda verba paga ao empregado está sujeita ao recolhimento desse Fundo. Confira abaixo alguns dos valores sobre os quais a incidência é obrigatória:</p>
<p>• Salário;</p>
<p>• Salário maternidade;</p>
<p>• Abonos (exceto abono de férias);</p>
<p>• Adicionais (hora extra, de insalubridade, de periculosidade e noturno, por exemplo);</p>
<p>• Aviso prévio;</p>
<p>• Comissões;</p>
<p>• Décimo terceiro salário;</p>
<p>• Gorjetas;</p>
<p>• Descanso semanal remunerado;</p>
<p>• Prêmios e gratificações.</p>
<p>
<h2>O que é Saque-Aniversário?</h2>
</p>
<p>O Saque-Aniversário é uma nova opção oferecida em alternativa além do saque por rescisão de contrato. Permite a retirada de parte do saldo da conta do FGTS anualmente, no mês do aniversário do colaborador.</p>
<p>Como essa modalidade é opcional, é necessário que ela seja solicitada. A solicitação pode ser feita no aplicativo FGTS, no Internet Banking ou em uma agência bancária. Os valores do Saque-Aniversário ficam disponíveis até o último dia útil do segundo mês subsequente à solicitação da modalidade.</p>
<p>Ao optar por essa modalidade, o funcionário não tem mais direito ao Saque-Rescisão. Assim, em caso de demissão, por exemplo, ele só receberá 40% do valor da multa.</p>
<p>O empregado que escolher migrar para  o Saque-Aniversário pode solicitar a reversão para a modalidade Saque-Rescisão a qualquer momento. A alteração passará a valer no primeiro dia do vigésimo quinto mês após a solicitação.</p>
<p>
<h2>Como calcular o valor a ser depositado?</h2>
</p>
<p>Em primeiro lugar, é necessário identificar os valores sobre os quais incide a obrigação trabalhista. Depois, é aplicado o percentual correspondente ao modelo de trabalho.</p>
<p>O empregador deve realizar um valor de depósito mensal referente a 8% do salário de um funcionário celetista.  No caso de contratos de menores aprendizes, o percentual depositado é de 2% e, no caso de trabalhadores domésticos, é de 11,2%. O depósito deve ser feito até o dia 7 de cada mês, em uma conta aberta em nome do empregado na Caixa Econômica Federal.</p>
<p>O FGTS é constituído pelo total desses depósitos mensais e os valores pertencem aos empregados que, em algumas situações, podem dispor do total depositado em seus nomes. É importante lembrar que esse valor não pode ser descontado do salário do trabalhador, já que é obrigação do empregador.</p>
<p>Assim, para um funcionário que ganha 2000 reais de salário bruto, por exemplo, a empresa deverá depositar 160 reais mensais. Para qualquer outro valor, realize o cálculo de forma simples e rápida acessando a nossa <a href="https://pontoicarus.com.br/calculadora/fgts">calculadora.</a></p>
      
    </Paper>


      <Grid  style={{marginTop: 50}} container></Grid>



      </Container>

          </BannerWrapper>
        <Footer></Footer>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default FGTS;



FGTS.propTypes = {
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

FGTS.defaultProps = {
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
