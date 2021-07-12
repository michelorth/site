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
const ReconhecimentoFacial = loadable(() => import('containers/SaasModern/ReconhecimentoFacial'));
const Sticky = loadable(() => import('react-stickynode'));

const SaasModern = () => {

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
      <SEO canonical="/Funcionalidades/reconhecimento-facial" title='Registro de Ponto com Reconhecimento Facial' description="Registro de ponto com reconhecimento facial" keywords="reconhecimento facial, registro de ponto, controle de ponto com reconhecimento facial, reconhecimento facial, registro de ponto online, bater ponto online, bater ponto com reconhecimento facial"/>
      <ResetCSS />
        <GlobalStyle />
        
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ReconhecimentoFacial />
          <Footer></Footer>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasModern;

