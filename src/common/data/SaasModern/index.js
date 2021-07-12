import { clockO } from 'react-icons-kit/fa/clockO';
import { copy } from 'react-icons-kit/fa/copy';
import { plug } from 'react-icons-kit/fa/plug';
import { calendar } from 'react-icons-kit/icomoon/calendar';
import Screenshot4 from '../../assets/image/saasModern/distribuicao-holerite.webp';
import Screenshot1 from '../../assets/image/saasModern/fechamento-ponto.webp';
import Screenshot3 from '../../assets/image/saasModern/manter-turno.webp';
import Process1 from '../../assets/image/saasModern/process-1.svg';
import Process2 from '../../assets/image/saasModern/process-2.svg';
import Process3 from '../../assets/image/saasModern/process-3.svg';
import Screenshot2 from '../../assets/image/saasModern/swagger.webp';

export const MENU_ITEMS = [
  {
    label: 'Início',
    path: 'https://pontoicarus.com.br/#inicio',
    offset: '0',
    staticLink: true
  },
  {
    label: 'Funcionalidades',
    path: 'https://pontoicarus.com.br/#funcionalidades',
    offset: '0',
    staticLink: true
  },
  {
    label: 'Icarus',
    path: 'https://pontoicarus.com.br/icarus',
    offset: '0',
    staticLink: true
  },
  {
    label: 'Planos',
    path: 'https://pontoicarus.com.br/#tabela_precos',
    offset: '0',
    staticLink: true
  },
  {
    label: 'Blog',
    staticLink: true,
    path: 'https://blog.pontoicarus.com.br/',
    offset: '0',
  },
  {
    label: 'FAQ',
    path: 'https://pontoicarus.com.br/#duvidas',
    offset: '0',
    staticLink: true
  },
];

export const PROCESS_ITEMS = [
  {
    image: Process2,
    title: 'Crie uma conta gratuita',
    descriptionHtml:
    {__html:'Preencha o <a href="#cadastroTrial" >formulário</a> e efetue seu cadastro, depois você já pode começar a utilizar o nosso sistema de ponto gratuitamente por 14 dias.'},
  },
  {
    image: Process1,
    title: 'Faça o download do app de ponto',
    descriptionHtml:
    {__html: 'Peça para que seus colaboradores efetuem o download do aplicativo de ponto eletrônico em seus celulares nas lojas da<a href="https://play.google.com/store/apps/details?id=br.com.pontoicarus"> Google Play </a> ou<a href="https://apps.apple.com/us/app/icarus/id1556137341"> App Store (Apple)</a>.' },
  },
  {
    image: Process3,
    title: 'Comece agora sua jornada',
    description:
    'Acompanhe, ajuste ou abone os pontos de seus colaboradores em tempo real. Distribua documentos, controle férias ou efetue um fechamento.',
  },
];

