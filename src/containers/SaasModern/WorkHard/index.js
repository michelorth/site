import loadable from '@loadable/component';
import Tick from 'common/assets/image/agencyModern/tick-circle.webp';
import Ok from 'common/assets/image/ok.json';
import WorkHardIlustration from 'common/assets/image/work-hard-illustration.png';
import data from 'common/data/AgencyModern';
import React from 'react';
import SectionWrapper, {
  Content,
  Illustration,
  ListGroup, Section
} from './workHard.style';

const Heading = loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const List = loadable(() => import('common/components/List'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/ContainerTwo'));


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Ok,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const WorkHard = React.memo(() => { 
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Content>
            <Heading
              as="h2"
              content="Não trabalhe muito, trabalhe com inteligência. Relaxe, sente-se"
            />
            <Text content="Reduza o tempo e o esforço necessário para a gestão de ponto dos seus colaboradores. Com os recursos que só a Ponto Icarus oferece sua empresa pode focar no que realmente importa." />
            <ListGroup>
              {data && data.WorkHardList.map((item) => (
                <List
                  className="list-item"
                  key={item.id}
                  text={item.title}
                  icon={<Image src={Tick}
                  alt="check icon" />}
                />
              ))} 
            </ListGroup>
          </Content>
          <Illustration>

              <Image src={WorkHardIlustration} style={{width: '100%', height: '100%'}} />
          
              
          </Illustration>
        </Section>
      </Container>
    </SectionWrapper>
  );
});

export default WorkHard;
