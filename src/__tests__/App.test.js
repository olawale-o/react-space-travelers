import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../test-utils';
import App from '../App';

describe('App Component', () => {
  test('Should render App Component', async () => {
    render(<App />);
    // expect(screen.getByText('Missions').closest('a')).toHaveAttribute('href', '/missions');
  });
  test('Should check if the links are on the page', () => {
    render(<App />);
    expect(screen.getByText(/Rockets/i)).toBeInTheDocument();
    expect(screen.getByText(/Dragons/i)).toBeInTheDocument();
    expect(screen.getByText(/Missions/i)).toBeInTheDocument();
    expect(screen.getByText(/MyProfile/i)).toBeInTheDocument();
  });

  test('Should check if user can navigate to Missions route', async () => {
    render(<App />);
    userEvent.click(screen.getByText(/Missions/i));
    expect(await screen.findByText(/Thaicom/i)).toBeInTheDocument();
  });

  test('Should check if user can navigate to Rockets route', async () => {
    render(<App />);
    userEvent.click(screen.getByText(/Rockets/i));
    expect(await screen.findByText(/Falcon 1/i)).toBeInTheDocument();
  });

  test('Should check if user can navigate to MyProfile route', async () => {
    render(<App />);
    userEvent.click(screen.getByText(/MyProfile/i));
    expect(await screen.findByText(/My Missions/i)).toBeInTheDocument();
    expect(await screen.findByText(/No Missions/i)).toBeInTheDocument();
    expect(await screen.findByText(/My Rockets/i)).toBeInTheDocument();
    expect(await screen.findByText(/No Rockets/i)).toBeInTheDocument();
    expect(await screen.findByText(/My Dragons/i)).toBeInTheDocument();
    expect(await screen.findByText(/No Dragons/i)).toBeInTheDocument();
  });
});
