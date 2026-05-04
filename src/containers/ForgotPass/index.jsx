import { useForm } from 'react-hook-form'
import { BoxForm } from '../../components/BoxForm'
import { InputForm } from '../../components/InputForm'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '../../components/ErrorMessage'
import api from '../../services/api'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { LoadingSpinner } from '../../components/LoadingSpinner'

export function ForgotPass() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required('O e-mail é obrigatorio')
      .email('Este e-mail é invalido')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const [loading, setLoading] = useState(false)
  const [statusCode, setStatusCode] = useState()

  const formSubmit = async formData => {
    setLoading(true)
    const { status } = await api.post(
      'forgot-pass',
      {
        email: formData.email
      },
      { validateStatus: () => true }
    )

    setStatusCode(status)
    setLoading(false)
  }

  if (!statusCode) {
    return (
      <BoxForm data-background>
        {!loading && (
          <form noValidate onSubmit={handleSubmit(formSubmit)}>
            <h2>Esqueceu a senha</h2>
            <InputForm err={errors.email?.message}>
              <input type="text" required="required" {...register('email')} />
              <span>E-mail</span>
            </InputForm>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <input type="submit" value="Enviar" />
          </form>
        )}
        {loading && (
          <form>
            <div style={{ margin: 'auto' }}>
              <LoadingSpinner size={100} />
            </div>
          </form>
        )}
      </BoxForm>
    )
  } else if (statusCode == 404 || statusCode == 200) {
    return (
      <>
        <BoxForm background>
          <form>
            <h2>E-mail enviado</h2>
            <p className="text">
              Um e-mail com instruções para trocar sua senha foi envidado
            </p>
          </form>
        </BoxForm>
      </>
    )
  } else {
    toast.error('Algo deu errado, tente novamente mais tarde')
  }
}
