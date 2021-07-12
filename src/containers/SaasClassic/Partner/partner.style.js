import styled from 'styled-components';
import BgImage from 'common/assets/image/saasClassic/map.png';
 
const PartnerSectionWrapper = styled.section` 
  padding: 0px 0;
  background-color: #f6fbf9;
  background-image: url(${BgImage}),
    linear-gradient(-139deg, rgb(147, 249, 185) 0%, rgb(29, 151, 108) 100%);
  background-repeat: no-repeat;
  background-position: 25% center;

  @media (max-width: 990px) {
    padding: 0px 0;
  }
  @media (max-width: 767px) {
    padding: 80px 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0;
  }
`;

export default PartnerSectionWrapper;
