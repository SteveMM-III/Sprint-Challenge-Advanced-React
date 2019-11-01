import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('renders without crashing', () => {
  render( <App /> );
});

test( 'contains name', () => {
  const { findAllByText } = render( <App /> );
  findAllByText( 'Name:' );
} );

test( 'contains country', () => {
  const { findAllByText } = render( <App /> );
  findAllByText( 'Country:' );
} );
