import Image1 from '../../assets/image/appCreative/feature/slide1.png';
import Image2 from '../../assets/image/appCreative/feature/slide2.png';
import Image3 from '../../assets/image/appCreative/feature/slide3.png';
import Image4 from '../../assets/image/appCreative/feature/slide4.png';
import Image5 from '../../assets/image/appCreative/feature/slide5.png';
import Image6 from '../../assets/image/appCreative/feature/slide6.png';
import expIcon1 from '../../assets/image/appCreative/experience/1.png';
import expIcon2 from '../../assets/image/appCreative/experience/2.png';
import expIcon3 from '../../assets/image/appCreative/experience/3.png';
import expIcon4 from '../../assets/image/appCreative/experience/4.png';
import videoTheme from '../../assets/image/appCreative/experienceVideo.webp';
import chooseThumb from '../../assets/image/appCreative/bannerImg1.webp';
import keyFeature1 from '../../assets/image/appCreative/key_feature/1.png';
import keyFeature2 from '../../assets/image/appCreative/key_feature/2.png';
import keyFeature3 from '../../assets/image/appCreative/key_feature/3.png';
import keyFeature4 from '../../assets/image/appCreative/key_feature/4.png';

/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import logo from '../../assets/image/saasModern/logo.webp';
export const navbar = {
  logoImage: logo,
  navMenu: [
    {
      id: 1,
      label: 'Início',
      path: '#home',
      offset: '80',
    },
    {
      id: 2,
      label: 'Funcionalidades',
      path: '#keyFeatures',
      offset: '73',
    },
    {
      id: 3,
      label: 'Planos',
      path: '#pricing',
      offset: '73',
    },
    {
      id: 4,
      label: 'Teste Grátis',
      path: '#testegratis',
      offset: '73',
    },
    {
      id: 5,
      label: 'Perguntas Frequentes',
      path: '#faq',
      offset: '73',
    },
  ],
};

/* ------------------------------------ */
// Key Features data section
/* ------------------------------------ */

export const keyFeatures = {
  title: 'Não perca tempo com fechamento de ponto manual. Automatize!',
  slogan:
    'Com a Ponto Icarus, a Jornada do Colaborador é realizada em uma só plataforma. Dê adeus ao relógio de ponto e sistemas caríssimos!',
  features: [
    {
      id: 1,
      icon: keyFeature1,
      title: 'Liberdade',
      description:
        'Registro de Ponto por APP, Navegador ou Tablet.',
    },
    {
      id: 2,
      icon: keyFeature2,
      title: 'Tratamento De Ponto',
      description:
        'Configure as regras e trate das exceções com facilidade. Gerencie o ponto eletrônico, jornada de trabalho, troca de turno, férias e feriados de maneira prática.',
    },
    {
      id: 3,
      icon: keyFeature3,
      title: 'Fechamento com um Clique',
      description:
        'Realize o fechamento de ponto e distribua holerites ou qualquer PDF de maneira automática para todos os colaboradores. Você não precisa mais desmembrar um arquivo gigante e enviar individualmente.',
    },
    {
      id: 4,
      icon: keyFeature4,
      title: 'Armazenamento em Nuvem',
      description:
        'Os dados do seus colaboradores são armazenados em nuvem. Acesse informações e relatórios de onde estiver e a qualquer hora!',
    },
  ],
};

/* ------------------------------------ */
// Choose us data section
/* ------------------------------------ */

export const chooseUs = {
  thumb: chooseThumb,
  features: [
    {
      id: 1,
      title: 'Clique em Teste Grátis',
      description:
        '<p style="color: #343D48; font-size: 15px;line-height: 28px;margin-bottom: 0;">E preencha as informações necessárias para garantir o seu teste em nossa plataforma.</p>',
    },
    {
      id: 2,
      title: 'Comece a Utilizar',
      description:
        '<p style="color: #343D48; font-size: 15px;line-height: 28px;margin-bottom: 0;">Baixe o APP ou utilize por navegador. Você pode cadastrar o seu time para testar. Temos diversos conteúdos audiovisuais para te guiar dentro da plataforma, <a href="https://www.youtube.com/watch?v=QLS8AOml4Lw&t=2s" target="_blank">como esse aqui</a>. Em caso de dúvidas, nossos especialistas estão prontos para te ajudar!</p>',
    },
    {
      id: 3,
      title: 'Gostou? Transforme seu RH!',
      description:
        '<p style="color: #343D48; font-size: 15px;line-height: 28px;margin-bottom: 0;">Perceba a diferença que a nossa plataforma causará na sua empresa. Tenha mais agilidade, redução de custos e informações em tempo real para fazer uma gestão mais eficiente do seu negócio!</p>',
    },
  ],
};

