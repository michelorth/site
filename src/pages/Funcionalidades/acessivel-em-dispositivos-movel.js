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
const Sticky = loadable(() => import('react-stickynode'));

const OnlineOffline = loadable(() => import('containers/SaasModern/OnlineOffline'));
const SaasModern = () => {


  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <SEO canonical="/Funcionalidades/acessivel-em-dispositivos-movel" 
        title='Controle de Ponto Através de Dispositivos Móveis'
        description="Controle de Ponto Através de Dispositivos Móveis" keywords="Controle de ponto online, controle de ponto offline, controle de ponto com localização, captura de localização do ponto, ponto offline, ponto online, captura de ponto offline, controle de ponto com reconhecimento facial"/>
<ResetCSS />
        <GlobalStyle />
        
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <OnlineOffline />
          <Footer></Footer>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasModern;

