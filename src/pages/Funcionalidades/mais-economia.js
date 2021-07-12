import React, { Fragment } from 'react';
import loadable from '@loadable/component';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { ThemeProvider } from 'styled-components';
import SEO from 'components/seo';
import { ResetCSS } from 'common/assets/css/style';
import {
  ContentWrapper, GlobalStyle
} from 'containers/SaasModern/sassModern.style';

const Footer = loadable(() => import('containers/SaasModern/Footer'));
const Navbar = loadable(() => import('containers/SaasModern/Navbar'));
const Economia = loadable(() => import('containers/SaasModern/Economia'));
const Sticky = loadable(() => import('react-stickynode'));

const SaasModern = () => {


  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
      <SEO canonical="/Funcionalidades/mais-economia" 
      title='Controle de Ponto Com Mais Economia' 
      description="Com o controle de Ponto online da Ponto Icarus, você economiza com a compra do REP, gastos com bobinas de papel, manutenção de equipamentos e processos trabalhistas." 
      keywords="economia, bobinas de ponto, rep, relogio de ponto, ponto, ponto eletrônico, tablet, sistema de ponto"
      />
<ResetCSS />
        <GlobalStyle />
        
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Economia />
          <Footer></Footer>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasModern;

