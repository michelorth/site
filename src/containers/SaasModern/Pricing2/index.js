import loadable from '@loadable/component';
import {
  MONTHLY_PRICING_TABLE,
  YEARLY_PRICING_TABLE
} from 'common/data/AgencyDigital';
import React, { useEffect, useState } from 'react';
import { Icon } from 'react-icons-kit';
import { Box, Grid, Link, Paper, Typography } from '@material-ui/core';
import { closeCircled } from 'react-icons-kit/ionicons/closeCircled';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';
import {
  PricingButton,
  PricingButtonWrapper
} from '../Pricing/pricing.style';
import Section, {
  ContentWrapper, FeatureItem, PriceTable,
  PricingFeature
} from './pricing.style';

import PropTypes from 'prop-types';


const Container = loadable(() => import('common/components/UI/ContainerTwo'));
const Button = loadable(() => import('common/components/Button'));
const SectionHeading = loadable(() => import('../SectionHeading'));


function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

const Pricing = React.memo(({buttonStyle}) => {
  const size = process.browser && useWindowSize();
  const isTablet = Boolean(size.innerWidth <= 768);

  const [state, setState] = useState({
    data: MONTHLY_PRICING_TABLE,
    active: true,
  });

  const activeStatus = state.active;

  return (

    <Section id="tabela_precos">
      <Container>
        <SectionHeading
          slogan="Planos"
          title="Escolha um plano que combina com você"
        />

        <PricingButtonWrapper>
          <Button
            title="Plano Mensal"
            className={activeStatus ? 'active-item' : ''}
            onClick={() =>
              setState({ data: MONTHLY_PRICING_TABLE, active: true })
            }
          />
          <Button
            title="Plano Anual"
            className={activeStatus === false ? 'active-item' : ''}
            onClick={() =>
              setState({ data: YEARLY_PRICING_TABLE, active: false })
            }
          />
        </PricingButtonWrapper>

        <br/><br/><br/>

        <ContentWrapper>
          {!isTablet && (
            <PricingFeature>
              <FeatureItem>Registre Pontos</FeatureItem>
              <FeatureItem>Faça Ajustes</FeatureItem>
              <FeatureItem>Efetue Fechamentos</FeatureItem>
              <FeatureItem>Reconhecimento Facial</FeatureItem>
              <FeatureItem>Batida de Ponto Offline</FeatureItem>
              <FeatureItem>Aplicativo Para Tablets</FeatureItem>
              <FeatureItem>Controle de Férias</FeatureItem>
              <FeatureItem>Distribuição de Holerites</FeatureItem>
              <FeatureItem>API de Integração</FeatureItem>
            </PricingFeature>
          )}

          {state.data.pricing.map((priceTable) => (
            <PriceTable 
              key={priceTable.id}
              className={priceTable.isRecommended && 'isRecommended'}
            >
              {priceTable.isRecommended && (
                <div className="recommended">Recomendado</div>
              )}

              <h2 className="title">{priceTable.package_name}</h2>
              <h6 className="primaryOutlined">{priceTable.description}</h6>
              <div className="price">
                {priceTable.showPrice ? <>R$ {priceTable.price}</> : priceTable.price} 
              </div>
              <ul className="featureList">
                {priceTable.features.map((feature) => (
                  <FeatureItem key={feature.id}>
                    {isTablet ? (
                      feature.isAvailable ? (
                        feature.name
                      ) : (
                        <Icon
                          icon={closeCircled}
                          size={18}
                          style={{ color: '#CED7E1' }}
                        />
                      )
                    ) : feature.isAvailable ? (
                      <Icon
                        icon={ic_check_circle}
                        size={18}
                        style={{ color: '#3CC68A' }}
                      />
                    ) : (
                      <Icon
                        icon={closeCircled}
                        size={18}
                        style={{ color: '#CED7E1' }}
                      />
                    )}
                  </FeatureItem>
                ))}
              </ul>


              <PricingButton>
                      <Link href={'#cadastroTrial'}>
                        <a>
                         
                            <Button
                              title={'Teste Grátis'}
                              {...buttonStyle}
                            />
                          
                        </a>
                      </Link>
                    </PricingButton>

            </PriceTable>
          ))}
        </ContentWrapper>
      </Container>
    </Section>
  );
});


Pricing.propTypes = {
 
  priceStyle: PropTypes.object,
};


Pricing.defaultProps = {
  
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    bg: '#fff',
    color: '#2aa275',
    colors: 'primaryWithBg',
    width: '222px',
    maxWidth: '100%',
  },
};

export default Pricing;
