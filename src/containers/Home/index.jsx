import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import Eu from '../../assets/perfil-sorri.png'

import SkillBarProgress from '../../components/SkillBarProgress'
import { fadeIn } from '../../services/framerMotion'
import {
  AboutSection,
  ArraowStyled,
  BoxAbout,
  BoxHome,
  BoxProject,
  Button,
  CategoryButton,
  CategoryMenu,
  ContactSection,
  Container,
  ContentProject,
  GitHubStyled,
  HeaderPage,
  Input,
  InputBox,
  LeftPage,
  LinkedinStyled,
  LinkSocial,
  LinkStyled,
  NavMobile,
  NavPage,
  PaginationBox,
  ProgreBar,
  Section,
  ServiceSection,
  SocialHome,
  TexteArea,
  TextProjetc,
  YouEmail,
  YouName
} from './styled'
import api from '../../services/api'
import { ErrorMessage } from '../../components/ErrorMessage'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import Path from '../../constants/Path'
import { Link } from 'react-router-dom'

export function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('header nav a')

    window.onscroll = () => {
      sections.forEach(sec => {
        const top = window.scrollY
        const offset = sec.offsetTop - 165
        const height = sec.offsetHeight
        const id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active')
            document
              .querySelector('header nav a[href*=' + id + ']')
              .classList.add('active')
          })
        }
      })
    }
  }, [])

  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)
  const [projects, setProjects] = useState([])
  const [pagination, setPagination] = useState()
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const addcat = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(addcat)
    }

    loadCategories()
  }, [])

  const setActive = id => {
    setActiveCategory(id)
  }

  useEffect(() => {
    async function loadProjects() {
      const { data } = await api.get(
        `projects?page=${page}&cat=${activeCategory}`
      )

      setProjects(data.projects)
      setPagination(data.pagination)
    }

    loadProjects()
  }, [page, activeCategory])

  const handleChange = (event, value) => {
    setPage(value)
  }

  const [toggleIcon, setToggleIcon] = useState(false)

  function navToggle() {
    !toggleIcon ? setToggleIcon(true) : setToggleIcon(false)
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Você não preencheu o campo Nome'),
    email: Yup.string()
      .required('Você não preencheu o campo E-mail')
      .email('Esse e-mail não é válido'),
    subject: Yup.string().required('Você não preencheu o campo Assunto'),
    message: Yup.string().required('Você não preencheu o campo Menssagem')
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    await toast.promise(
      api.post('contact-form', data, {
        headers: { 'Content-Type': 'application/json' }
      }),
      {
        pending: 'Enviando Formulário...',
        success: 'Formulário enviado',
        error: 'Erro ao enviar o Formulário'
      }
    )

    reset()
  }

  return (
    <Container>
      <HeaderPage>
        <LeftPage>
          <h1 style={{ color: '#fff' }}>Portifólio</h1>
        </LeftPage>

        <NavPage open={toggleIcon}>
          <a href="#home" className="active">
            Início
          </a>

          <a href="#about">Sobre</a>

          <a href="#projects">Projetos</a>

          <a href="#contact">Contato</a>

          <span></span>
        </NavPage>

        <NavMobile onClick={navToggle} data-is-toggle={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </NavMobile>
      </HeaderPage>

      <Section id="home">
        <BoxHome>
          <motion.div
            className="text-home"
            variants={fadeIn('down', 0.2, 0)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h3>
              Olá, sou <Link to={Path.projList}>Breno</Link> de Paiva.
            </h3>
            <h4>Um programador Full Stack</h4>
            <p>
              Trabalho com experiências do usuário, interfaces intuitivas e
              sistemas eficientes.
            </p>
          </motion.div>

          <SocialHome>
            <LinkSocial>
              <motion.div
                variants={fadeIn('left', 0.8, 0)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.5 }}
              >
                <LinkedinStyled />
              </motion.div>
            </LinkSocial>
            <LinkSocial>
              <motion.div
                variants={fadeIn('left', 1.2, 0)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.5 }}
              >
                <GitHubStyled />
              </motion.div>
            </LinkSocial>
          </SocialHome>
        </BoxHome>
      </Section>

      <Section id="about">
        <motion.div
          variants={fadeIn('down', 0, 0)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Sobre Mim</h2>
        </motion.div>

        <AboutSection>
          <motion.div
            variants={fadeIn('right', 0.2, 0)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
          >
            <BoxAbout>
              <img src={Eu} />

              <p>
                Olá! Sou desenvolvedor Full Stack, com experiência em HTML, CSS,
                JavaScript e React. Gosto de criar interfaces, responsivas e
                acessíveis. Procuro otimizar ao máximo meus códigos, com base no
                meu conhecimento, sempre atento aos detalhes e às boas práticas
                de programação.
              </p>
            </BoxAbout>
          </motion.div>

          <ProgreBar>
            <div>
              <SkillBarProgress title={'HTML'} porcent={'90%'} />
              <SkillBarProgress title={'HTML'} porcent={'90%'} />
              <SkillBarProgress title={'HTML'} porcent={'50%'} />
              <SkillBarProgress title={'HTML'} porcent={'90%'} />
            </div>
          </ProgreBar>
        </AboutSection>
      </Section>

      <Section id="projects">
        <motion.div
          variants={fadeIn('down', 0, 0)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Meus Projetos</h2>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.2, 0)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true }}
        >
          <CategoryMenu>
            {categories.map(cat => (
              <CategoryButton
                key={cat.id}
                onClick={() => setActive(cat.id)}
                data-is-active={activeCategory === cat.id}
              >
                {cat.name}
              </CategoryButton>
            ))}
          </CategoryMenu>
        </motion.div>

        <ServiceSection>
          <ContentProject>
            {projects.map(proj => (
              <motion.li
                variants={fadeIn('right', 0.5, 0)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.3 }}
                key={proj.id}
              >
                <BoxProject>
                  <img src={proj.url} />
                  <TextProjetc>
                    <h3>{proj.name}</h3>
                    <p>{proj.description}</p>
                    <LinkStyled
                      to={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>Ver projeto</p>
                      <ArraowStyled />
                    </LinkStyled>
                  </TextProjetc>
                </BoxProject>
              </motion.li>
            ))}
          </ContentProject>
          <motion.div
            variants={fadeIn('right', 0.5, 0)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
          >
            <PaginationBox>
              <Stack spacing={2}>
                <Pagination
                  count={pagination?.last_page}
                  color="primary"
                  onChange={handleChange}
                />
              </Stack>
            </PaginationBox>
          </motion.div>
        </ServiceSection>
      </Section>

      <Section id="contact">
        <motion.div
          variants={fadeIn('down', 0, 0)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Contato</h2>
        </motion.div>

        <ContactSection>
          <motion.form
            variants={fadeIn('up', 0.2, 0)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputBox>
              <YouName />
              <Input
                spellCheck={false}
                type="text"
                placeholder="Nome completo"
                {...register('name')}
              />
            </InputBox>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>

            <InputBox>
              <YouEmail />
              <Input
                spellCheck={false}
                type="email"
                placeholder="Digite seu E-mail"
                {...register('email')}
              />
            </InputBox>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
            <InputBox>
              <Input
                spellCheck={false}
                type="text"
                placeholder="Digite o Assunto"
                {...register('subject')}
              />
            </InputBox>
            <ErrorMessage>{errors.subject?.message}</ErrorMessage>

            <TexteArea
              spellCheck={false}
              placeholder="Sua mensagem.. "
              {...register('message')}
            ></TexteArea>
            <ErrorMessage>{errors.message?.message}</ErrorMessage>

            <Button>Enviar</Button>
          </motion.form>
        </ContactSection>
      </Section>
    </Container>
  )
}
