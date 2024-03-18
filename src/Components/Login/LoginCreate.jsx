import React from 'react'

const LoginCreate = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  
  return (
    <section>
      <h1>Login</h1>
      <form action="">
        <input
          type="text"
          value={username}
          onChange={({target}) => setUsername(target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>
    </section>
  )
}

export default LoginCreate