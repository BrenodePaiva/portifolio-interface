import { BoxForm } from '../../../components/BoxForm'
import { InputForm } from '../../../components/InputForm'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import { ErrorMessage } from '../../../components/ErrorMessage'
import { useUser } from '../../../hooks/UserContext'
import { useNavigate } from 'react-router-dom'

function UserUpdate() {
  const { logout, userData } = useUser()
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    currentpass: Yup.string()
      .required('A senha atual é necessária')
      .min(6, 'A senha deve ter pelo menos 6 caracteres'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 caracteres'),
    confirmPass: Yup.string()
      .required('Confirmar a senha é obrigatório')
      .oneOf([Yup.ref('password')], 'As senhas não corresponde')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const formSubmit = async formData => {
    try {
      await toast.promise(
        api.put(`users/${userData.id}`, formData, {
          headers: { 'Content-Type': 'application/json' }
        }),
        {
          pending: 'Atualizando Usuário...',
          success: 'Usuário atualizado',
          error: 'Falha ao atualizar o Usuário '
        }
      )

      setTimeout(() => {
        logout()
        navigate('/adm-login')
      }, 500)
    } catch (error) {
      toast.error(`Erro: ${error.response?.data?.message || 'Erro inesperado'}`)
    }
  }

  return (
    <BoxForm height="500px">
      <form noValidate onSubmit={handleSubmit(formSubmit)}>
        <h2>Alterar senha</h2>
        <InputForm data-err={errors.currentpass?.message}>
          <input
            spellCheck={false}
            type="text"
            required
            {...register('currentpass')}
          />
          <span>Senha atual</span>
        </InputForm>
        <ErrorMessage>{errors.currentpass?.message}</ErrorMessage>

        <InputForm data-err={errors.password?.message}>
          <input
            spellCheck={false}
            type="password"
            required
            {...register('password')}
          />
          <span>Senha nova</span>
        </InputForm>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>

        <InputForm data-err={errors.confirmPass?.message}>
          <input
            spellCheck={false}
            type="password"
            required
            {...register('confirmPass')}
          />
          <span>Confirmar senha nova</span>
        </InputForm>
        <ErrorMessage>{errors.confirmPass?.message}</ErrorMessage>

        <input type="submit" value="Atualizar" />
      </form>
    </BoxForm>
  )
}

export default UserUpdate
