import loadable from '@loadable/component';
import { SectionHeader } from '../appCreative.style';
import SectionWrapper, {
  ContentWrapper,
  MasonryItem,
  FaqItem,
} from './faq.style';
import { faq } from 'common/data/AppCreative';
import React from 'react';
import Masonry from 'react-masonry-component';

const Container = loadable(() => import('common/components/UI/Container'));
const Heading = loadable(() => import('common/components/Heading'));
const Text = loadable(() => import('common/components/Text'));

const masonryOptions = {
  originTop: true,
};

const Faq = () => {
  const { slogan, title, faqs } = faq;
  return (
    <SectionWrapper id="faq">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <ContentWrapper>
          <Masonry className="masonryGrid" options={masonryOptions}>
            {faqs.map((faq) => (
              <MasonryItem id={faq.id} key={faq.id}>
                <FaqItem>
                  <Heading as="h4" content={faq.question} />
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }}/> 
                </FaqItem>
              </MasonryItem>
            ))}
          </Masonry>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Faq;
