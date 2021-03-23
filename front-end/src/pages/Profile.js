import React, { useContext, useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { yupSchemas, handleSaveUser } from '../utils';

import AppContext from '../context/app.context';
import { Topbar, TextInput, SubmitButton } from '../components';

export default function Profile() {
  const { tokenContext: { token, setToken } } = useContext(AppContext);
  const history = useHistory();
  const [name, setName] = useState(token.name);
  const [disableBtn, setDisableBtn] = useState(true);
  const [success, setSuccess] = useState(false);

  const updateName = (target) => setName(target.value);

  const submit = async (e) => {
    e.preventDefault();

    const payload = { ...token, newName: name };
    const result = await handleSaveUser(payload, setToken, history);
    if (result.success) setSuccess(true);
  };

  useEffect(() => {
    const validateForm = async () => yupSchemas.update.validate({ name })
      .then((valid) => (valid.name) && setDisableBtn(false))
      .catch((error) => {
        if (disableBtn === false) setDisableBtn(true);
        return error;
      });

    const nameChanged = (name.normalize() !== token.name.normalize());
    if (!nameChanged) setDisableBtn(true);
    if (nameChanged) validateForm();
  }, [name, token, disableBtn]);

  return (
    <section>
      { (!token.token) && <Redirect to="/login" /> }
      <Topbar title="Meu perfil" />
      <form onSubmit={ submit }>
        <fieldset>
          <legend>Registro</legend>
          <TextInput
            name="name"
            testId="profile"
            value={ name }
            callback={ updateName }
          />
          <TextInput
            name="email"
            testId="profile"
            value={ token.email }
            readonly
          />
        </fieldset>
        <SubmitButton type="profile" disabled={ disableBtn } />
      </form>
      { (success) ? <p>Atualização concluída com sucesso.</p> : null }
    </section>
  );
}
