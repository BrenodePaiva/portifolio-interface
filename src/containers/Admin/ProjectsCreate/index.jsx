import { BoxForm } from '../../../components/BoxForm'
import { InputForm } from '../../../components/InputForm'
import { InputFile } from '../../../components/InputFile'
import { useEffect, useState } from 'react'
import ReactSelect from 'react-select'
import api from '../../../services/api'
import * as Yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Path from '../../../constants/Path'
import { ErrorMessage } from '../../../components/ErrorMessage'
import { TextareaInput } from '../../../components/TextareaInput'
import { SelectForm } from '../../../components/SelectForm'
import { TextareaAutosize } from '@mui/material'

function ProjectsCreate() {
  const [categories, setCategories] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }

    loadCategories()
  }, [])

  const schema = Yup.object().shape({
    name: Yup.string().required('Você não preencheu o campo Nome'),
    description: Yup.string().required('Você não preencheu o campo Descrição'),
    category: Yup.object().required('Você não selecionou uma categoria'),
    link: Yup.string().required('Você não preencheu o campo Link'),
    file: Yup.mixed().test('required', 'Adicione uma imagem', value => {
      return value?.length > 0
    })
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    clearErrors
  } = useForm({ resolver: yupResolver(schema) })

  const formSubmit = async formData => {
    const formatData = new FormData()

    formatData.append('name', formData.name)
    formatData.append('description', formData.description)
    formatData.append('category_id', formData.category.id)
    formatData.append('link', formData.link)
    formatData.append('file', formData.file[0])

    await toast.promise(api.post('projects', formatData), {
      pending: 'Criando novo Projeto...',
      success: 'Projeto criado',
      error: 'Falha ao criar o Projeto'
    })

    setTimeout(() => {
      navigate(Path.projList)
    }, 500)
  }

  const [fileName, setFileName] = useState('Imagem')

  const handleClick = event => {
    if (event.target.files[0]?.name) {
      setFileName(event.target.files[0].name)
      clearErrors('file')
    } else {
      setFileName('Imagem')
    }
  }

  return (
    <BoxForm height="680px">
      <form noValidate onSubmit={handleSubmit(formSubmit)}>
        <h2>Novo Projeto</h2>
        <InputForm data-err={errors.name?.message}>
          <input
            spellCheck={false}
            type="text"
            required
            {...register('name')}
          />
          <span>Nome</span>
        </InputForm>
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <InputForm data-err={errors.link?.message}>
          <input
            spellCheck={false}
            type="text"
            required
            {...register('link')}
          />
          <span>Link do projeto</span>
        </InputForm>
        <ErrorMessage>{errors.link?.message}</ErrorMessage>

        <SelectForm data-err={errors.category?.message}>
          <Controller
            teste={true}
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <div className="select-box" data-err={errors.category?.message}>
                  <ReactSelect
                    {...field}
                    options={categories}
                    getOptionLabel={cat => cat.name}
                    getOptionValue={cat => cat.id}
                    placeholder="Categorias"
                  />
                </div>
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </SelectForm>

        <InputFile value={fileName} data-err={errors.file?.message}>
          <input
            type="file"
            id="upload"
            {...register('file')}
            onChange={handleClick}
          />
        </InputFile>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>

        <TextareaInput data-err={errors.description?.message}>
          <TextareaAutosize
            className="text-area"
            {...register('description')}
            maxRows={4}
            minRows={3}
            placeholder="Descrição"
            spellCheck={false}
          />
        </TextareaInput>
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <input type="submit" value="Criar" />
      </form>
    </BoxForm>
  )
}

export default ProjectsCreate
