import React, { Fragment } from 'react';
import { saasModernTheme } from 'common/theme/saasModern';
import { BannerWrapper } from 'containers/SaasModern/Banner/banner.style';
import { ThemeProvider } from 'styled-components';

import loadable from '@loadable/component'
import SEO from 'components/seo';
import { ResetCSS } from 'common/assets/css/style';
import {
  ContentWrapper, GlobalStyle
} from 'containers/SaasModern/sassModern.style';

const Footer = loadable(() => import('containers/SaasModern/Footer'));
const TrialSection = loadable(() => import('containers/SaasModern/Trial'));


const SaasModern = ({
  row,
  contentWrapper,
  discountAmount,
  discountText,
  title,
  description,
  imageWrapper,
  buttonWrapper,
  button,
  fillButton,
}) => {

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <SEO canonical="cadastro" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
         
        <BannerWrapper id="inicio">
        
      </BannerWrapper>
          <TrialSection trial={false} />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasModern;