export const MONTHLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: '1º Plano: Essencial',
    description: 'Um plano inicial para empresas de pequeno porte que desejam melhorar o controle dos registros de ponto',
    price: 'R$ 49,90',
    priceLabel: 'Valor do plano mensal para equipes pequenas de 1 até 10 colaboradores',
    buttonLabel: 'CRIE SUA CONTA GRATUITAMENTE',
    url: '#cadastroTrial',
    listItems: [
      {
        content: 'Registre Ponto',
      },
      {
        content: 'Faça Ajustes',
      },
      {
        content: 'Faça Fechamentos',
      },
      {
        content: 'Acesse Relatórios *',
      },
      {
        content: 'Notificações'
      },
      {
        content: 'Dashboards'
      },
    ],
  },
  {
    name: '2º Plano: Avançado',
    description: 'Um plano completo para empresas de pequeno porte que desejam otimizar a gestão dos pontos',
    price: 'R$ 85,00',
    freePlan: true,
    priceLabel: 'Valor do plano mensal para equipes pequenas de 1 até 10 colaboradores',
    buttonLabel: 'COMECE A TESTAR GRÁTIS',
    url: '#cadastroTrial',
    listItems: [
      {
        content: 'Reconhecimento facial',
      },
      {
        content: 'Geolocalização',
      },
      {
        content: 'Batida de Ponto offline',
      },
      {
        content: 'Acesso ao Aplicativo Para Tablet/Totens',
      },
      {
        content: 'Distribuição de Documentos e Holerites',
      },
      {
        content: 'Controle de Férias',
      },
    ],
  },
  {
    name: '3º Plano: Avançado',
    description: 'Um plano completo para empresas de médio porte que desejam otimizar a gestão dos pontos',
    price: 'R$ 130,00',
    freePlan: true,
    priceLabel: 'Valor do plano mensal para equipes médias de 11 até 20 colaboradores',
    buttonLabel: 'COMECE A TESTAR GRÁTIS',
    url: '#cadastroTrial',
    listItems: [
      {
        content: 'Reconhecimento facial',
      },
      {
        content: 'Geolocalização',
      },
      {
        content: 'Batida de Ponto offline',
      },
      {
        content: 'Acesso ao Aplicativo Para Tablet/Totens',
      },
      {
        content: 'Distribuição de Documentos e Holerites',
      },
      {
        content: 'Controle de Férias',
      },
    ],
  },
  {
    name: '4º Plano: Avançado',
    description: 'Um plano completo para empresas de grande porte que desejam otimizar a gestão dos pontos',
    price: '',
    freePlan: true,
    priceLabel: 'Para equipes acima de 21 colaboradores',
    buttonLabel: 'FALE COM UM CONSULTOR',
    url: 'https://pontoicarus.com.br/contato',
    listItems: [
      {
        content: 'Reconhecimento facial',
      },
      {
        content: 'Geolocalização',
      },
      {
        content: 'Batida de Ponto offline',
      },
      {
        content: 'Acesso ao Aplicativo Para Tablet/Totens',
      },
      {
        content: 'Distribuição de Documentos e Holerites',
      },
      {
        content: 'Controle de Férias',
      },
    ],
  }
];

export const YEARLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: '1º Plano: Essencial',
    description: 'Um plano inicial para empresas de pequeno porte que desejam melhorar o controle dos registros de ponto',
    price: 'R$ 479,00',
    priceLabel: 'Valor do plano anual para equipes pequenas de 1 até 10 colaboradores',
    buttonLabel: 'CRIE SUA CONTA GRATUITAMENTE',
    url: '#cadastroTrial',
    listItems: [
      {
        content: 'Registre Ponto',
      },
      {
        content: 'Faça Ajustes',
      },
      {
        content: 'Faça Fechamentos',
      },
      {
        content: 'Acesse Relatórios *',
      },
      {
        content: 'Notificações'
      },
      {
        content: 'Dashboards'
      },
    ],
  },
  {
    name: '2º Plano: Avançado',
    description: 'Um plano completo para empresas de pequeno porte que desejam otimizar a gestão dos pontos',
    price: 'R$ 816,00',
    freePlan: true,
    priceLabel: 'Valor do plano anual para equipes pequenas de 1 até 10 colaboradores',
    buttonLabel: 'COMECE A TESTAR GRÁTIS',
    url: '#cadastroTrial',
    listItems: [
      {
        content: 'Reconhecimento facial',
      },
      {
        content: 'Geolocalização',
      },
      {
        content: 'Batida de Ponto offline',
      },
      {
        content: 'Acesso ao Aplicativo Para Tablet/Totens',
      },
      {
        content: 'Distribuição de Documentos e Holerites',
      },
      {
        content: 'Controle de Férias',
      },
    ],
  },
  {
    name: '3º Plano: Avançado',
    description: 'Um plano completo para empresas de médio porte que desejam otimizar a gestão dos pontos',
    price: 'R$ 1248,00',
    freePlan: true,
    priceLabel: 'Valor do plano anual para equipes médias de 11 até 20 colaboradores',
    buttonLabel: 'COMECE A TESTAR GRÁTIS',
    url: '#cadastroTrial',
    listItems: [
      {
        content: 'Reconhecimento facial',
      },
      {
        content: 'Geolocalização',
      },
      {
        content: 'Batida de Ponto offline',
      },
      {
        content: 'Acesso ao Aplicativo Para Tablet/Totens',
      },
      {
        content: 'Distribuição de Documentos e Holerites',
      },
      {
        content: 'Controle de Férias',
      },
    ],
  },
  {
    name: '4º Plano: Avançado',
    description: 'Um plano completo para empresas de grande porte que desejam otimizar a gestão dos pontos',
    price: '',
    freePlan: true,
    priceLabel: 'Para equipes acima de 21 colaboradores',
    buttonLabel: 'FALE COM UM CONSULTOR',
    url: 'https://pontoicarus.com.br/contato',
    listItems: [
      {
        content: 'Reconhecimento facial',
      },
      {
        content: 'Geolocalização',
      },
      {
        content: 'Batida de Ponto offline',
      },
      {
        content: 'Acesso ao Aplicativo Para Tablet/Totens',
      },
      {
        content: 'Distribuição de Documentos e Holerites',
      },
      {
        content: 'Controle de Férias',
      },
    ],
  }
];

