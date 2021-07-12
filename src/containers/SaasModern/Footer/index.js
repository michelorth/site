import loadable from '@loadable/component';
import LogoImage from 'common/assets/image/saasModern/icarus_logomarca_psainfo.webp';
import Link from '@material-ui/core/Link';

import PropTypes from 'prop-types';
import React from 'react';
import FooterWrapper, { List, ListItem } from './footer.style';

const Box = loadable(() => import('common/components/Box'));
const Heading = loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));


const FOOTER_WIDGET = [
  {
    title: 'Ponto Icarus',
    menuItems: [
      {
        url: '#icarus',
        text: 'Sobre a Empresa',
      },
      {
        url: 'https://pontoicarus.com.br/contato',
        text: 'Fale Conosco (Contatos)',
      },
      {
        url: '#tabela_precos',
        text: 'Planos & Valores',
      },
      {
        url: '#duvidas',
        text: 'Perguntas Frequentes',
      }
    ],
  },
  {
    title: 'Políticas',
    menuItems: [
      {
        url: 'https://material.pontoicarus.com.br/termos-de-uso',
        text: 'Termos & Condições',
      },
      {
        url: 'https://material.pontoicarus.com.br/politica-de-privacidade',
        text: 'Política de Privacidade',
      },
      {
        url: 'https://material.pontoicarus.com.br/politica-de-cookies',
        text: 'Política de Cookies',
      },
    ],
  },
  {
    title: 'Aplicativos',
    menuItems: [
      {
        url: 'https://apps.apple.com/us/app/icarus/id1556137341',
        text: 'App iOS - Colaborador',
      },
      {
        url: 'https://play.google.com/store/apps/details?id=br.com.pontoicarus',
        text: 'App Android - Colaborador',
      },
      {
        url: 'https://play.google.com/store/apps/details?id=br.com.pontoicarus.totem',
        text: 'App Android - Totem (Tablet)',
      },

      {
        url: 'https://pontoicarus.com.br/calculadora/salario-liquido',
        text: 'Cálculadora de Salário Líquido',
      },
      {
        url: 'https://pontoicarus.com.br/calculadora/fgts',
        text: 'Cálculadora de FGTS',
      },
      {
        url: 'https://pontoicarus.com.br/calculadora/inss',
        text: 'Cálculadora de INSS',
      },
      {
        url: 'https://pontoicarus.com.br/calculadora/seguro-desemprego',
        text: 'Cálc. de Seguro Desemprego',
      },
      {
        url: 'https://pontoicarus.com.br/calculadora/irrf',
        text: 'Cálculadora de IRRF',
      },
      {
        url: 'https://pontoicarus.com.br/calculadora/hora-extra',
        text: 'Cálculadora de Hora Extra',
      },
    ],
  },
  {
    title: 'Páginas',
    menuItems: [
      {
        url: 'https://www.instagram.com/pontoicarus/',
        text: 'Instagram',
      },
      {
        url: 'https://www.linkedin.com/company/pontoicarus/',
        text: 'LinkedIn',
      },
      {
        url: 'https://www.facebook.com/Icarus-Ponto-Eletr%C3%B4nico-Inteligente-100415935102516',
        text: 'Facebook',
      },
      {
        url: 'https://blog.pontoicarus.com.br/',
        text: 'Blog',
      },
    ],
  },
];


const Footer = React.memo(({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            
          <Image src={LogoImage} alt={'App de ponto eletrônico'} height={50}
            width={140}  />

            <Text content={
              <a href="mailto:comercial@pontoicarus.com.br">comercial@pontoicarus.com.br</a>
             } {...textStyle} />
            <Text content={
              <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5548991110697&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Ponto%20Icarus">(48) 9 9111 0697</a>
             } {...textStyle} />
            <Text content="(48) 3220 0873" {...textStyle} />
            <Text content="Rua Prof. Ayrton Roberto de Oliveira, 32 - Sala 403 - Ed. Laguna Corporate Center, Itacorubi/Florianópolis - 88034-050" {...textStyle} />
          </Box>
          
          <Box {...colTwo}>
            {FOOTER_WIDGET.map((widget, index) => (
              <Box className="col" {...col} key={`footer-widget-${index}`}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map((item, index) => (
                    <ListItem key={`footer-list-item-${index}`}>
                      <Link href={item.url} >
                        <a className="ListItem" rel="noreferrer">{item.text}</a>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
});

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px',
  },
  // Default logo size
  logoStyle: {
    width: '130px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '14px',
  },
};

export default Footer;