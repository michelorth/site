import { ResetCSS } from 'common/assets/css/style';
import { saasClassicTheme } from 'common/theme/saasClassic';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  ContentWrapper, GlobalStyle
} from 'containers/SaasClassic/saasClassic.style';
import loadable from '@loadable/component'
import SEO from 'components/seo';


const BannerSection = loadable(() => import('containers/SindiPetro/Banner'));
const FeatureSection = loadable(() => import('containers/SindiPetro/Feature'));
const Newsletter = loadable(() => import('containers/SindiPetro/Newsletter'));
const PartnerSection = loadable(() => import('containers/SaasClassic/Partner')); 
const ServiceSection = loadable(() => import('containers/SaasClassic/Service'));
const Footer = loadable(() => import('containers/SaasModern/Footer'));
const PricingSection1 = loadable(() => import('containers/SaasModern/Pricing2'));
const TestimonialSection = loadable(() => import('containers/SaasModern/Testimonial'));
const FaqSection = loadable(() => import('containers/SindiPetro/Faq'));

const SaasClassic = () => {
  return (
    <ThemeProvider theme={saasClassicTheme}>
      <Fragment>
        <SEO title="Ponto Eletrônico Para Petrolíferas | Ponto Icarus"
        canonical="petroliferas"
        description="Sistema de ponto eletrônico online para petrolíferas, que controla a jornada dos colaboradores e fornece relatórios em tempo real."/>
        <ResetCSS /> 
        <GlobalStyle />

        <ContentWrapper>
          
          <BannerSection />
          
          <ServiceSection />

          <FaqSection />
          <FeatureSection />
          
          <PartnerSection />
          <PricingSection1 />


          <TestimonialSection />
          
          <Newsletter />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasClassic;