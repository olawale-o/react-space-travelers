import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '../test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App Component', () => {
  test('Should rednder App Component', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Missions/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Missions/i));
    expect(await screen.findByText(/Telstar/i)).toBeInTheDocument();
  });
});