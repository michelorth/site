import loadable from '@loadable/component';
import { CircularProgress, FormControl, InputLabel, Select, TextField } from '@material-ui/core';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from "yup";
import NewsletterWrapper, { ContactFormWrapper } from './newsletter.style';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

const Box = loadable(() => import('common/components/Box'));
const Button = loadable(() => import('common/components/Button'));
const Heading = loadable(() => import('common/components/Heading'));
const Text = loadable(() => import('common/components/Text'));
const Container = loadable(() => import('common/components/UI/Container'));

function undoMask(valor) {
  if (valor === undefined || valor === null) {
    return;
  }
  return valor.replace(/\D/g, '');
}


Yup.date().default(null);

Yup.setLocale({
    mixed: {
        default: 'é inválido',
        required: 'é um campo obrigatório',
        oneOf: 'deve ser um dos seguintes valores: ${values}',
        notOneOf: 'não pode ser um dos seguintes valores: ${values}',
    },
    string: {
        length: 'deve ter exatamente ${length} caracteres',
        min: 'deve ter pelo menos ${min} caracteres',
        max: 'deve ter no máximo ${max} caracteres',
        email: 'tem o formato de e-mail inválido',
        url: 'deve ter um formato de URL válida',
        trim: 'não deve conter espaços no início ou no fim.',
        lowercase: 'deve estar em maiúsculo',
        uppercase: 'deve estar em minúsculo',
    },
    number: {
        min: 'deve ser no mínimo ${min}',
        max: 'deve ser no máximo ${max}',
        lessThan: 'deve ser menor que ${less}',
        moreThan: 'deve ser maior que ${more}',
        notEqual: 'não pode ser igual à ${notEqual}',
        positive: 'deve ser um número posítivo',
        negative: 'deve ser um número negativo',
        integer: 'deve ser um número inteiro',
    },
    date: {
        min: 'deve ser maior que a data ${min}',
        max: 'deve ser menor que a data ${max}',
        typeError: 'formato de data inválida',
    },
    array: {
        min: 'deve ter no mínimo ${min} itens',
        max: 'deve ter no máximo ${max} itens',
    },
});


const validationSchema = Yup.object().shape({
  nomeEmpresa: Yup.string().required().max(255).min(5).nullable(),
  numeroColaboradores: Yup.string().required().max(100).min(1).nullable(),
  email: Yup.string().required().email().nullable(),
  telefone: Yup.string().min(10).required().nullable(),
  nomeContato: Yup.string().required().required().max(255).min(5).nullable()
});


