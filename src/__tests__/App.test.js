import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '../test-utils';
import App from '../App';

describe('App Component', () => {
  test('Should render App Component', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // expect(screen.getByText('Missions').closest('a')).toHaveAttribute('href', '/missions');
  });
  test('Should check if the links are on the page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Rockets/i)).toBeInTheDocument();
    expect(screen.getByText(/Dragons/i)).toBeInTheDocument();
    expect(screen.getByText(/Missions/i)).toBeInTheDocument();
    expect(screen.getByText(/MyProfile/i)).toBeInTheDocument();
  });

  test('Should check if a rocket Falcon 1 is present on the page', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(await screen.findByText(/Falcon 1/i)).toBeInTheDocument();
  });

  test('Should reserve Falcon 1 rocket', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByTestId('reserve-1'));
    await screen.getByTestId('cancel-1');
    expect(await screen.queryByTestId('reserved-1')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('cancel-1'));
    await screen.getByTestId('reserve-1');
    expect(await screen.queryByTestId('reserved-1')).not.toBeInTheDocument();
  });

  test('Should reserve Falcon 1 and Falcon 9 rockets', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByTestId('reserve-1'));
    await screen.getByTestId('cancel-1');
    expect(await screen.queryByTestId('reserved-1')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('reserve-2'));
    await screen.getByTestId('cancel-2');
    expect(await screen.queryByTestId('reserved-2')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('cancel-1'));
    await screen.getByTestId('reserve-1');
    expect(await screen.queryByTestId('reserved-1')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('cancel-2'));
    await screen.getByTestId('reserve-2');
    expect(await screen.queryByTestId('reserved-2')).not.toBeInTheDocument();
  });
});