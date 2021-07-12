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
const RelogioPonto = loadable(() => import('containers/SaasModern/RelogioPonto'));
const Sticky = loadable(() => import('react-stickynode'));

const SaasModern = () => {


  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
      <SEO canonical="/Funcionalidades/dispensa-relogio-de-ponto" 
        title='Dispensa de Relógio de Ponto'
        description="Com o aplicativo de ponto eletrônico da Ponto Icarus, você não precisa mais utilizar o relógio de ponto tradicional" 
        keywords="relogio de ponto, ponto, ponto eletrônico, tablet, sistema de ponto"
        />
<ResetCSS />
        <GlobalStyle />
        
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <RelogioPonto />
          <Footer></Footer>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasModern;

