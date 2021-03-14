import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Topbar() {
  return (
    <section>
      <button type="button" data-testid="top-hamburguer">
        <FontAwesomeIcon icon={ faBars } />
      </button>
      <h1 data-testid="top-title">TryBeer</h1>
    </section>
  );
}
