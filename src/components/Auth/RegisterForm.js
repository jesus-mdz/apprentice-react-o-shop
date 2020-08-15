import React from 'react';
import Form from '../Form/Form';

function RegisterForm() {
  return (
    <Form
      type="text"
      title="Register"
      inputArr={['First Name', 'Last Name', 'Username', 'Password']}
      tertiaryButton={{ title: 'Cancel', link: '/login' }}
    />
  );
}

export default RegisterForm;