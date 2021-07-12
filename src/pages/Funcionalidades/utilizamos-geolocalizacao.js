import React, { Fragment } from 'react';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import loadable from '@loadable/component'
import { ThemeProvider } from 'styled-components';
import SEO from 'components/seo';
import { ResetCSS } from 'common/assets/css/style';
import {
  ContentWrapper, GlobalStyle
} from 'containers/SaasModern/sassModern.style';

const Footer = loadable(() => import('containers/SaasModern/Footer'));
const Navbar = loadable(() => import('containers/SaasModern/Navbar'));
const Geolocalizacao = loadable(() => import('containers/SaasModern/Geolocalizacao'));
const Sticky = loadable(() => import('react-stickynode'));

const SaasModern = () => {


  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
      <SEO canonical="/Funcionalidades/utilizamos-geolocalizacao" title='Saiba de Onde os Colaboradores Bateram o Ponto' description="Gerencie da onde os seus colaboradores estão efetuando o registro de ponto. Você pode visualizar no mapa onde os registros aconteceram" keywords="Geolocalização, localização, batida de ponto, registro de ponto com localização, ponto com GPS, registro de ponto capturando a localização"/>
      <ResetCSS />
        <GlobalStyle />
        
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Geolocalizacao />
          <Footer></Footer>
          
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasModern;

