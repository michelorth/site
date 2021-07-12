import loadable from '@loadable/component';
import Partner from 'common/assets/image/saasModern/partner.webp';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import React from 'react';
import PartnerSectionWrapper from './partner.style';

const Box = loadable(() => import('common/components/Box'));
const Text = loadable(() => import('common/components/Text'));
const Heading = loadable(() => import('common/components/Heading'));
const Button = loadable(() => import('common/components/Button'));
const Image = loadable(() => import('common/components/Image'));
const Container = loadable(() => import('common/components/UI/Container'));

const PartnerSection = React.memo(({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
}) => {
  return (
    <PartnerSectionWrapper id="icarus">
      <Container>
        <Box {...row}>
          <Box {...col} {...imageArea}>
            <Image src={Partner} alt="Icarus"
             width={'100%'}
             height={'100%'}
            />
          </Box>
          <Box {...col} {...textArea}>
            <Heading
              {...title}
              content="Conheça a Ponto Icarus"
            />
            <Text
              {...description}
              content="“Icarus meu filho, voaremos como pássaros, aconselho que voes em uma altura moderada, conserva-te perto de mim e estarás a salvo…”"
            />
            <Box>
              <Link href="/icarus">
                <a>
                  <Button {...button} title="LER MAIS" />
                </a>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </PartnerSectionWrapper>
  );
});

PartnerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
};

PartnerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%'],
    mb: ['40px', '40px', '0', '0', '0'],
  },
  title: {
    fontSize: ['26px', '30px', '30px', '48px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '15px',
    lineHeight: '1.25',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg',
    minWidth: '150px',
  },
};

export default PartnerSection;