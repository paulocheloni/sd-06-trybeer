import React from 'react';

export default function Profile() {
  return (
    <div>
      {/* <TopBar
      title="Meu perfil"
      data-testid="top-title"
      /> */}
      <div className="profile-container">
        <div>
          <img alt="profile" />
          <input
            name="name"
            data-testid="profile-name-input"
            placeholder="Name"
            // value={ prevName }
            // onChange={ handleNameChange }
          />
          <span className="hidden-span">Atualização concluida com sucesso</span>
          <input
            placeholder="Email"
            readOnly
            data-testid="profile-email-input"
            // value={ profileEmail }
            // onChange={ profileEmail }
          />
          <button
            type="button"
            data-testid="profile-save-btn"
            // onClick={ () => saveOnClick() }
            // isDisabled={ isDisabled }
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
