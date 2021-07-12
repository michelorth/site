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
const Totem = loadable(() => import('containers/SaasModern/Totem'));
const Sticky = loadable(() => import('react-stickynode'));

const SaasModern = () => {


  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
      <SEO canonical="/Funcionalidades/totem-com-tablet-para-registro" title='Utilize o Tablet Para Registro de Ponto' description="Efetue o registro de ponto através de um tablet, utilizando reconhecimento facial" keywords="Registro de ponto com tablet, registro de ponto com reconhecimento facial, reconhecimento facial, registro de ponto, bater ponto com tablet, tablet com registro de ponto, controle de ponto com tablet" />
      <ResetCSS />
      <GlobalStyle />
        
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Totem />
          <Footer></Footer>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasModern;

