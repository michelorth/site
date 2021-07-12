import loadable from '@loadable/component';
import { Button, Checkbox, CircularProgress, FormControl, InputLabel, Select, TextField } from '@material-ui/core';
import axios from 'axios';
import VendorLogos from 'common/assets/image/saasModern/icarus_logomarca_psainfo.webp';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import * as Yup from "yup";

const Box = loadable(() => import('common/components/Box'));
const Heading = loadable(() => import('common/components/Heading'));
const Image = loadable(() => import('common/components/Image'));
const Container = loadable(() => import('common/components/UI/Container'));

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

function gtag_report_conversion() {

}

function redirect(token){
  window.location.replace(`https://web.pontoicarus.com.br/auth/posCadastro/${token}`)
}

const TrialSection = React.memo(({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
  btnStyle,
  outlineBtnStyle,
  buttonWrapper,
  trial = true,
  showLogomarca = true
}) => {
 
  let formik = undefined;
  
  
  if(trial) {

    formik = useFormik({
      initialValues: {
        nomeEmpresa: undefined,
        numeroColaboradores: undefined,
        email: undefined,
        telefone: undefined,
        nomeContato: undefined,
        senha: undefined,
        concordou: false
      },
      validationSchema: Yup.object().shape({
        nomeEmpresa: Yup.string().required().max(255).min(5).nullable(),
        numeroColaboradores: Yup.string().required().max(100).min(1).nullable(),
        email: Yup.string().required().email().nullable(),
        telefone: Yup.string().min(10).required().nullable(),
        nomeContato: Yup.string().required().required().max(255).min(5).nullable(),
        senha: Yup.string().required().required().max(255).min(6).nullable()
      }),
      onSubmit: values => {
        novoCadastro(values)
      }
    });

  } else {

    formik = useFormik({
      initialValues: {
        nomeEmpresa: undefined,
        numeroColaboradores: undefined,
        email: undefined,
        telefone: undefined,
        nomeContato: undefined,
        senha: undefined,
        concordou: false
      },
      validationSchema: Yup.object().shape({
        nomeEmpresa: Yup.string().required().max(255).min(5).nullable(),
        email: Yup.string().required().email().nullable(),
        telefone: Yup.string().min(10).required().nullable(),
        nomeContato: Yup.string().required().required().max(255).min(5).nullable(),
        senha: Yup.string().required().required().max(255).min(6).nullable()
      }),
      onSubmit: values => {
        novoCadastro(values)
      }
    });

  }

  const [carregando, setCarregando] = useState(false);
  

  function undoMask(valor) {
    if (valor === undefined || valor === null) {
      return;
    }
    return valor.replace(/\D/g, '');
  }

  const novoCadastro = (values) => {
    

      setCarregando(true);

      const instance = axios.create({
        timeout: 10000
      });


      const vo = {
        nomeEmpresa: values.nomeEmpresa,
        numeroColaboradores: trial ? values.numeroColaboradores : undefined,
        email: values.email,
        telefone: undoMask(values.telefone),
        nomeContato: values.nomeContato,
        senha: values.senha,
        aceiteTermos: values.concordou,
        trial: trial
      }
      
      instance.defaults.headers.post['Content-Type'] = 'application/json; charset=utf8';
      return instance.post('https://backendicarus.pontoicarus.com.br/trial', JSON.stringify(vo))
          .then((response) => {
            gtag_report_conversion();
            redirect(response.data);
          }).catch((error) => {
            if (error.response === undefined) {
              alert('Tivemos um problema na conexão entre os servidores. Tente novamente mais tarde!');
            }          
        
            if (error.response && (error.response.status === 400) && error.response.data !== undefined && error.response.data.message !== undefined) {
              alert(error.response.data.message);
            }
        
            if (error.response && (error.response.status === 500 || error.response.status === 404 )) {
              alert('Caso o erro persista, entre em contato com a administrador do sistema');
            }
          })
          .finally(() => setCarregando(false));

    }

  return (
    <Box {...sectionWrapper} id="cadastroTrial">
      <Container>
        <Box {...row}>
        {showLogomarca &&  <Box {...imageArea}>
              <Image {...ImageOne} src={VendorLogos} alt="Icarus Logomarca"            
                  width={'60%'}
                  height={'60%'}
            />
          </Box>}
          <Box {...textArea}>
          {trial &&
            <Heading
              {...title}
              content="Comece Sua Avaliação Gratuita de 14 Dias!"
            />
          }

        <form onSubmit={formik.handleSubmit}>


            <Box>
                <TextField label="Nome da Empresa" 
                  id="nomeEmpresa"
                  fullWidth 
                  variant="filled"                   
                  value={formik.values.nomeEmpresa}
                  error={Boolean(formik.touched.nomeEmpresa && formik.errors.nomeEmpresa)}
                  helperText={formik.touched.nomeEmpresa && formik.errors.nomeEmpresa}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}/>
            
            </Box>

            <Box style={{marginTop: 20}}>
                <TextField label="Seu Nome" 
                  id="nomeContato"
                  fullWidth 
                  variant="filled"                   
                  value={formik.values.nomeContato}
                  error={Boolean(formik.touched.nomeContato && formik.errors.nomeContato)}
                  helperText={formik.touched.nomeContato && formik.errors.nomeContato}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}/>
            
            </Box>
            
            {trial &&
                <Box style={{marginTop: 20}}>
                    <FormControl fullWidth>
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
                </Box>
          }
            <Box style={{marginTop: 20}}>
                  <TextField id="email" name="email" label="E-mail/Login" fullWidth variant="filled"
                    value={formik.values.email}
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}/>
            
            </Box>
            <Box style={{marginTop: 20}}>
                
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
                                error={Boolean(formik.touched.telefone && formik.errors.telefone)}
                                helperText={formik.touched.telefone && formik.errors.telefone}
                                label="Whatsapp/Telefone" />}
                </InputMask>

            </Box>
            <Box style={{marginTop: 20}}>
                  <TextField label="Senha" id="senha" fullWidth variant="filled"  type='password' passwordShowHide toggle  
                  value={formik.values.senha}
                  error={Boolean(formik.touched.senha && formik.errors.senha)}
                  helperText={formik.touched.senha && formik.errors.senha}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange} />
            </Box>
           <div>
                <Box style={{marginTop: 20}}>
                  <Checkbox id="aceiteTermos" name="checkedD"                   
                    error={Boolean(formik.touched.concordou && formik.errors.concordou)}
                    helperText={formik.touched.concordou && formik.errors.concordou}
                    onBlur={formik.handleBlur}
                    value={formik.values.concordou}
                    onChange={(e) => {
                      formik.setFieldValue('concordou', e.target.checked, true)
                    }}
                  /> Concordo com os <a target="_blank" rel="noreferrer" href="https://material.pontoicarus.com.br/termos-de-uso">Termos e Condições</a> para utilização do software
                </Box>
           </div>
                  
            <Box {...buttonWrapper} style={{marginTop: 10}}>
              
              {carregando ? <Box display="flex" justifyContent="center" my={6}>
                              <CircularProgress size={25} style={{ color: '#62ca99' }} />
                          </Box> :

              <Button title="COMEÇAR" variant="contained" disabled={!formik.values.concordou} type="submit" color="primary">
                COMEÇAR
              </Button>
            }
            </Box>

          </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
});

TrialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object,
};

TrialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    className: 'trial-section',
    pt: ['20px', '40px', '60px', '80px'],
    pb: ['0px', '0px', '0px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textArea: {
    width: ['100%', '100%', '80%', '65%'],
  },
  imageArea: {
    width: ['100%', '100%', '65%'],
    mb: ['35px', '35px', '40px', '40px'],
    flexBox: true,
    justifyContent: 'center',
  },
  title: {
    fontSize: ['28px', '32px', '36px', '42px', '48px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25',
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: '#5c636c',
    lineHeight: '2.1',
    textAlign: 'center',
    mb: ['35px', '35px', '40px', '60px'],
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'secondaryWithBg',
    pl: ['15px', '30px'],
    pr: ['15px', '30px'],
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    colors: 'secondary',
  },
};

export default TrialSection;
