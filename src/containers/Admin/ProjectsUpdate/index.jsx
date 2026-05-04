import { useLocation, useNavigate } from 'react-router-dom'
import { BoxForm } from '../../../components/BoxForm'
import { InputForm } from '../../../components/InputForm'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { useEffect, useState } from 'react'
import ReactSelect from 'react-select'
import api from '../../../services/api'
import * as Yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import Path from '../../../constants/Path'
import { InputFile } from '../../../components/InputFile'
import { ErrorMessage } from '../../../components/ErrorMessage'
import { SelectForm } from '../../../components/SelectForm'
import { TextareaInput } from '../../../components/TextareaInput'

function ProjectsUpdate() {
  const location = useLocation()
  const navigate = useNavigate()
  const [categories, setCategorires] = useState()
  const project = location.state?.dados

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategorires(data)
    }

    loadCategories()
  }, [])

  const schema = Yup.object().shape({
    name: Yup.string().required('Preencha o campo Nome'),
    description: Yup.string().required('Preencha o campo Descrição'),
    link: Yup.string().required('Preencha o campo do Link'),
    category: Yup.object()
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const submitForm = async formData => {
    const formatData = new FormData()
    formatData.append('name', formData.name),
      formatData.append('description', formData.description),
      formatData.append('category_id', formData.category.id),
      formatData.append('link', formData.link)
    formatData.append('file', formData.file[0])

    await toast.promise(api.put(`projects/${project.id}`, formatData), {
      pending: 'Editando Porjecto....',
      success: 'Projeto editado',
      error: 'Falha ao editar o Projeto'
    })

    setTimeout(() => {
      navigate(Path.projList)
    }, 500)
  }

  const [fileName, setFileName] = useState(project.path)

  const handleClick = event => {
    if (event.target.files[0]?.name) {
      setFileName(event.target.files[0].name)
    } else {
      setFileName(project.path)
    }
  }

  return (
    <BoxForm height="680px">
      <form noValidate onSubmit={handleSubmit(submitForm)}>
        <h2>Atualizar Projeto</h2>

        <InputForm data-err={errors.name?.message}>
          <input
            type="text"
            required
            defaultValue={project.name}
            {...register('name')}
            spellCheck={false}
          />
          <span>Nome</span>
        </InputForm>
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <InputForm data-err={errors.link?.message}>
          <input
            type="text"
            required
            defaultValue={project.link}
            spellCheck={false}
            {...register('link')}
          />
          <span>Link do projeto</span>
        </InputForm>
        <ErrorMessage>{errors.link?.message}</ErrorMessage>

        <SelectForm>
          <Controller
            name="category"
            control={control}
            defaultValue={project.category}
            render={({ field }) => {
              return (
                <div className="select-box">
                  <ReactSelect
                    {...field}
                    options={categories}
                    getOptionLabel={cat => cat.name}
                    getOptionValue={cat => cat.id}
                    defaultValue={project?.category}
                  />
                </div>
              )
            }}
          ></Controller>
        </SelectForm>

        <InputFile value={fileName}>
          <input
            type="file"
            id="upload"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={handleClick}
          />
        </InputFile>

        <TextareaInput data-err={errors.description?.message}>
          <TextareaAutosize
            className="text-area"
            {...register('description')}
            maxRows={4}
            minRows={3}
            placeholder="Descrição"
            spellCheck={false}
            defaultValue={project.description}
          />
        </TextareaInput>
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <input type="submit" value="Atualizar" />
      </form>
    </BoxForm>
  )
}

export default ProjectsUpdate
