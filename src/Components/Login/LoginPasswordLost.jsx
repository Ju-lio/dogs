import React from 'react';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: `${window.location.origin}/login/resetar`,
      });
      request(url, options);
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando ...</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  );
};

export default LoginPasswordLost;
