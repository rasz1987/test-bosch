import { render, screen } from '@testing-library/react';
import Customer from '../pages/Customer';
import Customers from '../pages/Customers';
import NotFound from '../pages/NotFound';

test('Should render <Customer /> without crash', async () => {
  render(<Customer />)

  expect(await screen.findAllByText('Customer')).toBeTruthy();
});

test('Should render <Customers /> without crash', async () => {
  render(<Customers />)

  expect(await screen.findAllByText('Customers')).toBeTruthy();
});

test('Should render <NotFound /> without crash', async () => {
  render(<NotFound />)

  expect(await screen.findAllByText('title')).toBeTruthy();
});