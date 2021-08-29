import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '../test-utils';
import App from '../App';

describe('App Component', () => {
  test('Should rednder App Component', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Rockets/i)).toBeInTheDocument();
    expect(screen.getByText(/Dragons/i)).toBeInTheDocument();
    expect(screen.getByText(/Mission/i)).toBeInTheDocument();
    expect(screen.getByText(/MyProfile/i)).toBeInTheDocument();
    expect(await screen.findByText(/Falcon 1/i)).toBeInTheDocument();
    expect(await screen.findByText(/Telstar/i)).toBeInTheDocument();
    expect(screen.getByText('Missions').closest('a')).toHaveAttribute('href', '/missions');
  });
});