import { ResetCSS } from 'common/assets/css/style';
import { saasClassicTheme } from 'common/theme/saasClassic';
import {
  ContentWrapper, GlobalStyle
} from 'containers/SaasClassic/saasClassic.style';
import { ThemeProvider } from 'styled-components';
import React, { Fragment } from 'react';
import loadable from '@loadable/component'
import SEO from 'components/seo';

const BannerSection = loadable(() => import('containers/SaasClassic/Banner'));
const FeatureSection = loadable(() => import('containers/SaasClassic/Feature'));
const PartnerSection = loadable(() => import('containers/SaasClassic/Partner'));
const ServiceSection = loadable(() => import('containers/SaasClassic/Service'));
const Footer = loadable(() => import('containers/SaasModern/Footer'));
const PricingSection1 = loadable(() => import('containers/SaasModern/Pricing2'));
const TestimonialSection = loadable(() => import('containers/SaasModern/Testimonial'));


const SaasClassic = () => {
  return (
    <ThemeProvider theme={saasClassicTheme}>
      <Fragment>
        <SEO title="Sistema de Ponto Eletrônico | Ponto Icarus"
        canonical="sistema-de-ponto-eletronico"
        description="Sistema de ponto eletrônico online que administra funcionalidades da jornada de trabalho dispensando ou não ponto eletrônico tradicional, possibilitando a gestão de trabalho remoto e home office com ferramentas que automatizam funções essenciais para a contabilidade e recursos humanos."/>
        <ResetCSS /> 
        <GlobalStyle />

        <ContentWrapper>
          
          <BannerSection />
          <ServiceSection />
          <PartnerSection />

          <FeatureSection />
          
          <PricingSection1 />
          <TestimonialSection />
          
          
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasClassic;