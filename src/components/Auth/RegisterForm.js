import React from 'react';
import Form from '../Shared/Form/Form';

function RegisterForm() {
  return (
    <Form
      type="text"
      title="Register"
      inputArray={['First Name', 'Last Name', 'Username', 'Password']}
      tertiaryButton={{ title: 'Cancel', link: '/login' }}
    />
  );
}

export default RegisterForm;