const Newsletter = ({
  sectionWrapper,
  textArea,
  buttonArea,
  buttonStyle,
  title,
  description,
}) => {

  const [carregando, setCarregando] = useState(false);

  const formik = useFormik({
    initialValues: {
      nomeEmpresa: undefined,
      numeroColaboradores: undefined,
      email: undefined,
      telefone: undefined,
      nomeContato: undefined
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      novoLead(values)
    }
  });
 
  function gtag_report_conversion() {
   
    

  }

  const novoLead = (values, resetForm) => {
    
    const instance = axios.create({
      timeout: 10000
    });

    const vo = {
      nomeEmpresa: values.nomeEmpresa,
      numeroColaboradores: values.numeroColaboradores,
      email: values.email,
      telefone: undoMask(values.telefone),
      nomeContato: values.nomeContato      
    }

    setCarregando(true);

    instance.defaults.headers.post['Content-Type'] = 'application/json; charset=utf8';
    return instance.post('https://backendicarus.pontoicarus.com.br/trial/newLead', JSON.stringify(vo))
        .then(() => {
          alert('Obrigado, entraremos em contato o mais rápido possível');
        }).catch((error) => {
          if (error.response === undefined) {
            alert('Tivemos um problema na conexão entre os servidores. Tente novamente mais tarde!');
            gtag_report_conversion();
          }          
      
          if (error.response && (error.response.status === 400) && error.response.data !== undefined && error.response.data.message !== undefined) {
            alert(error.response.data.message);
          }
      
          if (error.response && (error.response.status === 500 || error.response.status === 404 )) {
            alert('Caso o erro persista, entre em contato com a administrador do sistema');
          }
        })
        .finally(() => {
          setCarregando(false)          
        });

  }

  return (
    <Box {...sectionWrapper} as="section">
      <Container>
        <NewsletterWrapper>
          <Box {...textArea}>
            <Heading content="Quero Saber Mais Sobre o Sistema de Ponto Eletrônico" {...title} />
            <Text
              content="Um de nossos especialistas pode lhe auxiliar ainda mais neste processo de descomplicar e otimizar o registro e o controle com nosso sistema e aplicativo de ponto eletrônico."
              {...description}
            />
            <br/>
            <Text
              content="De asas ao seu RH, descomplique o registro e o controle de ponto com o sistema de ponto eletrônico da Ponto Icarus"
              {...description}
            />
            <br/>
            <Text
              content="Não se preocupe, nós também odiamos spam. Prometemos não encher sua caixa de entrada 🙂"
              {...description}
            />
          </Box>


          <form onSubmit={formik.handleSubmit}>
                      
                   
          <Box {...buttonArea}>
            <ContactFormWrapper>
                
                <TextField label="Nome da Empresa" 
                    id="nomeEmpresa"
                    fullWidth 
                    required
                    variant="filled"
                    value={formik.values.nomeEmpresa}
                    error={Boolean(formik.touched.nomeEmpresa && formik.errors.nomeEmpresa)}
                    helperText={formik.touched.nomeEmpresa && formik.errors.nomeEmpresa}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange} />

            </ContactFormWrapper>
            <Box my={5} />
            <ContactFormWrapper>

                <TextField label="Seu Nome" 
                    id="nomeContato"
                    fullWidth 
                    variant="filled"  
                    required                    
                    value={formik.values.nomeContato}
                    error={Boolean(formik.touched.nomeContato && formik.errors.nomeContato)}
                    helperText={formik.touched.nomeContato && formik.errors.nomeContato}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}/>
            </ContactFormWrapper>
            <Box my={5} />
            <ContactFormWrapper>
            
                <FormControl fullWidth required>
                  <InputLabel style={{marginLeft: 15}} id="demo-simple-select-label">Número de Colaboradores</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="filled"                    
                    value={formik.values.numeroColaboradores}
                    error={Boolean(formik.touched.numeroColaboradores && formik.errors.numeroColaboradores)}
                    helperText={formik.touched.numeroColaboradores && formik.errors.numeroColaboradores}
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.setFieldValue('numeroColaboradores', e.target.value, true)
                  }}
                    native
                  >
                    <option value={undefined}>Selecione</option>
                    <option value={'1 a 10 colaboradores'}>1 a 10</option>
                    <option value={'11 a 20 colaboradores'}>11 a 20</option>
                    <option value={'21 a 50 colaboradores'}>21 a 50</option>
                    <option value={'51 a 100 colaboradores'}>51 a 100</option>
                    <option value={'acima de 100 colaboradores'}>acima de 100</option>
                  </Select>
                </FormControl>
             
            </ContactFormWrapper>
            
            <Box my={5} />
            <ContactFormWrapper>

                <TextField label="Email" 
                    id="email"
                    fullWidth 
                    variant="filled"   
                    required                   
                    value={formik.values.email}
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}/>
             
            </ContactFormWrapper>
            <Box my={5} />
            <ContactFormWrapper>

            <InputMask
                    mask="(99) 9999-99999"
                    disabled={false}
                    id="telefone"
                    maskChar=" "                                       
                    value={formik.values.telefone}
                    onChange={(e) => {
                      formik.setFieldValue('telefone', undoMask(e.target.value), true)
                    }}
                    onBlur={formik.handleBlur}
                    >
                    {() => <TextField variant="filled"                     
                                fullWidth 
                                required
                                error={Boolean(formik.touched.telefone && formik.errors.telefone)}
                                helperText={formik.touched.telefone && formik.errors.telefone}
                                label="Whatsapp/Telefone" />}
                </InputMask>

             
            </ContactFormWrapper>

            <Box my={5} />
            {carregando ? <Box display="flex" justifyContent="center" my={6}>
                              <CircularProgress size={25} style={{ color: '#62ca99' }} />
                          </Box> :
            <Button {...buttonStyle} title="SOLICITAR CONTATO    " type="submit" />
            }
          </Box>
        </form>

        </NewsletterWrapper>
      </Container>
    </Box>
  );
};

Newsletter.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
};

Newsletter.defaultProps = {
  sectionWrapper: {},
  textArea: {
    mb: ['40px', '40px', '40px', '0', '0'],
    pr: ['0', '0', '0', '80px', '100px'],
  },
  title: {
    fontSize: ['18px', '20px', '22px', '24px', '26px'],
    fontWeight: '500',
    color: '#fff',
    lineHeight: '1.34',
    mb: ['14px', '14px', '14px', '14px', '13px'],
    textAlign: ['center', 'center', 'center', 'left', 'left'],
    letterSpacing: '-0.025em',
  },
  description: {
    fontSize: ['14px', '14px'],
    fontWeight: '400',
    color: '#fefefe',
    lineHeight: '1.7',
    mb: 0,
    textAlign: ['center', 'center', 'center', 'left', 'left'],
  },
  buttonArea: {
    zIndex: 1,
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    pl: '30px',
    pr: '30px',
    colors: 'secondaryWithBg',
    color: '#03103b',
  },
};

export default Newsletter;
