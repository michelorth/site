import { Hidden } from '@material-ui/core';
import SectionWrapper, { TextWrapper, ThumbWrapper } from './chooseUs.style';
import { Grid, Link } from '@material-ui/core';
import { chooseUs } from 'common/data/AppCreative';
import React from 'react';
import loadable from '@loadable/component';

const FeatureBlock = loadable(() => import('common/components/FeatureBlock'));
const Heading = loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));
const Button = loadable(() => import('common/components/Button'));


const ChooseUs = () => {
  const { thumb, features } = chooseUs;
  return (
    <SectionWrapper>
      <Container>
      <Hidden mdDown>
        <ThumbWrapper>
          <Image src={thumb} alt="Ponto Icarus Aplicativo de Ponto Eletrônico" />
        </ThumbWrapper>
      </Hidden>
        <TextWrapper>
          <Text style={{fontWeight: 'bold', fontSize: 30}} content={'Teste a plataforma por'} />
          <Text style={{fontWeight: 'bold', fontSize: 30, marginTop: 15}} content={'14 dias grátis!'} />
          {features.map((item) => (
            <FeatureBlock
              key={`app-feature--key${item.id}`}
              iconPosition="left"
              icon={<Text as="span" content={'0' + item.id} />}
              title={<Heading as="h3" content={item.title} />}
              description={<div dangerouslySetInnerHTML={{ __html: item.description }}/>}
            />
          ))}
        </TextWrapper>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">
            <Link href="#cadastroTrial">
              <a>
                <Button title="TESTE GRÁTIS" aria-label="TESTE GRÁTIS" style={{color: '#000', backgroundColor: '#edcd37', width: 350, height: 80, fontSize: '25pt'}}/>
              </a>
          </Link>

          <Hidden mdUp>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          </Hidden>

        </Grid>


      </Container>
    </SectionWrapper>
  );
};

export default ChooseUs;
