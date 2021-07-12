import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Bubble = keyframes`
  0% {
		box-shadow: 0 0 0 3px rgba(255,65,108,0.3);
		opacity: 1;
		transform: scale3d(1, 1, 1);
	}
	100% {
		box-shadow: 0 0 0 100px rgba(255,65,108,0);
		opacity: 0;
		transform: scale3d(1, 1, 1);
	}
`;


const playPluse = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

export const VideoArea = styled.div`
  display: inline-flex;
  position: relative;
  margin: 0 auto 60px;
  img {
    max-width: 100%;
    object-fit: cover;
    cursor: pointer;
    height: 100%;
    border-radius: 10px;
  }
  .video__btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    display: inline-block;
    z-index: 0;
    padding: 0;
    background-color: transparent;
    @media only screen and (max-width: 480px) {
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
    &:before {
      content: '';
      position: absolute;
      z-index: 0;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      display: block;
      width: 80px;
      height: 80px;
      background: ${themeGet('colors.white', '#925B9F')};
      border-radius: 50%;
      animation: ${playPluse} 1.5s ease-out infinite;
    }
    > span {
      color: white;
      position: relative;
      z-index: 5;
      background-color: ${themeGet('colors.primaryLight', '#925B9F')};
      display: block;
      border-radius: inherit;
      height: 100%;
      width: 100%;
      svg {
        width: 50px;
        height: 50px;
        @media only screen and (max-width: 480px) {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
`;

export const BannerWrapper = styled.section`
  padding: 15px 0 0 0;
  background-image: linear-gradient(
    -139deg,
    rgb(147, 249, 185) 0%,
    rgb(29, 151, 108) 100%
  );
  background-size: cover;
  background-position: top center;
  overflow: hidden;
  @media (max-width: 575px) {
    padding: 0px 0 0 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .banner-shape {
    z-index: 2;
  }
`;

export const DiscountWrapper = styled.div`
  text-align: center;
`;

export const DiscountLabel = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: inline-block;
  border-radius: 4em;
  padding: 9px 22px;
  margin-bottom: 22px;
  background-color: rgba(255, 255, 255, 0.15);
  @media (max-width: 575px) {
    padding: 7px 10px;
  }
`;

export const VideoModal = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(
      -139deg,
      rgb(147, 249, 185) 0%,
      rgb(29, 151, 108) 100%
    );
    opacity: 0.2;
    pointer-events: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const PlayButton = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ff4553;
  cursor: pointer;
  outline: 0;
  z-index: 2;
  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
    svg {
      width: 30px;
    }
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    pointer-events: none;
    top: 0;
    left: 0;
    border-radius: inherit;
  }
  &:focus {
    &:after {
      animation: ${Bubble} 0.5s ease-out forwards;
    }
  }
`;

export const VideoWrapper = styled.div`
  max-width: calc(100% - 30px);
  width: 900px;
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
