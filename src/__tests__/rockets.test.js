import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import Rockets from '../components/Rockets';

describe('App Component', () => {
  test('Should render Rockets Component', async () => {
    render(<Rockets />);
  });

  //  test('Should check if the links are on the page', () => {
  //    render(<Rockets />);
  //    expect(screen.getByText(/Rockets/i)).toBeInTheDocument();
  //    expect(screen.getByText(/Dragons/i)).toBeInTheDocument();
  //    expect(screen.getByText(/Missions/i)).toBeInTheDocument();
  //    expect(screen.getByText(/MyProfile/i)).toBeInTheDocument();
  //  });

  test('Should check if a rocket Falcon 1 is present on the page', async () => {
    render(<Rockets />);
    expect(await screen.findByText(/Falcon 1/i)).toBeInTheDocument();
  });

  test('Should reserve Falcon 1 rocket', async () => {
    render(<Rockets />);
    fireEvent.click(screen.getByTestId('reserve-1'));
    await screen.getByTestId('cancel-1');
    expect(await screen.queryByTestId('reserved-1')).toBeInTheDocument();
  });

  test('Should Cancel Falcon 1 reservation', async () => {
    render(<Rockets />);
    await screen.getByTestId('cancel-1');
    expect(await screen.queryByTestId('reserved-1')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('cancel-1'));
    await screen.getByTestId('reserve-1');
    expect(await screen.queryByTestId('reserved-1')).not.toBeInTheDocument();
  });

  test('Should reserve Falcon 1 and Falcon 9 rockets', async () => {
    render(<Rockets />);
    fireEvent.click(screen.getByTestId('reserve-1'));
    await screen.getByTestId('cancel-1');
    expect(await screen.queryByTestId('reserved-1')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('reserve-2'));
    await screen.getByTestId('cancel-2');
    expect(await screen.queryByTestId('reserved-2')).toBeInTheDocument();
  });

  test('Should Cancel Falcon 1 and Falcon 9 rockets reservations', async () => {
    render(<Rockets />);
    await screen.getByTestId('cancel-1');
    expect(await screen.queryByTestId('reserved-1')).toBeInTheDocument();
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
