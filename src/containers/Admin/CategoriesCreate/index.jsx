import { BoxForm } from '../../../components/BoxForm'
import { InputForm } from '../../../components/InputForm'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import { ErrorMessage } from '../../../components/ErrorMessage'
import { useNavigate } from 'react-router-dom'
import Path from '../../../constants/Path'

function CategoriesCreate() {
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required('Você não preencheu o campo Nome')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const formSubmit = async formData => {
    try {
      await toast.promise(api.post('categories', { name: formData.name }), {
        pending: 'Criando Categoria...',
        success: 'Categoria criada',
        error: 'Falha ao criar a Categoria '
      })

      setTimeout(() => {
        navigate(Path.catList)
      }, 500)
    } catch (error) {
      toast.error(`Erro: ${error.response?.data?.error || 'Erro inesperado'}`)
    }
  }

  return (
    <BoxForm>
      <form noValidate onSubmit={handleSubmit(formSubmit)}>
        <h2>Nova Categoria</h2>
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

        <input type="submit" value="Criar" />
      </form>
    </BoxForm>
  )
}

export default CategoriesCreate
