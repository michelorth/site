import loadable from '@loadable/component';
import { SCREENSHOTS } from 'common/data/SaasModern';
import PropTypes from 'prop-types';
import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import React from 'react';
import Icon from 'react-icons-kit';
import SectionWrapper from './updateScreen.style';

const Box = loadable(() => import('common/components/Box'));
const Text = loadable(() => import('common/components/Text'));
const Heading = loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Container = loadable(() => import('common/components/UI/Container'));
const TiltShape = loadable(() => import('../TiltShape'));

const UpdateScreen = React.memo(({ secTitleWrapper, secText, secHeading }) => {
  return (
    <SectionWrapper>
      <TiltShape />
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="ICARUS" />
          <Heading {...secHeading} content="Veja mais algumas telas de nosso software" />
        </Box>
        <Tabs
          // renderTabBar={() => <ScrollableInkTabBar />}
          // renderTabContent={() => <TabContent animated={false} />}
          className="update-screen-tab"
        >
          {SCREENSHOTS.map((item, index) => (
            <TabPane
              forceRender={true}
              tab={
                <>
                  <Icon icon={item.icon} size={24} />
                  {item.title}
                </>
              }
              key={index + 1}
            >
              <Image src={item.image}
               width={'100%'}
               height={'100%'}
              alt={`screenshot-${index + 1}`} />
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </SectionWrapper>
  );
});

UpdateScreen.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#fff',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
};

export default UpdateScreen;