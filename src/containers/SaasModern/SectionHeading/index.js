import loadable from '@loadable/component';
import React from 'react';
import HGroup from './heading.style';

const Heading = loadable(() => import('common/components/Heading'));

const SectionHeading = ({ title, slogan, ...props }) => {
  return (
    <HGroup {...props}>
      <Heading as="h4" content={slogan} />
      <Heading as="h2" content={title} />
    </HGroup>
  );
};

export default SectionHeading;
