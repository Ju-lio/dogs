import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input'
import Button from '../Button'
import useForm from '../../Hooks/useForm'
import { TOKEN_POST, USER_GET } from '../../api'
import { UserContext } from '../../userContext'

const LoginForm = () => {
  const username = useForm('email')
  const password = useForm()

  const { userLogin } = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()
    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }  

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          name='username'
          label='Usuário'
          type='text'
          {...username}
          />
        <Input
          name='password'
          label='Senha'
          type='password'
          {...password}
        />
        <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Criar conta</Link>
    </section>
  )
}

export default LoginForm