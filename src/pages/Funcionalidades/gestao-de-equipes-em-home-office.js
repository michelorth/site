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
const HomeOffice = loadable(() => import('containers/SaasModern/HomeOffice'));
const Sticky = loadable(() => import('react-stickynode'));

const SaasModern = () => {

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
      <SEO canonical="/Funcionalidades/gestao-de-equipes-em-home-office" title='Gestão de Equipes em Home Office' description="Controle o ponto das equipes em home office" keywords="home office, controle de ponto, ponto em home office, controle de ponto online, ponto home office"/>
      <ResetCSS />
        <GlobalStyle />
        
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <HomeOffice/>
          <Footer></Footer>
          
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasModern;

