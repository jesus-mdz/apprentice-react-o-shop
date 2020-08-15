import React from 'react';
import Form from '../Form/Form';

function LoginForm() {
  return (
    <Form
      type="text"
      title="Login"
      inputArr={['username', 'password']}
      tertiaryButton={{ title: 'Register', link: '/register' }}
    />
  );
}

export default LoginForm;
