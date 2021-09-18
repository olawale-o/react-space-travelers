import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
// import userEvent from '@testing-library/user-event';
// import App from '../App';
import Missions from '../components/Missions';

describe('Missions Component', () => {
  test('Should rednder Mission Component', async () => {
    render(<Missions />);
    // expect(screen.getByText(/Missions/i)).toBeInTheDocument();
    // userEvent.click(screen.getByText(/Missions/i));
    expect(screen.getByText(/Thaicom/i)).toBeInTheDocument();
    expect(await screen.findByText(/Telstar/i)).toBeInTheDocument();
  });

  test('Should check if a Thaicom mission is present on the page', async () => {
    render(<Missions />);
    // userEvent.click(screen.getByText(/Missions/i));
    expect(screen.getByText(/Thaicom/i)).toBeInTheDocument();
  });

  test('Should check if a Telstar mission is present on the page', async () => {
    render(<Missions />);
    // userEvent.click(screen.getByText(/Missions/i));
    expect(screen.getByText(/Telstar/i)).toBeInTheDocument();
  });

  test('Should join Thaicom mission', async () => {
    render(<Missions />);
    expect(await screen.queryByTestId('no-member-1')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('join-1'));
    await screen.getByTestId('leave-1');
    expect(await screen.queryByTestId('active-member-1')).toBeInTheDocument();
  });

  test('Should Leave Thaicon mission', async () => {
    render(<Missions />);
    await screen.getByTestId('leave-1');
    expect(await screen.queryByTestId('active-member-1')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('leave-1'));
    await screen.getByTestId('join-1');
    expect(await screen.queryByTestId('no-member-1')).toBeInTheDocument();
    expect(await screen.queryByTestId('active-member-1')).not.toBeInTheDocument();
  });

  test('Should join Thaicom and Telstar missions', async () => {
    render(<Missions />);
    expect(await screen.queryByTestId('no-member-1')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('join-1'));
    await screen.getByTestId('leave-1');
    expect(await screen.queryByTestId('active-member-1')).toBeInTheDocument();
    expect(await screen.queryByTestId('no-member-2')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('join-2'));
    await screen.getByTestId('leave-2');
    expect(await screen.queryByTestId('active-member-2')).toBeInTheDocument();
  });

  test('Should leave Thaicom and Telstar missions', async () => {
    render(<Missions />);
    await screen.getByTestId('leave-1');
    expect(await screen.queryByTestId('active-member-1')).toBeInTheDocument();
    await screen.getByTestId('leave-2');
    expect(await screen.queryByTestId('active-member-2')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('leave-1'));
    await screen.getByTestId('join-1');
    expect(await screen.queryByTestId('active-member-1')).not.toBeInTheDocument();
    expect(await screen.queryByTestId('no-member-1')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('leave-2'));
    await screen.getByTestId('join-2');
    expect(await screen.queryByTestId('active-member-2')).not.toBeInTheDocument();
    expect(await screen.queryByTestId('no-member-2')).toBeInTheDocument();
  });
});