export const FAQ_DATA = [
  {
    expend: true,
    title: 'Se o colaborador ficar sem internet, vai conseguir registrar ponto?',
    descriptionGab:
  {__html:'Claro, seu ponto será registrado! Você não precisa se preocupar em estar sempre conectado a internet. <p>O nosso aplicativo para celular possui a funcionalidade que permite ao colaborador bater seu ponto offline. Para isso, basta que seja desativada a wi-fi e os dados móveis (3G ou 4G) do celular. Deste modo, sem conexão com a internet, o colaborador fará o registro do ponto normalmente. <p>Esses pontos registrados offline ficarão armazenados e na próxima vez que o celular conectar-se à internet os dados serão sincronizados. Entre outras informações, no momento da batida do ponto também armazena-se as coordenadas, permitindo ao gestor consultar o local em que o colaborador bateu seu ponto.',}
  },
  {
    title: 'O que são e como funcionam os limites geográficos?',
    descriptionGab:
  {__html:'Além de conseguir visualizar de maneira fácil e descomplicada aonde seus colaboradores estão registrando ponto, também é possível limitar a área para que eles só registrem o ponto a partir de uma determinada localização. <p>Você cadastra o endereço desejado, estabelece um perímetro em metros quadrados ao redor do local aonde será permitido o registro e vincula os seus colaboradores que deverão bater ponto somente dentro desta área determinada (é possível atribuir mais de uma localidade a mesma pessoa). <p>Essas configurações são feitas em poucos passos, de maneira simples e rápida, além de ser muito intuitiva permitindo a visualização do endereço e perímetro pelo Google Maps!<p>01. Acesse o "Menu Ponto" e clique na opção "Limites Geográficos". <p>02. Ao abrir a página da funcionalidade, clique no botão "Cadastrar". <p>03. Ao carregar a página: <br>- Inclua o título desta localização no campo "Descrição". <br>- Digite o endereço desejado no campo "Endereço". <br>- Indique a abrangência (perímetro em m²) no campo "Raio da Área Permitida". <p>04. Confira sua configuração pelo mapa e, se estiver conforme desejado, clique no botão "Salvar". <p>05. Ao salvar o local, um novo botão chamado "Vincular Colaboradores" será exibido na parte inferior da tela. Utilize-o para atribuir este endereço aos seus colaboradores que deverão bater ponto dentro desta área.',}
  },
  {
    title: 'Como consultar seu comprovante de registro do ponto?',
    descriptionGab:
  {__html:'Não se preocupe mais em ficar guardando aqueles bolos de papel de comprovante ou ter medo de perdê-los. Com nosso ponto, eles ficam online e disponíveis para consulta ou download a qualquer momento, você pode baixá-los em PDF ou encaminhá-los para endereços de e-mail. <p>Trata-se de uma solução simples e eficiente que proporciona economia de tempo, dinheiro e também contribui para um mundo mais sustentável, evitando o desperdício de papel e tinta já que não há necessidade de imprimir os comprovantes de registro do ponto de seus colaboradores. <p>Através do app ou pelo seu site de ponto, o colaborador pode entrar com seu usuário e senha para consultar o seu espelho de ponto (lista com os dias trabalhados e suas respectivas entradas e saídas). Ao escolher um dia em específico e acessar detalhes dos registros efetuados na data, conseguirá fazer o download do comprovante.',}
  },
  {
    title: 'Na distribuição de holerites é preciso anexar um arquivo para cada colaborador?',
    descriptionGab:
   {__html:'Chega de se preocupar em separar aquele arquivo gigante com uma lista de contracheques enviado pela sua contabilidade, deixe a nossa solução separar e distribuir os holerites de cada um dos seus colaboradores. Não perca mais tempo e otimize sua rotina com um processo simples e eficiente. <p>01. Acesse o "Menu Manutenção" e clique na opção "Documentos do Colaborador". <p>02. Ao carregar a página na aba “Automágico”: <br>- Selecione a opção "Holerite" no campo “Tipo de Arquivo”. <br>- No campo “Nome do Documento” preencha um título (exemplo: Contracheque de Janeiro). <br>- Faça o upload do arquivo em formato PDF através do botão “Escolher Arquivo”. <p>03. Por fim, clique no botão “Salvar”. <p>Nosso sistema vai pegar este arquivo único e automaticamente vai dividi-lo em diversos arquivos, um para cada holerite de colaborador existente no documento original. Para que esta ação seja executada, é necessário que o nome do colaborador esteja igual tanto no sistema de ponto, quanto no documento anexado. Desta forma, será possível identificar o colaborador corretamente e anexar o contracheque correspondente ao mesmo. <p>04. Após clicar em "Salvar", nosso sistema irá lhe apresentar quantos holerites separou e a quais colaboradores irá atribuí-los. Confira se todos foram identificado como era desejado e clique novamente no botão "Salvar" para efetivar (realmente anexar os holerites na lista de documentos dos colaboradores).'},
  },
  {
    title: 'Vamos dar férias coletivas, vou precisar configurar as férias individualmente?',
    descriptionGab:
   {__html:'Cadastre um mesmo período de férias para diversos colaboradores simultaneamente, uma solução que economiza seu tempo e facilita sua a rotina de trabalho, pois não é preciso abrir e cadastrar um por um. <p>01. Acesse o "Menu Ponto” e clique na opção “Férias/Afastamento em Lote”. <p>02. Ao carregar a página: <br>- No campo "Motivo" selecione a opção "Férias". <br>- Nos campos de "Data", indique o período de início e fim das férias. <br>- Caso seja antecipada a primeira parcela do décimo terceiro, selecione esta opção no campo correspondente. <br>- Se foi vendido algum período das férias, informe a quantidade de dias vendidos no campo "Dias de Abono". <br>- Descreva o motivo do cadastramento no campo "Justificativa" (exemplo: Férias à pedido do colaborador). <br>- Opcional: Anexe um documento ao cadastro destas férias (exemplo: Pedido de férias assinado). <p>03. Desça a página até a tabela “Selecionar Colaboradores a Associar” e selecione os colaboradores que deseja vincular, utilize as setas entre as colunas para adicionar ou remover. <p>04. Por fim, clique no botão "Salvar".'},
  },
];



export const SCREENSHOTS = [
  {
    icon: calendar,
    title: 'Fechamento de Ponto',
    image: Screenshot1,
  },
  {
    icon: clockO,
    title: 'Manutenção de Turno',
    image: Screenshot3,
  },
  {
    icon: copy,
    title: 'Distribuição de Documentos',
    image: Screenshot4,
  },
  {
    icon: plug,
    title: 'Integração Via API',
    image: Screenshot2,
  },  

];
