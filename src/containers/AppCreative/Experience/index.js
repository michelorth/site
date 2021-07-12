import React from 'react';
import loadable from '@loadable/component';
import { closeModal, openModal } from '@redq/reuse-modal';
import { experiences } from 'common/data/AppCreative';
import { Icon } from 'react-icons-kit';
import { ic_play_arrow } from 'react-icons-kit/md/ic_play_arrow';
import { SectionHeader } from '../appCreative.style';
import SectionWrapper, {
  ExperienceMainWrap,
  ExperienceWrapper, VideoArea, VideoWrapper
} from './experience.style';


const Button = loadable(() => import('common/components/Button'));
const Container = loadable(() => import('common/components/UI/Container'));
const Image = loadable(() => import('common/components/Image'));
const Text = loadable(() => import('common/components/Text'));
const Heading = loadable(() => import('common/components/Heading'));
const FeatureBlock = loadable(() => import('common/components/FeatureBlock'));


// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/QLS8AOml4Lw"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Experiences = () => {
  const { slogan, title, features, video_theme, clients } = experiences;

  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <SectionWrapper id="experience">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <ExperienceMainWrap>
          <VideoArea onClick={handleVideoModal}>
            <img src={video_theme} alt="Microsoft" />
            <Button
              className="video__btn"
              icon={<Icon className="plus" icon={ic_play_arrow} />}
            />
          </VideoArea>
          <ExperienceWrapper>
            {features.map((item, index) => (
              <FeatureBlock
                key={`post_key-${index}`}
                id={`post_id-${item.id}`}
                className="experience__item"
                icon={
                  <Image
                    src={item.icon}
                    alt={`Icon ${item.id}`}
                    objectFit="cover"
                    className="experience__image"
                  />
                }
                iconPosition="left"
                title={<Heading as="h4" content={item.title} />}
                description={<Text content={item.description} />}
              />
            ))}
          </ExperienceWrapper>
        </ExperienceMainWrap>
        
      </Container>
    </SectionWrapper>
  );
};

export default Experiences;
