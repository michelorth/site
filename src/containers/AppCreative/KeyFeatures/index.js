import loadable from '@loadable/component';
import { keyFeatures } from 'common/data/AppCreative';
import React, { Fragment } from 'react';
import { SectionHeader } from '../appCreative.style';
import { FeatureWrapper, SectionWrapper } from './keyFeatures.style';
import Fade from 'react-reveal/Fade';

const Text = loadable(() => import('common/components/Text'));
const Heading = loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Container = loadable(() => import('common/components/UI/Container'));
const FeatureBlock = loadable(() => import('common/components/FeatureBlock'));


const KeyFeatures = () => {
  const { slogan, title, features } = keyFeatures;

  return (
    <SectionWrapper id="keyFeatures">
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading content={title} />
            <Text content={slogan} />
          </Fade>
        </SectionHeader>
        <FeatureWrapper>
          {features.map((item) => (
            <Fade up delay={100 * item.id} key={`key-feature--key${item.id}`}>
              <FeatureBlock
                icon={
                  <Fragment>
                    <Image src={item.icon} alt={item.title} />
                  </Fragment>
                }
                title={<Heading as="h3" content={item.title} />}
                description={<Text content={item.description} />}
              />
            </Fade>
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default KeyFeatures;
