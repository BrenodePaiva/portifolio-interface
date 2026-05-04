import { useForm } from 'react-hook-form'
import { LinksBox, LinksStyled } from './styled'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage } from '../../components/ErrorMessage'
import { useUser } from '../../hooks/UserContext'
import { BoxForm } from '../../components/BoxForm'
import { InputForm } from '../../components/InputForm'
import Path from '../../constants/Path'

export function Login() {
  const { putUserData } = useUser()
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    email: Yup.string().email('Este e-mail é invalido'),
    password: Yup.string().required('A senha é obrigatoria')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const formSubmit = async formData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: formData.email,
        password: formData.password
      }),
      {
        pending: 'Verificando dados',
        success: 'Seja Bem-Vindo',
        error: 'E-mail ou senha invalido'
      }
    )

    putUserData(data)

    setTimeout(() => {
      if (data) {
        navigate(Path.projList)
      }
    }, 500)
  }

  return (
    <BoxForm data-background>
      <form noValidate onSubmit={handleSubmit(formSubmit)}>
        <h2>Sign in</h2>
        <InputForm err={errors.email?.message}>
          <input type="text" required="required" {...register('email')} />
          <span>E-mail</span>
        </InputForm>
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <InputForm err={errors.password?.message}>
          <input
            type="password"
            required="required"
            {...register('password')}
          />
          <span>Senha</span>
        </InputForm>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>

        <LinksBox>
          <LinksStyled to="/forgotpass">Esqueceu sua senha ?</LinksStyled>
        </LinksBox>

        <input type="submit" value="Login" />
      </form>
    </BoxForm>
  )
}
