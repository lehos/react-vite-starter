import { Button } from 'antd'
import { Form } from 'react-final-form'
import { useHistory } from 'react-router-dom'

import { FormInput } from '@/ui/FormInput'
import * as CS from '@/ui/common'

import * as S from './styles'
// eslint-disable-next-line import/no-named-default
import { default as User } from './user.svg?component'

export function LoginForm() {
  const history = useHistory()

  function submit() {
    history.push('/')
  }

  return (
    <Form
      onSubmit={submit}
      render={({ handleSubmit }) => (
        <S.Form onSubmit={handleSubmit}>
          <S.Header>Вход</S.Header>

          <CS.FormRow>
            <CS.FormLabel>Логин</CS.FormLabel>
            <FormInput name="login" size="large" />
          </CS.FormRow>

          <CS.FormRow>
            <CS.FormLabel>Пароль</CS.FormLabel>
            <FormInput name="password" size="large" />
          </CS.FormRow>

          <CS.FormRow>
            <CS.FormLabel />
            <Button size="large" onClick={submit}>
              Войти
            </Button>
          </CS.FormRow>

          <S.Temp>temp</S.Temp>
          <S.Temp test>temp test</S.Temp>
          <S.Text css={S.testCss}>text</S.Text>
          <S.Text>
            text
            <S.Temp>temp in text</S.Temp>
          </S.Text>

          <User />
        </S.Form>
      )}
    />
  )
}
