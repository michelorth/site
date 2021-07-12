import ErrorImage from 'common/assets/image/404.svg';
import Box from 'common/components/Box';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Link from '@material-ui/core/Link';

import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-icons-kit';
import { home } from 'react-icons-kit/entypo/home';
import { ButtonWrapper, ErrorConatent, ErrorWrapper } from '../containers/Error/error.style';

const Custom404 = ({ imageWrapper, title, text, reloadButton, homeButton }) => {
  
  return (
    <ErrorWrapper>
      <ErrorConatent>
        <Box {...imageWrapper} className="image-wrapper">
          <Image src={ErrorImage} alt="404"
            height={'100%'}
            width={'100%'}
          />
        </Box>
        <Heading {...title} content="Página não encontrada!" />
        <Text
          {...text}
          content="Parece que a página que você está tentando visitar não existe. Verifique o URL e tente novamente."
        />
        <ButtonWrapper>
          
          <Link href="/">
            <a>
              <Button
                {...homeButton}
                title="Início"
                icon={<Icon icon={home} size={24} />}
                className="domain_search_button"
              />
            </a>
          </Link>
        </ButtonWrapper>
      </ErrorConatent>
    </ErrorWrapper>
  );
};

Custom404.propTypes = {
  imageWrapper: PropTypes.object,
};

Custom404.defaultProps = {
  imageWrapper: {
    mb: ['40px', '55px'],
  },
  title: {
    fontSize: ['26px', '32px', '38px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '35px'],
    lineHeight: '1.31',
    textAlign: 'center',
    fontFamily: 'poppins',
    fontWeight: '600',
  },
  text: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48',
    lineHeight: '2',
    mb: ['30px', '40px', '50px', '60px'],
    textAlign: 'center',
    fontFamily: 'lato',
  },
  reloadButton: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    pl: ['15px', '22px'],
    pr: ['15px', '22px'],
    iconPosition: 'left',
    bg: '#eaa03b',
    fontFamily: 'lato',
  },
  homeButton: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    pl: ['15px', '22px'],
    pr: ['15px', '22px'],
    iconPosition: 'left',
    bg: '#e2e7f0',
    fontFamily: 'lato',
  },
};

export default Custom404;
