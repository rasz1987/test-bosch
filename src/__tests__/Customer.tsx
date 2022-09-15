import { CustomersContext } from '../context/CustomersContext';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mockCustomerData } from '../mocks/mocks';
import Customer from '../pages/customer/Customer';

jest.mock('../pages/customer/Card.tsx', () => () => (
  <div>My card mocked</div>
));

test('Should render <Customer /> without crash', async () => {
  const setCustomers = () => { };

  render(
    <MemoryRouter>
      <CustomersContext.Provider value={{
        customers: [mockCustomerData],
        setCustomers
      }}>
        <Customer />
      </CustomersContext.Provider>
    </MemoryRouter>
  );

  expect(await screen.findByText('My card mocked')).toBeTruthy();
});