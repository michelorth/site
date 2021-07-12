import loadable from '@loadable/component';
import FeatureIcon6 from 'common/assets/image/saasModern/dispenca-relogio.webp';
import FeatureIcon1 from 'common/assets/image/saasModern/economia.webp';
import FeatureIcon4 from 'common/assets/image/saasModern/geolocalizacao.webp';
import FeatureIcon3 from 'common/assets/image/saasModern/ponto-eletronico.webp';
import FeatureIcon2 from 'common/assets/image/saasModern/reconhecimento-facial.webp';
import FeatureIcon5 from 'common/assets/image/saasModern/toten.webp';
import Link from '@material-ui/core/Link';

import PropTypes from 'prop-types';
import React from 'react';
import {
  PricingButton
} from '../Pricing/pricing.style';

const Box = loadable(() => import('common/components/Box'));
const Button = loadable(() => import('common/components/Button'));
const FeatureBlock = loadable(() => import('common/components/FeatureBlock'));
const Heading = loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));


const FEATURES = [
  {
    icon: FeatureIcon1,
    title: 'Mais Economia',
    link: '/Funcionalidades/mais-economia/',
    description:
      'Dê adeus a gastos extras com compra de bobinas ou tintas e ainda adote medidas sustentáveis, evitando o acúmulo de papel no lixo e impressões desnecessárias! Nosso sistema garante esta economia logo no primeiro dia e também dá a sua contribuição à pauta da sustentabilidade!',
  },
  {
    icon: FeatureIcon2,
    title: 'Batida Com Reconhecimento Facial',
    link: '/Funcionalidades/reconhecimento-facial/',
    description:
      'No momento do registro de ponto utilizamos uma das tecnologias mais avançadas disponíveis no mercado para validar a identidade do colaborador: o reconhecimento facial. Neste momento também armazenamos alguns dados como a localização, via GPS, IP do dispositivo utilizado, dentre outros.',
  },
  {
    icon: FeatureIcon3,
    title: 'Ponto Online e Offline',
    link: '/Funcionalidades/acessivel-em-dispositivos-movel/',
    description:
      'É possível aproveitar as diversas funcionalidades do sistema apenas com o celular, trazendo mais simplicidade e comodidade. O colaborador e a empresa podem compartilhar informações sem a necessidade de adquirir outro equipamento. Somente com o aplicativo, estando on-line ou off-line, já é possível conferir dados e registrar seu ponto!',
  },
  {
    icon: FeatureIcon4,
    title: 'Captura de Geolocalização',
    link: '/Funcionalidades/utilizamos-geolocalizacao/',
    description:
      'Delimite um local específico para seu colaborador registrar o ponto. Com a geolocalização, o gestor poderá ter a certeza de que o colaborador está no endereço determinado e dentro do perímetro configurado pela empresa. O funcionamento é simples e depende apenas da ativação do GPS do próprio celular.',
  },
  {
    icon: FeatureIcon5,
    title: 'Tablet para Registro',
    link: '/Funcionalidades/totem-com-tablet-para-registro/',
    description:
      'Nosso sistema também pode ser utilizado nas estruturas mais modernas para fixação do ponto. Use um tablet como totem ou instale um equipamento no local desejado para os colaboradores registrarem o ponto em poucos segundos! Converse com os  nossos consultores sobre esta oportunidade!',
  },
  {
    icon: FeatureIcon6,
    title: 'Dispensa de Relógio de Ponto',
    link: '/Funcionalidades/dispensa-relogio-de-ponto/',
    description:
      'Com a validação da localização, via GPS, e a identificação do colaborador por reconhecimento facial, além de outras funcionalidades e informações que fornecemos para consulta, temos no Ponto Eletrônico Icarus uma ferramenta completa, dispensando o uso de máquinas como os relógios de ponto (REP).',
  },
];

const FeatureSection = React.memo(({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  row,
  col,
  FeatureItemStyle,
  iconStyle,
  contentStyle,
  featureTitle,
  featureDescription,
  buttonStyle
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="funcionalidades">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="SOLUÇÕES PARA CONTROLE DE PONTO" />
          <Heading {...secHeading} content="Por que você ainda não escolheu nosso software?" />
        </Box>

        <Box {...row}>
          {FEATURES.map((item, index) => (
            <Box {...col} key={`feature-item-${index}`}>
              <FeatureBlock
                icon={
                  <Image
                    width={'100%'}
                    height={'100%'}
                    src={item.icon}
                    alt={`feature-item-icon-${index + 1}`}
                  />
                }
                wrapperStyle={FeatureItemStyle}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                iconPosition="left"
                title={<Heading content={item.title} {...featureTitle} />}
                description={
                <>
                  <Text content={item.description} {...featureDescription} />
                  <Box my={3} />
                  <PricingButton>
                  <Link href={item.link}>
                    <a>
                        <Button
                          title={'Saiba Mais'}
                          {...buttonStyle}
                        />
                              
                    </a>
                  </Link>
                  </PricingButton>
                </>
                }
              />


            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
});

FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  FeatureItemStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
  priceStyle: PropTypes.object,
};

FeatureSection.defaultProps = {
  sectionWrapper: {
    pt: ['50px', '50px', '50px', '50px', '50px'],
    pb: ['20px', '50px', '60px', '70px', '100px'],
  },
  secTitleWrapper: {
    mb: ['60px', '100px'],
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    bg: '#fff',
    color: '#2aa275',
    colors: 'primaryWithBg',
    width: '222px',
    maxWidth: '100%',
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-30px', '-30px', '-30px', '-30px', '-30px'],
    mr: ['-30px', '-30px', '-30px', '-30px', '-45px'],
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pl: ['30px', '30px', '30px', '30px', '45px'],
    pr: ['30px', '30px', '30px', '30px', '45px'],
    mb: ['50px', '70px'],
  },
  FeatureItemStyle: {
    alignItems: 'center',
  },
  iconStyle: {
    width: ['90px', '90px', '90px', '75px', '90px'],
    pr: '20px',
  },
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    lineHeight: '1.5',
    mb: ['10px', '15px'],
  },
  featureDescription: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#5d646d',
    letterSpacing: '-0.025em',
    lineHeight: '1.88',
    mb: 0,
  },
};

export default FeatureSection;