/* ------------------------------------ */
// Experience data section
/* ------------------------------------ */

export const experiences = {
  title: 'Conheça mais da Ponto Icarus',
  slogan:
    'A sua nova plataforma inteligente de gestão de ponto eletrônico online.',
  video_theme: videoTheme,
  features: [
    {
      id: 1,
      icon: expIcon1,
      title: 'Economize com Ponto Eletrônico Online',
      description:
        'Chega de assinaturas e manutenções caríssimas com REP e softwares complexos. Tenha uma plataforma completa a baixo custo.',
    },
    {
      id: 2,
      icon: expIcon2,
      title: 'Tempo é Dinheiro',
      description:
        'Não precisa esperar o final do mês para tratar do ponto. Otimize a gestão do tempo do seu RH em 80%.',
    },
    {
      id: 3,
      icon: expIcon3,
      title: 'Você Sempre No Controle',
      description:
        'Ganhe produtividade para sua empresa inovar e obter sucesso estrategicamente.',
    },
    {
      id: 4,
      icon: expIcon4,
      title: 'Automatize e humanize os processos do RH',
      description:
        'Coloque as pessoas no centro do seu negócio e melhore sua cultura organizacional.',
    },
  ],
 
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */

export const features = {
  title: 'Como a Plataforma Funciona?',
  slogan:
    'Clique nos ícones abaixo ou assista esse vídeo Visão Geral do Sistema Ponto Icarus.',
  items: [
    {
      id: 1,
      thumbnail: Image1,
      title: 'Registro de Ponto On e Offine',
      description:
        'APP, Navegador, Totem/Tablet. Mesmo se o colaborador não tiver acesso à internet, o registro de ponto é realizado offilne e atualizado a partir da próxima conexão.',
    },
    {
      id: 2,
      thumbnail: Image2,
      title: 'Reconhecimento Facial',
      description:
        'Em 2 segundos faça o registro de ponto. Basta o colaborador ter uma câmera em seu dispositivo ou se apresentar diante de um Totem/Tablet instalado em sua empresa.',
    },
    {
      id: 3,
      thumbnail: Image3,
      title: 'Geolocalização',
      description:
        'Veja no mapa as localizações dos seus colaboradores no momento da batida de ponto. Tenha segurança e controle de jornadas presenciais ou home office.',
    },
    {
      id: 4,
      thumbnail: Image4,
      title: 'Elimine Inconsistências',
      description:
        'Atribua colaboradores a gestores diretos ou centro de custo para reduzir inconsistências e corrigir o ponto rapidamente.',
    },
    {
      id: 5,
      thumbnail: Image5,
      title: 'Resumo da Jornada',
      description:
        'Dashboard automático para visualização rápida de Horas Faltantes, Horas Normais e Horas Extras.',
    },
    {
      id: 6,
      thumbnail: Image6,
      title: 'Folgas e Férias',
      description:
        'Trate a exceção, não a regra. Arraste cartões para organizar as folgas e férias dos seus colaboradores de forma fácil e intuitiva.',
    },
  ],
};

/* ------------------------------------ */
// Faq data section
/* ------------------------------------ */
export const faq = {
  title: 'Perguntas Frequentes',
  slogan: 'Caso sua dúvida não seja respondida, entre em contato com o nosso canal de atendimento via Chat ou WhatsApp clicando nos botões que aparecem nos cantos da sua tela.',
  faqs: [
    {
      
      id: 1,
      question: 'Queremos manter o REP. O sistema Icarus possui integração?',
      answer:
        '<p style={{fontSize: "15px", lineHeight: "32px", color: "#343D48"}}>Se a sua empresa quiser manter os relógios de ponto, sem problemas! Nós também disponibilizamos nosso software para tratamento de ponto com coleta por meio de wi-fi e em tempo real!</p>',
    },
    {
      id: 2,
      question: 'Como a Icarus pode ajudar a Indústria Metalúrgica e Mecânica?',
      answer:
        '<p style={{fontSize: "15px", lineHeight: "32px", color: "#343D48"}}>Se a preocupação da sua empresa é relacionada a jornada de trabalho, conheça a Icarus. Nossa plataforma é intuitiva e permite que você realize o tratamento de ponto em tempo real. Acabe com as inconssistências de ponto, controle horas extras e tenha uma visão geral da jornada de seus colaboradores.</p>',
    },
    {
      id: 3,
      question: 'Como a Icarus pode ajudar a Indústria de Plásticos?',
      answer:
        '<p style={{fontSize: "15px", lineHeight: "32px", color: "#343D48"}}>Com a Icarus, a sua empresa pode tratar jornadas, intrajornadas, folgas, feriados, férias, horas extras, horas faltantes e gerenciar o fechamento de ponto de maneira automática. Crie centros de custos e determine a gestão do ponto para o RH diretamente, ou para gestores diretos. Não perca tempo. Ganhe agilidade!</p>',
    },
    {
      id: 4,
      question: 'Como a Icarus pode ajudar a Indústria Têxtil?',
      answer:
        '<p style={{fontSize: "15px", lineHeight: "32px", color: "#343D48"}}>Para diferentes jornadas de trabalho, a mesma plataforma é capaz de gerenciar diferentes turnos e centros de custo. Automatize o tratamento, fechamento e distribuição de holerites de forma automatizada.</p>',
    },
    {
      id: 5,
      question: 'Como a Icarus pode ajudar a Indústria Madeireira?',
      answer:
        '<p style={{fontSize: "15px", lineHeight: "32px", color: "#343D48"}}>Os profissionais da Indústria Madeireira sempre estão em movimento! Pensando nisso, nosso sistema de geolocalização na batida de ponto é ideal para garantir a segurança dos colaboradores dentro da jornada de trabalho externa. Além disso, o sistema de ponto eletrônico online substitui relógios de ponto e possibilita o tratamento do ponto em tempo real.</p>',
    },
    {
      id: 6,
      question: 'Como a Icarus pode ajudar a Indústria de Tecnologia de Informação?',
      answer:
        '<p style={{fontSize: "15px", lineHeight: "32px", color: "#343D48"}}>Uma plataforma com segurança de dados faz sentido para sua empresa? A Icarus se preocupa em garantir a segurança de dados sensíveis de acordo com as portarias 1510 e 373 do Ministério do Trabalho, e também com a LGPD.</p>',
    },
    {
      id: 7,
      question: 'O Sistema é Seguro e Legal?',
      answer:
        '<p style={{fontSize: "15px", lineHeight: "32px", color: "#343D48"}}>Nosso sistema está de acordo com as portarias 1510 e 373 do Ministério do Trabalho, e também com a LGPD. Leia nosso artigo sobre a obrigatoriedade do registro de ponto. Saiba quais são as principais obrigatoriedades da folha de ponto - Aplicativo de Ponto Eletrônico | Ponto Icarus<br/><br/>Somos ISO 9001! Garantia de Qualidade!<br/>Somos uma empresa certificada pelo ISO 9001. Nossos processos são reconhecidos pela qualidade, eficiência e segurança. A ISO 9001 é uma norma internacionalmente reconhecida que certifica o Sistema de Gestão da Qualidade (SGQ) e define os requisitos para a implantação do sistema em uma organização.</p>',
    },
    {
      id: 8,
      question: 'Temos a melhor equipe de suporte do mercado!',
      answer:
        '<p style={{fontSize: "15px", lineHeight: "32px", color: "#343D48"}}>Somos referência em atendimento ao cliente! A Ponto Icarus tem a preocupação de te conduzir para a melhor experiência de jornada do colaborador do mercado. Não somos apenas um "controle de ponto eletrônico". Nascemos para descomplicar os processos de RH e otimizar seu tempo e dinheiro para que você possa focar no que realmente importa: seus colaboradores!</p>',
    },
  ],
};
