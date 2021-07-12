import React from 'react';
import loadable from '@loadable/component';
import { Grid } from '@material-ui/core';
import App from 'common/assets/image/app.webp';
import Dashboard11 from 'common/assets/image/dashboard11.webp';
import Economia from 'common/assets/image/economia.json';
import PropTypes from 'prop-types';
import Lottie from "react-lottie";
import { BannerWrapper } from './banner.style';

const Box = loadable(() => import('common/components/Box'));
const Heading = loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Text =loadable(() => import( 'common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Economia,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Icarus = ({
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
}) => {

  return (
    <BannerWrapper id="inicio">

    <Lottie options={defaultOptions}
        height={'25%'}
        width={'25%'} />
     
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            
            <Heading
              as='h1'
              {...title}
              content="Controle de Ponto Com Mais Economia"
            />
            <Text
              {...description}
              content="Dê adeus a bobinas, acúmulo de papel no lixo e impressões! Nosso sistema garante esta economia logo no primeiro dia!"
            />
          
          </Box>
          <Box {...imageWrapper}>
          <Text
              {...description}
              content="Economize tempo, dinheiro e ajude o planeta."/>
            
            <Text
              {...description}
              content="Economize sem necessidade de imprimir mais os holerites ou os espelhos de pontos."/>
            <Box my={5}></Box>
            <Image
                  width={'100%'}
                  height={'100%'}
                  src={Dashboard11}
                  alt={'Consulta de Pontos'}
            />
            <Box my={10} />
            <Grid container spacing={6}>
              <Grid item md={4} sm={12} xs={12}>

              <Image
                  src={App}
                  width={'100%'}
                  height={'100%'}
                  alt={'Consulta de Pontos'}
                />
              </Grid>
              <Grid item md={8} sm={12} xs={12}>
              <Text
              {...description}
              content="Com o aplicativo Icarus, você elimina o desperdício de papel dentro da sua empresa. Os comprovantes de batida de pontos podem ser baixados em formato pdf, ou encaminhados para endereços de e-mail." />
              <Box my={2}></Box>
              <Text
              {...description}
              content="Todos os comprovantes são assinados digitalmente, gerando maior segurança no processo. " />
              <Box my={2}></Box>
              <Text
              {...description}
              content="Os colaboradores têm acesso a essa informação através da plataforma, sendo desnecessário várias impressões todo fim do mês. De forma automática o sistema realiza as gravações de download de arquivos gerados, simplificando a auditoria sobre acessos documentais em eventuais processos trabalhistas." />
              <Box my={2}></Box>
              <Text
              {...description}
              content="Nosso aplicativo de ponto permite descentralizar a gestão do ponto eletrônico, os colaboradores são avisados automaticamente sobre esquecimentos ou pendência  na batida através de avisos pelo aplicativo, ou via e-mail. " />
              <Box my={2}></Box>
              <Text
              {...description}
              content="Havendo a necessidade de ajustar o ponto, o próprio colaborador poderá efetuar a solicitação de configuração para o gestor de área decidir sobre a aprovação do pedido, não dependendo assim, apenas uma  pessoa para realizar a gestão. " />
              <Box my={2}></Box>
              <Text
              {...description}
              content="Ao fim do mês, na conclusão para o fechamento da folha de ponto, o sistema se encontrará atualizado devido aos alertas direcionados  aos gestores e os colaboradores a respeito de possíveis inconsistências no sistema." />
              <Box my={2}></Box>
              <Text
              {...description}
              content="Além disso o Icarus possui uma área de armazenamento de documentos digitais, onde o colaborador pode anexar vários documentos como certificados de conclusão de cursos, documentos pessoais e profissionais, eliminando assim o armazenamento físico e aderindo  aos princípios da da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados) tendo o colaborador a ciência de qual documentação o departamento pessoal ou recursos humanos possui atualmente." />
              </Grid>
            </Grid>
          </Box>
        </Box>
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