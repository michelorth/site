import loadable from '@loadable/component';
import {
  Accordion, AccordionBody, AccordionItem,
  AccordionTitle, CloseIcon, IconWrapper,
  OpenIcon
} from 'common/components/Accordion';
import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { minus } from 'react-icons-kit/entypo/minus';
import { plus } from 'react-icons-kit/entypo/plus';
import FaqWrapper from './faq.style';

const Box = loadable(() => import('common/components/Box'));
const Heading = loadable(() => import('common/components/Heading'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));

const FAQ_DATA = [
  {
    expend: true,
    title: 'Acompanhe Em Tempo Real',
    descriptionGab:
  {__html:'A jornada dos seus colaboradores, e eles também poderão visualizar seus registros, anexar atestados médicos e documentos pertinentes a jornada.',}
  },
  {
    title: 'Delimite Um Local Seguro Para O Registro De Ponto',
    descriptionGab:
  {__html:'Alguns relógios de ponto são instalados em locais com grande periculosidade, o que pode causar desconforto por parte dos colaboradores. Adote um local estratégico e registre até mesmo a geolocalização no momento do registro, oferecendo segurança jurídica para a empresa e colaboradores.',}
  },
  {
    title: 'Evite Erros E Inconsistências de Ponto',
    descriptionGab:
  {__html:'E não espere até o final do mês para isso! Com a Ponto Icarus, ajuste o ponto de maneira rápida! Além disso, seus colaboradores serão avisados por e-mail, SMS ou até mesmo notificação quando o ponto apresentar inconsistência, e ele mesmo poderá ajustá-lo.',}
  },
  {
    title: 'Cuidado Com Os Protocolos Sanitários',
    descriptionGab:
   {__html:'Pois com a pandemia do Covid-19, o registro manual ou em relógios de ponto se tornou um desafio. Para evitar a proliferação de doenças por meio do toque em superfícies comuns, seus colaboradores podem bater ponto a distância através de Totens com reconhecimento facial, ou aplicativo de smartphone pessoal.'},
  },
  {
    title: 'Registro Multiplataforma',
    descriptionGab:
   {__html:'Registre o Ponto por celular, tablet, totem, computador, online ou offiline, através de um clique ou por aproximação e reconhecimento facial.'},
  },
  {
    title: 'Distribua Holerites',
    descriptionGab:
   {__html:'De maneira automática, sem precisar desmembrar PDFs com dezenas de páginas! Suba o arquivo completo, e baseado nas informações de matrícula de cada colaborador, cada um será direcionado para o seu perfil na plataforma.'},
  },
  {
    title: 'Configure O Calendário',
    descriptionGab:
   {__html:'E avise seus colaboradores de datas importantes, feriados e muito mais! Essa ferramenta pode ser utilizada para fins organizacionais e também fomentar seu endomarketing e relacionamento com seus colaboradores.'},
  },
  {
    title: 'Gerencia Férias E Folgas',
    descriptionGab:
   {__html:'E não perca mais tempo gerenciando a regra, e sim, a exceção! Com o nosso sistema, você pode configurar de maneira intuitiva dos dias em que os seus colaboradores tem aquele descanso merecido! É só configurar, arrastar e pronto!'},
  },
  {
    title: 'Dê Adeus Às Máquinas Ultrapassadas E Manuais',
    descriptionGab:
   {__html:'E a softwares complicadíssimos! Com a Ponto Icarus a sua empresa pode reduzir custos de aluguéis, manutenção, bobinas, plataformas caras, tempo e pessoal para tratamento de ponto.'},
  },
  {
    title: 'Melhore A Rotina Do Seu RH',
    descriptionGab:
   {__html:'Reduzindo em até 80% do trabalho operacional para se preocupar com o que realmente importa! Os períodos de fechamento de ponto são um caos, nós sabemos! Por isso, nossa solução foi carinhosamente pensada para que o departamento de Recursos Humanos reduza o tempo, esforço e direcione sua capacidade produtiva para investir em saúde e qualidade de vida dos seus colaboradores!'},
  },
  {
    title: 'Prefere As Máquinas REP? Nosso Sistema É Integrado!',
    descriptionGab:
   {__html:'Se a sua empresa quiser manter os relógios de ponto, sem problemas! Nós também disponibilizamos nosso software para tratamento de ponto com coleta por meio de wi-fi.'},
  },
  
];

const FaqSection = React.memo(({
  sectionWrapper,
  row,
  col,
  secTitleWrapper,
  secHeading,
  secText,
  title,
  description,
  buttonWrapper,
  button,
}) => {
  return (
    <Box {...sectionWrapper} id="duvidas">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="PONTO ELETRÔNICO É IDEAL PARA EMPRESAS PETROLÍFERAS" />
          <Heading {...secHeading} content="Veja os Benefícios da plataforma Ponto Icarus" />
        </Box>
        <Box {...row}>
          <Box {...col}>
            <FaqWrapper>
              <Accordion>
                <>
                  {FAQ_DATA.map((accordionItem, index) => (
                    <AccordionItem
                      className="accordion_item"
                      key={`accordion-${index}`}
                      expanded={accordionItem.expend}
                    >
                      <>
                        <AccordionTitle className="accordion_title">
                          <>
                            <Heading {...title} content={accordionItem.title} />
                            <IconWrapper>
                              <OpenIcon>
                                <Icon icon={minus} size={18} />
                              </OpenIcon>
                              <CloseIcon>
                                <Icon icon={plus} size={18} />
                              </CloseIcon>
                            </IconWrapper>
                          </>
                        </AccordionTitle>
                        <AccordionBody className="accordion_body">
                          {
                            accordionItem.description ?
                          <Text
                            {...description}
                            content={accordionItem.description}
                          />
                          :
                          <div dangerouslySetInnerHTML={accordionItem.descriptionGab} style={description}/>
                          }
                        </AccordionBody>
                      </>
                    </AccordionItem>
                  ))}
                </>
              </Accordion>
            </FaqWrapper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
});

FaqSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
};

FaqSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['20px', '30px', '50px', '50px'],
    pb: ['60px', '80px', '80px', '80px'],
  },
  secTitleWrapper: {
    mb: ['55px', '65px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  col: {
    width: ['100%', '100%', '75%', '75%'],
  },
  title: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: 0,
  },
  description: {
    fontSize: '15px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: 0,
  },
  buttonWrapper: {
    mt: '50px',
    flexBox: true,
    justifyContent: 'center',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: ['22px'],
    pr: ['22px'],
    colors: 'secondaryWithBg',
    minWidth: '150px',
  },
};

export default FaqSection;