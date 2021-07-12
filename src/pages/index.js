import loadable from '@loadable/component';
import { Hidden } from '@material-ui/core';
import { ResetCSS } from 'common/assets/css/style';
import { saasModernTheme } from 'common/theme/saasModern';
import SEO from 'components/seo';
import { ConditionWrapper, ContentWrapper, GlobalStyle } from 'containers/SaasModern/sassModern.style';
import React, { Fragment, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/SaasModern/Navbar';

const Banner = loadable(() => import( 'containers/AppModern/Banner'));

const FaqSection = loadable(() => import( 'containers/SaasModern/Faq'));
const FeatureSection = loadable(() => import( 'containers/SaasModern/Feature'));
const FeatureSlider = loadable(() => import( 'containers/SaasModern/FeatureSlider'));
const FeatureSliderTwo = loadable(() => import( 'containers/SaasModern/FeatureSliderTwo'));
const FooterPage = loadable(() => import( 'containers/SaasModern/Footer'));
const PartnerSection = loadable(() => import( 'containers/SaasModern/Partner'));
const PricingSection1 = loadable(() => import( 'containers/SaasModern/Pricing2'));
const TestimonialSection = loadable(() => import( 'containers/SaasModern/Testimonial'));
const TrialSection = loadable(() => import( 'containers/SaasModern/Trial'));
const UpdateScreen = loadable(() => import( 'containers/SaasModern/UpdateScreen'));
const WorkHard = loadable(() => import( 'containers/SaasModern/WorkHard'));
const WorkingProcessSection = loadable(() => import( 'containers/SaasModern/WorkingProcess'));

export default () => {
  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <SEO />

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
        
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
       
          <Banner />
           
          <WorkingProcessSection />
          <ConditionWrapper id="keyfeature">

            <Hidden mdDown>
              <FeatureSlider />
            </Hidden>

            <Hidden mdUp>
              <FeatureSliderTwo />
            </Hidden>


          </ConditionWrapper>
          <Hidden mdDown>
             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </Hidden>

          <Hidden mdUp>
            <br/><br/>
          </Hidden>
          

          <FeatureSection />
          <UpdateScreen />
          <PricingSection1 />
          <TrialSection informaNumeroColab={true}/>
          <PartnerSection />
          <WorkHard />
          <br/><br/><br/><br/>
          
          <TestimonialSection />
          <FaqSection />
          <FooterPage />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
