import React from 'react';
import loadable from '@loadable/component';
import SectionWrapper from './availableStore.style';

const Container = loadable(() => import('common/components/UI/Container'));
const TrialSection = loadable(() => import('containers/SaasModern/Trial'));

const AvailableStore = () => {
  
  return (
    <SectionWrapper id="testegratis">
      <Container>
          <TrialSection informaNumeroColab={true} showLogomarca={false}/>        
      </Container>
    </SectionWrapper>
  );
};

export default AvailableStore;
