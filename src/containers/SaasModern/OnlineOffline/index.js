import React from 'react';
import loadable from '@loadable/component';
import Onlineoffline from 'common/assets/image/onlineoffline.webp';
import PropTypes from 'prop-types';
import { BannerWrapper } from './banner.style';

const Box = loadable(() => import('common/components/Box'));
const Heading = loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));


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
      
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            
            <Heading
              as='h1'
              {...title}
              content="Controle de Ponto Online e Offline"
            />
            <Text
              {...description}
              content="Trazendo mais simplicidade e comodidade é possível aproveitar todas as funcionalidades do sistemas apenas com o celular, o gestor, o colaborador e a empresa podem dividir todas as informações sem a necessidade de adquirir qualquer outro equipamento, somente com o aplicativo de ponto eletrônico estando online ou offline."
            />
          
          </Box>
          <Box {...imageWrapper}>

          
            <Image
                  src={Onlineoffline}
                  width={'100%'}
                  height={'100%'}
                  alt={'Controle de Ponto Online e Offline'}
            />
<Box my={10}></Box>
          <Text
              {...description}
              content="Usando Apenas Dispositivos Móveis torna-se simples e possível realizar o registro de ponto, mesmo estando offline o sistema é capaz de registrar a hora e enviar os dados, optando pelo uso de um tablet torna-se dispensável a presença do tradicional relógio ponto, todos os dados produzidos são arquivados e protegidos, utilizando de identificadores de IP para cada dispositivo em uso."/>
            <Box my={3} />
            <Text
              {...description}
              content="Mantenha os Registros de horário e saída para consultas e relatório gráfico no próprio mobile, solicitações e registros podem sem arquivados e garantem maior segurança jurídica a todos os setores da empresa."/>
              

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