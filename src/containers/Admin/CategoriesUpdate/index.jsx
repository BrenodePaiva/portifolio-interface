import { useLocation, useNavigate } from 'react-router-dom'
import { BoxForm } from '../../../components/BoxForm'
import { InputForm } from '../../../components/InputForm'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../../services/api'
import { toast } from 'react-toastify'
import { ErrorMessage } from '../../../components/ErrorMessage'
import Path from '../../../constants/Path'

function CategoriesUpdate() {
  const location = useLocation()
  const category = location.state?.dados
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string().required('Você não preencheu o campo Nome')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const submitForm = async formData => {
    try {
      await toast.promise(
        api.put(`categories/${category.id}`, { name: formData.name }),
        {
          pending: 'Atualizando categoria...',
          success: 'Categoria atualizada',
          error: 'Falha ao atualizar a Categoria'
        }
      )
      setTimeout(() => {
        navigate(Path.catList)
      }, 500)
    } catch (error) {
      toast.error(`Erro: ${error.response?.data?.error || 'Erro inesperado'}`)
    }
  }

  return (
    <BoxForm>
      <form noValidate onSubmit={handleSubmit(submitForm)}>
        <h2>Atualizar Categoria</h2>
        <InputForm data-err={errors.name?.message}>
          <input
            type="text"
            required
            spellCheck={false}
            {...register('name')}
            defaultValue={category.name}
          />
          <span>Nome</span>
        </InputForm>
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <input type="submit" value="Atualizar" />
      </form>
    </BoxForm>
  )
}

export default CategoriesUpdate
