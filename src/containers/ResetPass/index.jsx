import {
  Container,
  Box,
  BorderLine,
  InputBox,
  LinksBox,
  LinksStyled
} from './styled'
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import { toast } from 'react-toastify'
import { BoxForm } from '../../components/BoxForm'
import { InputForm } from '../../components/InputForm'
import { useAnimationFrame } from 'framer-motion'
import { ErrorMessage } from '../../components/ErrorMessage'

export function ResetPass() {
  const schema = Yup.object().shape({
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha de ter pelo menos 6 digitos'),
    confirmPass: Yup.string().oneOf(
      [Yup.ref('password')],
      'As senhas devem ser iguais'
    )
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const { token } = useParams()
  const navigate = useNavigate()

  const formSubmit = async formData => {
    const { data } = await toast.promise(
      api.post(`reset-password/${token}`, {
        password: formData.password
      }),
      {
        pending: 'Verificando...',
        success: 'Senha alterada',
        error: 'O token está inválido ou expirado'
      }
    )
    setTimeout(() => {
      if (data) {
        navigate('/adm-login')
      }
    }, 500)
  }

  return (
    <BoxForm data-background>
      <form noValidate onSubmit={handleSubmit(formSubmit)}>
        <h2>Redefinir Senha</h2>
        <InputForm err={errors.password?.message}>
          <input type="password" required {...register('password')} />
          <span>Senha</span>
        </InputForm>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>

        <InputForm err={errors.confirmPass?.message}>
          <input type="password" required {...register('confirmPass')} />
          <span>Confirmar Senha</span>
        </InputForm>
        <ErrorMessage>{errors.confirmPass?.message}</ErrorMessage>

        <input type="submit" value="Redefinir" />
      </form>
    </BoxForm>
  )
}
