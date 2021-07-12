import { ResetCSS } from 'common/assets/css/style';
import { theme } from 'common/theme/appCreative';
import { ThemeProvider } from 'styled-components';
import React, { Fragment } from 'react';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper
} from 'containers/AppCreative/appCreative.style';
import loadable from '@loadable/component';
import SEO from 'components/seo';

const AvailableStore = loadable(() => import('containers/AppCreative/AvailableStore'));
const Banner = loadable(() => import('containers/AppCreative/Banner'));
const ChooseUs = loadable(() => import('containers/AppCreative/ChooseUs'));
const Experiences = loadable(() => import('containers/AppCreative/Experience'));
const Faqs = loadable(() => import('containers/AppCreative/Faq'));

const KeyFeatures = loadable(() => import('containers/AppCreative/KeyFeatures'));
const Navbar = loadable(() => import('containers/AppCreative/Navbar'));
const Pricing = loadable(() => import('containers/AppCreative/Pricing'));
const Testimonials = loadable(() => import('containers/SaasModern/Testimonial'));
const Newsletter = loadable(() => import('containers/AppModern/Newsletter'));
const Footer = loadable(() => import('containers/SaasModern/Footer'));
const Sticky = loadable(() => import('react-stickynode'));

export default function () {

  
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <SEO title="Ponto Eletrônico Para Indústrias | Ponto Icarus"
            canonical="industrias"
            description="Aplicativo de Ponto Eletrônico Inteligente para indústrias que otimiza em até 80% o trabalho do RH e Contabilidade em fechamento de ponto."/>


        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <KeyFeatures />
            <ChooseUs />
            <Experiences />
            {/*<FeatureSlider />*/}
            <Pricing />
            
            <Testimonials />
            <AvailableStore />
            <Faqs />
            <Newsletter />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        
      </Fragment>
    </ThemeProvider>
  );
}