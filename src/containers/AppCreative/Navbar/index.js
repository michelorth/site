import React, { useState } from 'react';
import loadable from '@loadable/component';
import { navbar } from 'common/data/AppCreative';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import Fade from 'react-reveal/Fade';
import Scrollspy from 'react-scrollspy';
import NavbarWrapper, { MenuArea, MobileMenu } from './navbar.style';


const ScrollSpyMenu = loadable(() => import('common/components/ScrollSpyMenu'));
const Logo = loadable(() => import('common/components/UIElements/Logo'));
const Button = loadable(() => import('common/components/Button'));
const Container = loadable(() => import('common/components/UI/Container'));

const Navbar = () => {
  const { logoImage, navMenu } = navbar;
  const [state, setState] = useState({
    mobileMenu: false,
  });

  const toggleHandler = (type) => {
    if (type === 'menu') {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
      });
    }
  };

  const scrollItems = [];

  navMenu.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  const handleRemoveMenu = () => {
    setState({
      ...state,
      mobileMenu: false,
    });
  };

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          href="/industrias"
          logoSrc={logoImage}
          title="App Creative"
          className="main-logo"
        />
        <MenuArea>
          <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} />

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler('menu')}
          />
        </MenuArea>
      </Container>

      <MobileMenu className={`mobile-menu ${state.mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {navMenu.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleRemoveMenu}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
          <Button title="Teste Grátis" />
        </Container>
      </MobileMenu>
     
    </NavbarWrapper>
  );
};

export default Navbar;
