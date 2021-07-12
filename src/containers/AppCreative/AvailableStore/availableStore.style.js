import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';

const SectionWrapper = styled.section`
  padding: 0px 0 0px;
  background-color: ${themeGet('colors.primaryLight', '#1d976c')};
  
`;


export default SectionWrapper;
