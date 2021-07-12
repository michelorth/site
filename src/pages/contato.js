import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import loadable from '@loadable/component';

import SEO from 'components/seo';
import { ResetCSS } from 'common/assets/css/style';
import {
  ContentWrapper, GlobalStyle
} from 'containers/SaasModern/sassModern.style';


const FaleConosco = loadable(() => import('containers/SaasModern/FaleConosco'));
const Navbar = loadable(() => import('containers/SaasModern/Navbar'));
const Sticky = loadable(() => import('react-stickynode'));

const Footer = loadable(() => import('containers/SaasModern/Footer'));

const SaasModern = () => {

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
      <SEO canonical="/contato"/>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>

          
          <FaleConosco />
          
          <Footer></Footer>
          
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasModern;

