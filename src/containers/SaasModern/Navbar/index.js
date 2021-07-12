import loadable from '@loadable/component';
import LogoImage from 'common/assets/image/saasModern/logo-white.webp';
import LogoImageAlt from 'common/assets/image/saasModern/logo.webp';
import Logo from 'common/components/UIElements/Logo';
import { DrawerContext } from 'common/contexts/DrawerContext';
import { MENU_ITEMS } from 'common/data/SaasModern';
import Link from '@material-ui/core/Link';

import PropTypes from 'prop-types';
import React, { useContext } from 'react';


const NavbarWrapper = loadable(() => import('common/components/Navbar'));
const Drawer =loadable(() => import( 'common/components/Drawer'));
const Button = loadable(() => import('common/components/Button'));
const Box = loadable(() => import('common/components/Box'));
const HamburgMenu = loadable(() => import('common/components/HamburgMenu'));
const Container = loadable(() => import('common/components/UI/Container'));
const ScrollSpyMenu = loadable(() => import('common/components/ScrollSpyMenu'));

const Navbar = React.memo(({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle} className="saas_navbar">
      <Container>
        <Box {...row}>
          <Logo
            href="#"
            logoSrc={LogoImage}
            title="Portfolio"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="#"
            logoSrc={LogoImageAlt}
            title="Portfolio"
            logoStyle={logoStyle}
            className="logo-alt"
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={MENU_ITEMS}
              offset={-70}
            />
            <Link href="#cadastroTrial">
              <a className="navbar_button">
                <Button {...button} title="TESTE GRÁTIS" />
              </a>
            </Link>
            <Link href="https://web.pontoicarus.com.br" >
              <a className="navbar_button" target="_blank" rel="noreferrer">
                <Button {...button} title="ACESSAR PONTO" />
              </a>
            </Link>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#fff" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
              <Link href="#cadastroTrial">
                <a className="navbar_drawer_button">
                  <Button {...button} title="TESTE GRÁTIS" />
                </a>
              </Link>
              <Link href="https://web.pontoicarus.com.br" >
                <a className="navbar_drawer_button" target="_blank" rel="noreferrer">
                  <Button {...button} title="ACESSAR PONTO" />
                </a>
            </Link>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
});

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['120px', '130px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'secondaryWithBg',
    minHeight: 'auto',
    height: '40px',
    margin: '5px'
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
