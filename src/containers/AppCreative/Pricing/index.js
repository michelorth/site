import loadable from '@loadable/component';
import {
  MONTHLY_PRICING_TABLE,
  YEARLY_PRICING_TABLE
} from 'common/data/AgencyDigital';
import { PricingButton, PricingButtonWrapper } from 'containers/SaasClassic/Pricing/pricing.style';
import {
  ContentWrapper, FeatureItem, PriceTable,
  PricingFeature
} from 'containers/SaasModern/Pricing2/pricing.style';
import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { closeCircled } from 'react-icons-kit/ionicons/closeCircled';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';
import { SectionWrapper } from './pricing.style';
import Link from '@material-ui/core/Link';

const Button = loadable(() => import('common/components/Button'));
const Container = loadable(() => import('common/components/UI/Container'));
const SectionHeading = loadable(() => import('containers/SaasModern/SectionHeading'));


const Pricing = () => {
  
  const isTablet = Boolean(false);
  const [state, setState] = useState({
    data: MONTHLY_PRICING_TABLE,
    active: true,
  });
  const activeStatus = state.active;
  return (
    <SectionWrapper id="pricing">
      
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

        <ContentWrapper >
          {!isTablet && (
            <PricingFeature style={{marginTop: 100}}>
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
                      />                          
                  </a>
                </Link>
              </PricingButton>

            </PriceTable>
          ))}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Pricing;
